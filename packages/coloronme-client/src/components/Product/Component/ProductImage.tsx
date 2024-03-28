/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { BackwardOutline, Text, color } from '@design';

type Props = {
  image?: string | null;
  showBackButton?: boolean;
};

const ProductImage = ({ image, showBackButton = false }: Props) => {
  const router = useRouter();

  const changeFullImage = () => {};

  return (
    <div css={imageContainerStyle}>
      <img src={image ?? '/images/defaultProduct.png'} alt="productImage" css={imgStyle} onClick={changeFullImage} />
      {showBackButton && (
        <div css={backButtonStyle} onClick={router.back}>
          <BackwardOutline width="20" height="20" color={color.gray.gray000} />
        </div>
      )}
      {!image && (
        <Text as="body" size="md" weight="bold" style={imageText}>
          링크를 입력하면 이미지가 나타나요
        </Text>
      )}
    </div>
  );
};

const imageContainerStyle = css`
  position: relative;
  width: 100%;
  height: 56vh;
`;

const imgStyle = css`
  width: 100%;
  height: 100%;
`;

const backButtonStyle = css`
  position: absolute;
  left: 25px;
  top: 30px;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: ${color.gray.gray000};

  white-space: nowrap;
  cursor: pointer;
`;

const imageText = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: ${color.gray.gray000};

  white-space: nowrap;
`;

export default ProductImage;
