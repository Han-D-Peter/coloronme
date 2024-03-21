import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { Heart, HeartOutline, Text, color } from '@design';
import { Product } from '@/src/query/product/product.model';

const ProductItem = ({ id, imageUrl, name, platform, isLiked }: Product) => {
  const router = useRouter();

  const toggleLike = () => {
    console.log('like');
  };

  const navigateToProductDetail = () => {
    router.push(`/product/${id}`);
  };

  return (
    <div css={productContainerStyle}>
      <div css={imageContainerStyle}>
        <img src={imageUrl} alt={name} css={imageStyle} onClick={navigateToProductDetail} />

        <div css={heartIconStyle} onClick={toggleLike}>
          {isLiked ? (
            <Heart width="20" height="20" color={color.red.red200} />
          ) : (
            <HeartOutline width="20" height="20" color={color.gray.gray000} />
          )}
        </div>
      </div>
      <div css={textContainerStyles} onClick={navigateToProductDetail}>
        <Text as="body" size="sm" weight="bold" style={nameStyle}>
          {name}
        </Text>
        <Text as="caption" size="md" style={platformStyle}>
          {platform}
        </Text>
      </div>
    </div>
  );
};

const productContainerStyle = css`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const imageContainerStyle = css`
  position: relative;

  width: 100%;
  height: 82%;
`;

const heartIconStyle = css`
  position: absolute;
  right: 6px;
  top: 6px;
  z-index: 1;
`;

const imageStyle = css`
  width: 100%;
  height: 100%;
  border-radius: 5%;
`;

const multiLineEllipsis = css`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const textContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 5px;
`;

const nameStyle = css`
  width: 100%;
  height: 100%;
  ${multiLineEllipsis}
  color: ${color.gray.gray060};
`;

const platformStyle = css`
  width: 100%;
  height: 100%;
  ${multiLineEllipsis}

  color: ${color.gray.gray040};
`;
export default ProductItem;
