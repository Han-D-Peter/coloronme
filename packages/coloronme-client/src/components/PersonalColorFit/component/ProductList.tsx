import { css } from '@emotion/react';
import ProductItem from './ProductItem';

const ProductList = () => {
  return (
    <div css={gridContainerStyle}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => (
        <div css={productItemStyle} key={index}>
          <ProductItem
            id={1}
            imageUrl="/images/greenT.png"
            name="그린 맨투맨 티셔츠 그린 맨투맨 티셔츠"
            platform="지그재그"
            isLiked={false}
          />
        </div>
      ))}
    </div>
  );
};

const gridContainerStyle = css`
  display: grid;
  gap: 10px;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 5%;
  overflow-y: auto;

  @media (max-width: 451px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const productItemStyle = css`
  height: 37vw;
  max-height: 220px;
  width: 100%;

  @media (max-width: 451px) {
    height: 60vw;
  }
`;
export default ProductList;
