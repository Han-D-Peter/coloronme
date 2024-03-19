import Image from 'next/image';
import { css } from '@emotion/react';
import { Text, color } from '@design';

type Props = {
  image: string;
};

const ProductImage = ({ image }: Props) => {
  return (
    <div css={imageContainerStyle}>
      <Image src={image} alt="productImage" fill={true} />
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
  height: 45vh;
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
