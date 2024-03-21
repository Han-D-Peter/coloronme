import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { Button } from '@design';

import { useInfiniteProducts } from '@/src/query/product/product.queries';
import useIntersect from '@/src/hooks/useIntersect';
import MainHeader from '../Home/components/MainHeader';
import DefaultLayout from '../Common/Layout/DefaultLayout';
import ProductList from './component/ProductList';

const ProductsPage = () => {
  const router = useRouter();

  const registerProduct = () => {
    router.push('/product/register');
  };

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteProducts();

  const targetRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <DefaultLayout header={<MainHeader isToggleActive={false} />}>
      {data && <ProductList data={data?.pages} targetRef={targetRef} />}
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
