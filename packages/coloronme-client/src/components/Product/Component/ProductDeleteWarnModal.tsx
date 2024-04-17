import { css } from '@emotion/react';

import { Text, Button, color } from '@design';

import DefaultModal from '../../Common/Modal';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  onSubmit: () => void;
};

const modalStyles = {
  content: {
    width: '85vw',
    maxWidth: '340px',
    minHeight: '140px',

    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '20px',
    padding: '30px',
    overflow: 'hidden',
  },
};

const ProductDeleteWarnModal = ({ isOpen, closeModal, onSubmit }: Props) => {
  return (
    <DefaultModal style={modalStyles} isOpen={isOpen} ariaHideApp={false}>
      <div css={titleTextContainer}>
        <Text as="body" size="md">
          상품을 삭제하시겠습니까?
        </Text>
        <Text as="body" size="md">
          삭제한 상품은 복구할 수 없습니다.
        </Text>
      </div>

      <div css={managementButtonContainer}>
        <Button variant="ghost" onClick={closeModal}>
          취소
        </Button>
        <Button onClick={onSubmit}>삭제</Button>
      </div>
    </DefaultModal>
  );
};

const titleTextContainer = css`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2px;
  flex-wrap: wrap;
`;

const titleTextSecondLine = css`
  display: flex;
  flex-wrap: wrap;
`;

const titleTextCaption = css`
  color: ${color.gray.gray030};
`;

const imgStyle = css`
  width: 100%;
  height: 270px;
  border-radius: 8px;
`;

const colorContainer = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;

const colorStyle = css`
  width: 55px;
  height: 55px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const errorMessageStyle = css`
  color: ${color.red.red100};
  height: 12px;
  margin-left: 10px;
`;

const bottomSectionStyle = css`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const managementButtonContainer = css`
  display: flex;
  gap: 10px;
`;

export default ProductDeleteWarnModal;
