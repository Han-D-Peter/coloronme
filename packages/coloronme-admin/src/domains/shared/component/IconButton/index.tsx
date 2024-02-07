import { ReactNode, HTMLAttributes } from 'react';
import { css } from '@emotion/react';

export default function IconButton({
  children,
  isActive = false,
  ...args
}: { isActive?: boolean; children: ReactNode } & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      css={css`
        width: 27px;
        height: 27px;
        ${isActive
          ? css`
              border: 1px solid #bfbfbf;
              border-radius: 3px;
            `
          : css`
              border: none;
            `}

        background-color: ${isActive ? '#d7d7d7' : 'transparent'};
      `}
      {...args}
    >
      {children}
    </button>
  );
}
