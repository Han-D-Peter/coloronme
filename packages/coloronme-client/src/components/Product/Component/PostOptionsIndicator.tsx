import React from 'react';
import { css } from '@emotion/react';
import { MoreVerticalOutline, SirenIconOutline, color } from '@design';

type Props = {
  isMyPost: boolean;
  onMyPostClick?: () => void;
  onOtherPostClick?: () => void;
};

const PostOptionsIndicator = ({ isMyPost, onMyPostClick, onOtherPostClick }: Props) => (
  <>
    {isMyPost ? (
      <div css={iconStyle} onClick={onMyPostClick}>
        <MoreVerticalOutline width="20" height="20" color={color.gray.gray030} />
      </div>
    ) : (
      <div css={iconStyle} onClick={onOtherPostClick}>
        <SirenIconOutline width="20" height="20" color={color.gray.gray030} />
      </div>
    )}
  </>
);

const iconStyle = css`
  display: flex;
`;

export default PostOptionsIndicator;
