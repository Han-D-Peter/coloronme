import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { color, Text } from '@design';

import { useDeleteProduct } from '@/src/query/product/product.queries';
import { useBooleanState } from '@/src/hooks/useBooleanState';
import ProductDeleteWarnModal from './ProductDeleteWarnModal';
import BottomSheet from '../../Common/BottomSheet';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ProductManagement = ({ isOpen, onClose }: Props) => {
  const router = useRouter();
  const productId = router.query.productId;

  const [isDeleteModalShown, onDeleteModalOpen, onDeleteModalClose] = useBooleanState();

  const { mutate: productDeleteMutate } = useDeleteProduct();

  const deleteButtonClick = () => {
    onClose();
    onDeleteModalOpen();
  };

  const deleteProduct = () => {
    if (!productId) return;

    productDeleteMutate(+productId, {
      onSuccess() {
        router.push('/products');
      },
    });
  };

  return (
    <>
      <BottomSheet snapPoints={150} isOpen={isOpen} close={onClose}>
        <div css={mainContainer}>
          <Text style={curserStyle} as="title" size="xs" onClick={() => router.push(`edit/${productId}`)}>
            수정하기
          </Text>
          <div css={divideStyle} />
          <Text style={curserStyle} as="title" size="xs" onClick={deleteButtonClick}>
            삭제하기
          </Text>
        </div>
      </BottomSheet>
      {isDeleteModalShown && (
        <ProductDeleteWarnModal isOpen={isDeleteModalShown} closeModal={onDeleteModalClose} onSubmit={deleteProduct} />
      )}
    </>
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
