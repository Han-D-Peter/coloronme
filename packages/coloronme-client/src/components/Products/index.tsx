import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Button } from '@design';

import { useProducts } from '@/src/query/product/product.queries';
import MainHeader from '../Home/components/MainHeader';
import DefaultLayout from '../Common/Layout/DefaultLayout';
import ProductList from './component/ProductList';

const ProductsPage = () => {
  const router = useRouter();
  const { data } = useProducts();

  const registerProduct = () => {
    router.push('/product/register');
  };

  // useEffect(() => {
  //   console.log('data', data);
  // }, [data]);

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
