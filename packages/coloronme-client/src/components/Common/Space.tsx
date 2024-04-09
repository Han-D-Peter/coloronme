import React from 'react';
import { css } from '@emotion/react';

type SpaceProps = {
  height?: number;
};

const Space: React.FC<SpaceProps> = ({ height = 20 }) => {
  return (
    <div
      css={css`
        height: ${height}px;
      `}
    ></div>
  );
};

export default Space;
