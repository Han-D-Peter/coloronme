import { useState } from 'react';
import { css } from '@emotion/react';
import Sketch from '@uiw/react-color-sketch';

import { Button, color, Text } from '@design';

type Props = {
  colors: string[];
  errorMessage?: string;
  onClose: () => void;
  onSubmit: (color: string) => void;
};

const ColorPickerModal = ({ colors, errorMessage, onClose, onSubmit }: Props) => {
  const initialColor = colors.length > 0 ? colors[0] : '#83aee6';
  const [selectColor, setSelectColor] = useState(initialColor);

  return (
    <div css={colorPickerStyle}>
      <div css={innerContentStyle}>
        <Sketch
          css={sketchInnerStyle}
          color={selectColor}
          editableDisable={false}
          disableAlpha={true}
          presetColors={colors ?? false}
          onChange={(color) => setSelectColor(color.hex)}
        />
        <div>
          <Text as="caption" size="md" style={errorMessageStyle}>
            {errorMessage}
          </Text>
          <div css={buttonContainer}>
            <Button variant="ghost" onClick={onClose}>
              취소
            </Button>
            <Button onClick={() => onSubmit(selectColor)}>저장</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const colorPickerStyle = css`
  position: absolute;
  z-index: 100;
  left: 70px;
  width: 220px;
  background-color: white;

  border-radius: 10px;
  box-shadow:
    rgb(0 0 0 / 15%) 0px 0px 0px 1px,
    rgb(0 0 0 / 15%) 0px 8px 16px;
`;

const innerContentStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const buttonContainer = css`
  display: flex;
  padding: 10px;
  gap: 5px;
`;

const errorMessageStyle = css`
  color: ${color.red.red100};
  height: 10px;
  display: flex;
  justify-content: center;
`;

const sketchInnerStyle = css`
  box-shadow: none !important;
  border-radius: 10px !important;
`;

export default ColorPickerModal;
