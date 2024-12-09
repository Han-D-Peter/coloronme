import { useState } from 'react';
import { css } from '@emotion/react';
import ModalBox from '../Modal';
import { Text } from '../text';
import { color as colorConstant } from '../constants';
import Button from '../Button';
import useColorLibrary from './hooks/useColorLibrary';
import useBoolean from './hooks/useBoolean';
import { ColorLibraryContext } from './context/useColorContext';
import { ColorRGB, ColorGroup as ColorGroupTypes } from './types';
import ColorGroup from './ColorGroup';
import ColorPicker from './ColorPicker';

interface ColorSelect {
  value?: ColorRGB | null;
  onChange?: (value: ColorRGB | null) => void;
}

export default function ColorSelect({ value = null, onChange }: ColorSelect) {
  const [selectedColor, setSelectedColor] = useState<ColorRGB | null>(value);
  const [isShown, open, close] = useBoolean(false);
  const color = useColorLibrary();

  function clear() {
    onChange && onChange(null);
    setSelectedColor(null);
  }

  function selectColor(color: ColorRGB) {
    setSelectedColor(color);
    onChange && onChange(color);
    close();
  }

  return (
    <ColorLibraryContext.Provider value={color}>
      <div
        css={css`
          position: relative;
          width: 60px;
          height: 60px;
        `}
      >
        {selectedColor && (
          <button
            onClick={clear}
            css={css`
              z-index: 100;
              cursor: pointer;
              position: absolute;
              width: 16px;
              height: 16px;
              background-color: black;
              border: none;
              border-radius: 100px;
              right: 0;
              top: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 0;
            `}
          >
            <div
              css={css`
                width: 10px;
                height: 2px;
                background-color: #fff;
                border-radius: 5px;
              `}
            ></div>
          </button>
        )}
        <button
          onClick={open}
          css={css`
            cursor: pointer;
            width: 100%;
            height: 100%;
            background-color: ${selectedColor
              ? `rgb(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b})`
              : colorConstant.gray.gray020};
            border: none;
            border-radius: 100px;
            padding: 0%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          `}
        >
          {!selectedColor && (
            <>
              <div
                css={css`
                  width: 23px;
                  height: 3px;
                  border-radius: 100px;
                  background-color: white;
                `}
              ></div>
              <div
                css={css`
                  position: absolute;
                  width: 3px;
                  height: 23px;
                  border-radius: 100px;
                  background-color: white;
                `}
              ></div>
            </>
          )}
        </button>
      </div>
      <ModalBox
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: '18px',
          paddingRight: '18px',
        }}
        isOpen={isShown}
        close={close}
        open={open}
      >
        <div
          css={css`
            padding: 21px 27px;
          `}
        >
          <SteppedSelection onSelect={selectColor} />
          <div
            css={css`
              margin-top: 39px;
            `}
          >
            <Button onClick={close} variant="ghost">
              닫기
            </Button>
          </div>
        </div>
      </ModalBox>
    </ColorLibraryContext.Provider>
  );
}

function SteppedSelection({ onSelect }: { onSelect: (color: ColorRGB) => void }) {
  const [selectedGroup, setSelectedGroup] = useState<ColorGroupTypes | null>(null);
  return (
    <div>
      <div>
        <StepProgressName isProgressing={!selectedGroup}>색상군 선택</StepProgressName>
        <StepProgressName isProgressing={!!selectedGroup}>세부색상 선택</StepProgressName>
      </div>
      <div>
        {!selectedGroup ? (
          <ColorGroup onSelect={(value) => setSelectedGroup(value)} />
        ) : (
          <ColorPicker group={selectedGroup} onPick={onSelect} />
        )}
      </div>
    </div>
  );
}

interface StepProgressName {
  onClick?: () => void;
  isProgressing?: boolean;
  children: string;
}

function StepProgressName({ children, onClick, isProgressing }: StepProgressName) {
  const color = isProgressing
    ? { bar: `${colorConstant.gray.gray050}`, text: 'black' }
    : { bar: '#E1E1E1', text: '#E1E1E1' };
  return (
    <div
      onClick={onClick}
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 4px;
          height: 22px;
          background-color: ${color.bar};
          margin-right: 13px;
        `}
      ></div>
      <Text
        style={css`
          color: ${color.text};
        `}
        as="title"
        size="xs"
        weight="bold"
      >
        {children}
      </Text>
    </div>
  );
}
