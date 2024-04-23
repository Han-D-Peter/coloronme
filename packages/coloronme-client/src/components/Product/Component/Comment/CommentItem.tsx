import Image from 'next/image';
import { css } from '@emotion/react';

import { color, Text, MoreVerticalOutline } from '@design';

import { PERSONAL_COLOR_MAPPING } from '@/src/constants/constants';
import { Comment } from '@/src/query/comment/comment.model';
import { useEffect, useState } from 'react';
import { formatDate } from '@/src/utils/formatDate';

export type ManagementCommentProps = {
  id: number;
  isMyComment: boolean;
  isReported: boolean;
  nickname: string;
  comment: string;
};

type Props = {
  comment: Comment;
  changeSelectComment: ({ id, isMyComment, isReported }: ManagementCommentProps) => void;
};

const CommentItem = ({ comment, changeSelectComment }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    console.log('comment', comment);
  }, [comment]);

  return (
    <div>
      <div css={userInfoContainerStyle}>
        <div css={commentAuthorSectionStyle}>
          <Image alt="userImage" src={comment.user.profileImageUrl} width={38} height={38} css={userImageStyle} />
          <div css={authorDetailContainer}>
            <div css={authorDetailsStyle}>
              <Text as="body" size="md" weight="bold">
                {comment.user.nickname}
              </Text>
              {comment.isMyComment && (
                <div css={authorBadgeStyle}>
                  <Text as="caption" size="sm">
                    등록자
                  </Text>
                </div>
              )}
            </div>

            <Text as="caption" size="md" style={subContentStyle}>
              {PERSONAL_COLOR_MAPPING[comment.user.personalColorId].name}
            </Text>
          </div>
        </div>

        <div css={commentActionsStyle}>
          <Text as="body" size="sm" style={commentDateStyle}>
            {formatDate(comment.createdAt)}
          </Text>
          <div
            css={moreIconContainerStyle}
            onClick={() =>
              changeSelectComment({
                id: comment.id,
                isMyComment: comment.isMyComment,
                isReported: comment.isReported,
                comment: comment.comment,
                nickname: comment.user.nickname,
              })
            }
          >
            <MoreVerticalOutline width="15" height="15" color={color.gray.gray030} />
          </div>
        </div>
      </div>

      <div css={commentTextStyle}>
        <div css={isExpanded ? expandedStyle : commentStyle} onClick={toggleExpand}>
          <Text as="body" size="sm">
            {comment.comment}
          </Text>
        </div>
        {comment.comment.length > 100 && (
          <Text as="body" size="sm" onClick={toggleExpand} style={expandTextStyle}>
            {isExpanded ? '접기' : '자세히보기'}
          </Text>
        )}
      </div>
    </div>
  );
};

const expandTextStyle = css`
  color: ${color.gray.gray030};
  cursor: pointer;
`;

const commentStyle = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  cursor: pointer;
`;

const expandedStyle = css`
  display: block;
`;

const commentTextStyle = css`
  margin-left: 50px;
  margin-top: 5px;
`;

const userInfoContainerStyle = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const userImageStyle = css`
  border-radius: 100%;
`;

const commentAuthorSectionStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const authorDetailContainer = css`
  display: flex;
  gap: 2px;
  flex-direction: column;
`;

const authorDetailsStyle = css`
  display: flex;
  gap: 5px;
`;

const commentActionsStyle = css`
  display: flex;
`;

const subContentStyle = css`
  color: ${color.gray.gray050};
`;

const commentDateStyle = css`
  color: ${color.gray.gray030};
`;

const moreIconContainerStyle = css`
  display: flex;
  cursor: pointer;
`;

const authorBadgeStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 42px;
  height: 17px;
  background-color: ${color.gray.gray010};
  color: ${color.gray.gray050};
  border-radius: 30px;
`;

export default CommentItem;
