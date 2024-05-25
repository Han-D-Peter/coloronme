import { css } from '@emotion/react';
import { CheckmarkOutline } from '@design';

type Props = {
  colorData: string[];
  preSelectColor: string[];
  toggleColor: (color: string) => void;
};

const PictureSelect = ({ colorData, preSelectColor, toggleColor }: Props) => {
  return (
    <div css={colorContainer}>
      {colorData?.map((color) => {
        const isSelected = preSelectColor.includes(color);

        return (
          <div
            key={color}
            css={css`
              ${colorStyle}
              background-color: ${color ?? '#fff'};
            `}
            onClick={() => toggleColor(color)}
          >
            {isSelected && <CheckmarkOutline color="#fff" width="24" height="24" />}
          </div>
        );
      })}
    </div>
  );
};

const colorContainer = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  margin-top: 10px;
`;

const colorStyle = css`
  width: 55px;
  height: 55px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default PictureSelect;
