import { ReactNode, HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { color } from '@design';

export default function IconButton({
  children,
  isActive = false,
  ...args
}: { isActive?: boolean; children: ReactNode } & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      css={css`
        width: 100%;
        height: 100%;
        border: none;
        background-color: ${isActive ? `${color.gray.gray060}` : 'transparent'};
      `}
      {...args}
    >
      {children}
    </button>
  );
}
