import React, { ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { Heart, HeartOutline, Text, color } from '@design';

type Props = {
  isLike: boolean;
  count: number;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const LikeIndicator = ({ isLike, count, disabled, onClick }: Props) => (
  <button css={likeIconContainer} onClick={onClick} disabled={disabled}>
    {isLike ? (
      <Heart width="13" height="13" color="red" />
    ) : (
      <HeartOutline width="13" height="13" color={color.gray.gray030} />
    )}
    <Text
      as="caption"
      size="sm"
      style={css`
        margin-top: -3px;
        color: ${isLike ? color.red.red100 : color.gray.gray030};
      `}
    >
      {count}
    </Text>
  </button>
);

const likeIconContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LikeIndicator;
