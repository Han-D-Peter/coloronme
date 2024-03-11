import { css } from '@emotion/react';
import { PERSONAL_COLOR_MAPPING } from '@/src/constants/constants';
import { ColorCode, ColorName } from '@design';

interface BottomSheetProps {
  onClick: (code: ColorCode, name: ColorName, id: number) => void;
}

const ColorOptions = ({ onClick }: BottomSheetProps) => {
  return (
    <>
      {Object.entries(PERSONAL_COLOR_MAPPING).map(([id, { code, name }]) => (
        <button key={code} css={colorButton} onClick={() => onClick(code, name, +id)}>
          {name}
        </button>
      ))}
    </>
  );
};

const colorButton = css`
  width: 100%;
  padding: 17px 0;

  color: #000;
  text-align: center;
  font-size: 16px;
  font-family: Pretendard;

  gap: 10px;
`;

export default ColorOptions;
