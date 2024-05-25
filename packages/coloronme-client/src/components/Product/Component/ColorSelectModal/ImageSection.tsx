import { css } from '@emotion/react';

type Props = {
  color: string;
  image: string;
  isShownColor: boolean;
};

const ImageSection = ({ color, image, isShownColor }: Props) => {
  return (
    <div css={wrapperStyle}>
      <img src={image ?? '/images/defaultProduct.png'} alt="productImage" css={imgStyle} />
      {isShownColor && (
        <div
          css={css`
            ${circleStyle}
            background-color: ${color};
          `}
        />
      )}
    </div>
  );
};

const wrapperStyle = css`
  position: relative;
`;

const circleStyle = css`
  position: absolute;
  bottom: 15px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const imgStyle = css`
  width: 100%;
  height: 270px;
  border-radius: 8px;
`;

export default ImageSection;
