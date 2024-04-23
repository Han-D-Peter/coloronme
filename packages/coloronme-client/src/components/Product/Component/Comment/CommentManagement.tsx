import { css } from '@emotion/react';

import { Text } from '@design';

import BottomSheet from '@/src/components/Common/BottomSheet';

type Props = {
  isOpen: boolean;
  isMyComment: boolean;
  onClose: () => void;
  onMyCommentClick: () => void;
  onOtherCommentClick: () => void;
};

const CommentManagement = ({ isOpen, isMyComment, onMyCommentClick, onOtherCommentClick, onClose }: Props) => {
  return (
    <>
      <BottomSheet snapPoints={110} isOpen={isOpen} close={onClose}>
        <div css={mainContainer}>
          {isMyComment ? (
            <Text
              style={curserStyle}
              as="title"
              size="xs"
              onClick={() => {
                onClose();
                onMyCommentClick();
              }}
            >
              삭제하기
            </Text>
          ) : (
            <Text
              style={curserStyle}
              as="title"
              size="xs"
              onClick={() => {
                onClose();
                onOtherCommentClick();
              }}
            >
              신고하기
            </Text>
          )}
        </div>
      </BottomSheet>
    </>
  );
};

const mainContainer = css`
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  gap: 12px;
`;

const curserStyle = css`
  cursor: pointer;
`;

export default CommentManagement;
