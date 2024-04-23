import { css } from '@emotion/react';
import { color, Text } from '@design';

type Props = {
  onsubmit: () => void;
  comment: string;
  onChangeComment: (e: string) => void;
};

const CommentInput = ({ comment, onChangeComment, onsubmit }: Props) => {
  return (
    <form css={commentInputWrapperStyle}>
      <textarea
        value={comment}
        css={commentInputStyle}
        placeholder="댓글을 남겨보세요."
        onChange={(e) => onChangeComment(e.target.value)}
      />
      <button
        css={submitCommentButtonStyle}
        onClick={(e) => {
          e.preventDefault();
          onsubmit();
        }}
      >
        <Text as="body" size="sm">
          등록
        </Text>
      </button>
    </form>
  );
};

const commentInputStyle = css`
  border-radius: 5px;
  border: 1px solid ${color.gray.gray020};
  width: 90%;
  height: 72px;
  padding: 10px;

  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${color.gray.gray020};
  }
`;

const commentInputWrapperStyle = css`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const submitCommentButtonStyle = css`
  width: 47px;
  height: 24px;
  background-color: ${color.gray.gray090};
  color: ${color.gray.gray000};
  border-radius: 30px;
`;

export default CommentInput;
