import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useComments, useDeleteComment, usePostComment, useReportComment } from '@/src/query/comment/comment.queries';
import { useBooleanState } from '@/src/hooks/useBooleanState';
import { queryClient } from '@/src/pages/_app';
import CommentInput from './CommentInput';
import CommentManagement from './CommentManagement';
import CommentItem, { ManagementCommentProps } from './CommentItem';
import { COMMENT_REPORT_ENTRIES } from '@/src/constants/constants';
import CommentReportModal from './CommentReportModal';
import AlreadyReportedCommentModal from './AlreadyReportedCommentModal';

type SelectComment = {
  id: number | null;
  isMyComment: boolean;
  isReported: boolean;
  comment: string;
  nickname: string;
};

const Comment = () => {
  const router = useRouter();
  const productId = router.query.productId;

  const { data: commentList, isLoading } = useComments(Number(productId));
  const { mutate: postCommentMutate } = usePostComment();
  const { mutate: commentDeleteMutate } = useDeleteComment();
  const { mutate: reportMutate } = useReportComment();

  useEffect(() => {
    console.log('commentList', commentList);
  }, [commentList]);

  const [comment, setComment] = useState('');
  const [selectedComment, setSelectedComment] = useState<SelectComment>({
    id: null,
    isMyComment: false,
    isReported: false,
    comment: '',
    nickname: '',
  });
  const [reportType, setReportType] = useState('');
  const [reportMemo, setReportMemo] = useState('');
  const [reportErrorMessage, setReportErrorMessage] = useState('');

  const [isBottomSheetShown, onBottomSheetOpen, onBottomSheetClose] = useBooleanState(false);
  const [isAlreadyReportModalShown, onAlreadyReportModalOpen, onAlreadyReportModalClose] = useBooleanState(false);
  const [isCommentReportModalShown, onCommentReportModalOpen, onCommentReportModalClose] = useBooleanState(false);

  const submitComment = () => {
    if (!productId || comment.trim() === '') return;

    postCommentMutate(
      { comment, productId: +productId },
      {
        onSuccess: () => {
          setComment('');
          queryClient.invalidateQueries({ queryKey: ['comments'] });
        },
      },
    );
  };

  const deleteComment = (commentId: number | null) => {
    if (!commentId) return;

    commentDeleteMutate(commentId, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['comments'] });
        onBottomSheetClose();
      },
    });
  };

  const changeSelectComment = ({ id, isMyComment, isReported, comment, nickname }: ManagementCommentProps) => {
    setSelectedComment({
      id,
      isMyComment,
      isReported,
      comment,
      nickname,
    });
    onBottomSheetOpen();
  };

  const changeReportType = (value: string) => {
    setReportType(value);
    setReportErrorMessage('');
  };

  const openReportModal = (isReported: boolean) => {
    if (isReported) {
      return onAlreadyReportModalOpen();
    }

    onCommentReportModalOpen();
  };

  const commentReportSubmit = () => {
    if (!selectedComment.id) return;

    const reportTypeKey = COMMENT_REPORT_ENTRIES.find((entry) => entry[1] === reportType);
    if (!reportTypeKey) {
      return setReportErrorMessage('신고 사유를 선택해주세요.');
    }
    setReportErrorMessage('');

    reportMutate(
      {
        id: selectedComment.id,
        reason: reportTypeKey[0],
        comment: reportMemo,
      },
      {
        onSuccess: () => {
          onCommentReportModalClose();
          queryClient.invalidateQueries({ queryKey: ['comments'] });
        },
      },
    );
  };

  if (isLoading) return <></>;

  return (
    <>
      <CommentInput comment={comment} onChangeComment={setComment} onsubmit={submitComment} />

      {commentList?.map((comment) => (
        <CommentItem key={comment.id} comment={comment} changeSelectComment={changeSelectComment} />
      ))}

      <CommentManagement
        isMyComment={selectedComment.isMyComment}
        isOpen={isBottomSheetShown}
        onClose={onBottomSheetClose}
        onMyCommentClick={() => deleteComment(selectedComment.id)}
        onOtherCommentClick={() => openReportModal(selectedComment.isReported)}
      />
      <CommentReportModal
        isOpen={isCommentReportModalShown}
        onClose={onCommentReportModalClose}
        onSubmit={commentReportSubmit}
        reportType={reportType}
        setReportType={changeReportType}
        reportMemo={reportMemo}
        setReportMemo={setReportMemo}
        errorMessage={reportErrorMessage}
        comment={selectedComment.comment}
        nickname={selectedComment.nickname}
      />
      <AlreadyReportedCommentModal isOpen={isAlreadyReportModalShown} onClose={onAlreadyReportModalClose} />
    </>
  );
};

export default Comment;
