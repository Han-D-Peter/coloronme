import { css } from '@emotion/react';
import ProductItem from './ProductItem';
import { Products } from '@/src/query/product/product.model';
import { RefObject } from 'react';

type Props = {
  data: Products[];
  targetRef: RefObject<HTMLDivElement>;
};

const ProductList = ({ data, targetRef }: Props) => {
  return (
    <div css={gridContainerStyle}>
      {data?.map((page) => {
        return page?.products?.map((item) => (
          <div css={productItemStyle} key={item.id}>
            <ProductItem
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              platform={item.platform}
              isMyLike={item.isMyLike}
            />
          </div>
        ));
      })}
      <div css={targetStyle} ref={targetRef} />
    </div>
  );
};

const gridContainerStyle = css`
  display: grid;
  gap: 10px;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 5%;

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

const targetStyle = css`
  height: 1px;
  z-index: 1000;
`;

export default ProductList;
