import { css } from '@emotion/react';

import { Text, Button } from '@design';
import DefaultModal from './Modal';

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

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: string;
};

const ConfirmModal = ({ isOpen, onClose, children }: Props) => {
  return (
    <DefaultModal style={modalStyles} isOpen={isOpen} ariaHideApp={false}>
      <div css={titleTextContainer}>
        <Text as="body" size="md">
          {children}
        </Text>
      </div>

      <div css={confirmButtonStyle}>
        <Button size="md" onClick={onClose}>
          확인
        </Button>
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

const confirmButtonStyle = css`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export default ConfirmModal;
