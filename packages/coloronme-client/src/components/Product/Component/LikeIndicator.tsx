import React from 'react';
import { css } from '@emotion/react';
import { Heart, HeartOutline, Text, color } from '@design';

type Props = {
  isLike: boolean;
  count: number;
  onClick?: () => void;
};

const LikeIndicator = ({ isLike, count, onClick }: Props) => (
  <div css={likeIconContainer} onClick={onClick}>
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
        color: ${count ? color.red.red100 : color.gray.gray030};
      `}
    >
      {count}
    </Text>
  </div>
);

const likeIconContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LikeIndicator;
