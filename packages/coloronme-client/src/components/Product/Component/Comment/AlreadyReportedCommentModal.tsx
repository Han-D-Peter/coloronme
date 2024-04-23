import ConfirmModal from '@/src/components/Common/ConfirmModal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AlreadyReportedCommentModal = ({ isOpen, onClose }: Props) => {
  return (
    <ConfirmModal isOpen={isOpen} onClose={onClose}>
      이미 신고한 댓글 입니다.
    </ConfirmModal>
  );
};

export default AlreadyReportedCommentModal;
