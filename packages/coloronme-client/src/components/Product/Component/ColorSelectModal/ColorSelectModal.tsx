import { useState } from 'react';
import { css } from '@emotion/react';
import Sketch from '@uiw/react-color-sketch';

import { Text, Button, color } from '@design';

import DefaultModal from '@/src/components/Common/Modal';
import ColorSelectText from './ColorSelectText';
import PictureSelect from './PictureSelect';
import ImageSection from './ImageSection';

type Props = {
  image: string;
  colorData: string[];
  isOpen: boolean;
  setSelectColors: (color: string[]) => void;
  closeModal: () => void;
};

type SelectType = 'picture' | 'colorPicker';

const MAX_COLORS = 3;

const ColorSelectModal = ({ image, isOpen, setSelectColors, colorData, closeModal }: Props) => {
  const [selectType, setSelectType] = useState<SelectType>('picture');

  const [pictureSelectColor, setPicturePreSelectColor] = useState<string[]>([]);
  const [colorPickerSelectColor, setColorPickerSelectColor] = useState<string>(colorData[0]);
  const [errorMessage, setErrorMessage] = useState('');

  const changeSelectType = () => {
    setErrorMessage('');
    setSelectType((prevType) => (prevType === 'picture' ? 'colorPicker' : 'picture'));
  };

  const togglePictureColor = (color: string) => {
    setErrorMessage('');

    if (pictureSelectColor.includes(color)) {
      setPicturePreSelectColor(pictureSelectColor.filter((item) => item !== color));
    } else if (pictureSelectColor.length < MAX_COLORS) {
      setPicturePreSelectColor([...pictureSelectColor, color]);
    }
  };

  const changeColorPicker = (color: string) => {
    setErrorMessage('');
    setColorPickerSelectColor(color);
  };

  const submitColor = () => {
    const currentColor = selectType === 'picture' ? pictureSelectColor : [colorPickerSelectColor];

    if (currentColor.length === 0) {
      return setErrorMessage('컬러를 선택해주세요.');
    }
    setSelectColors(currentColor);
    closeModal();
  };

  return (
    <DefaultModal style={modalStyles} isOpen={isOpen} ariaHideApp={false}>
      <ColorSelectText />
      <div css={centerSectionStyle}>
        <ImageSection color={colorPickerSelectColor} image={image} isShownColor={selectType === 'colorPicker'} />
        {selectType === 'picture' ? (
          <div css={colorSelectContainer}>
            <PictureSelect colorData={colorData} preSelectColor={pictureSelectColor} toggleColor={togglePictureColor} />
            <button onClick={changeSelectType}>
              <Text as="caption" size="md" style={colorOptionMessageStyle}>
                직접 컬러 선택하기
              </Text>
            </button>
          </div>
        ) : (
          <div css={sketchContainer}>
            <div css={sketchWrapper}>
              <Sketch
                css={sketchInnerStyle}
                color={colorData[0]}
                editableDisable={false}
                disableAlpha={true}
                presetColors={false}
                onChange={(color) => changeColorPicker(color.hex)}
              />
            </div>
            <button onClick={changeSelectType}>
              <Text as="caption" size="md" style={colorOptionMessageStyle}>
                추천 컬러 다시 보기
              </Text>
            </button>
          </div>
        )}
      </div>

      <div css={bottomSectionStyle}>
        <Text as="caption" size="md" style={errorMessageStyle}>
          {errorMessage}
        </Text>
        <div css={managementButtonContainer}>
          <Button onClick={submitColor}>저장</Button>
        </div>
      </div>
    </DefaultModal>
  );
};

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(84, 84, 84, 0.8)',
    zIndex: 10,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',

    width: '85vw',
    maxWidth: '340px',
    minHeight: '60vh',

    display: 'flex',
    flexDirection: 'column' as 'column',
    padding: '30px',
    overflow: 'hidden',
    borderRadius: '10px',
  },
};

const centerSectionStyle = css`
  min-height: 50vh;
  margin-top: 20px;
`;

const colorSelectContainer = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const sketchContainer = css`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const sketchWrapper = css`
  display: flex;
  width: 100%;

  flex-direction: column;
`;

const sketchInnerStyle = css`
  width: 100% !important;

  > div {
    padding: 0 !important;
    height: 100px !important;
    width: 100% !important;
  }
  > div > div {
    height: 120px !important;
  }
`;

const colorOptionMessageStyle = css`
  display: flex;
  color: ${color.gray.gray050};
  justify-content: center;
  text-decoration: underline;
  text-underline-offset: 3px;
`;

const errorMessageStyle = css`
  color: ${color.red.red100};
  height: 10px;
  display: flex;
  justify-content: center;
`;

const bottomSectionStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

const managementButtonContainer = css`
  display: flex;
`;

export default ColorSelectModal;
