import { css } from '@emotion/react';
import { color } from '@design';

interface Hr {
  topMargin?: number;
  bottomMargin?: number;
}

export default function Hr({ topMargin = 0, bottomMargin = 0 }: Hr) {
  return (
    <div
      css={css`
        margin-top: ${topMargin}px;
        margin-bottom: ${bottomMargin}px;
        width: 100%;
        height: 1px;
        background-color: ${color.gray.gray020};
      `}
    ></div>
  );
}
