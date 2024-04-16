import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { color, Text } from '@design';

import { useDeleteProduct } from '@/src/query/product/product.queries';

const ProductManagement = () => {
  const router = useRouter();
  const productId = router.query.productId;

  const { mutate: productDeleteMutate } = useDeleteProduct();

  const deleteProduct = () => {
    if (!productId) return;

    productDeleteMutate(+productId, {
      onSuccess() {
        router.push('/products');
      },
    });
  };

  return (
    <div css={mainContainer}>
      <Text style={curserStyle} as="title" size="xs" onClick={() => router.push(`edit/${productId}`)}>
        수정하기
      </Text>
      <div css={divideStyle} />
      <Text style={curserStyle} as="title" size="xs" onClick={deleteProduct}>
        삭제하기
      </Text>
    </div>
  );
};

const mainContainer = css`
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  gap: 12px;
`;

const divideStyle = css`
  height: 1px;
  width: 100%;
  background-color: ${color.gray.gray010};
`;

const curserStyle = css`
  cursor: pointer;
`;

export default ProductManagement;
