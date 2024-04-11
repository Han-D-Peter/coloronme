import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { color, Text } from '@design';

const ProductManagement = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return (
    <div css={mainContainer}>
      <Text as="title" size="xs" onClick={() => router.push(`edit/${productId}`)}>
        수정하기
      </Text>
      <div css={divideStyle} />
      <Text as="title" size="xs" onClick={() => console.log('삭제')}>
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

export default ProductManagement;
