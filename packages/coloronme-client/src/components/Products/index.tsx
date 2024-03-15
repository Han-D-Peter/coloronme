import { css } from '@emotion/react';

import { Button } from '@design';

import { useProducts } from '@/src/query/product/product.queries';
import MainHeader from '../Home/components/MainHeader';
import DefaultLayout from '../Common/Layout/DefaultLayout';
import ProductList from './component/ProductList';

const ProductsPage = () => {
  const { data } = useProducts();

  const registerProduct = () => {
    console.log('상품 등록');
  };

  return (
    <DefaultLayout header={<MainHeader isToggleActive={false} />}>
      <ProductList />
      <div css={registerButtonStyle}>
        <Button size="md" onClick={registerProduct}>
          상품 등록
        </Button>
      </div>
    </DefaultLayout>
  );
};

const registerButtonStyle = css`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

export default ProductsPage;
