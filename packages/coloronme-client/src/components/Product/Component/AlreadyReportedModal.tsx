import ConfirmModal from '../../Common/ConfirmModal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AlreadyReportedModal = ({ isOpen, onClose }: Props) => {
  return (
    <ConfirmModal isOpen={isOpen} onClose={onClose}>
      이미 신고한 게시물 입니다.
    </ConfirmModal>
  );
};

export default AlreadyReportedModal;
