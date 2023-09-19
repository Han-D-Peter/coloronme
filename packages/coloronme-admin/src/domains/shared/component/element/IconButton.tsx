import { css } from '@emotion/react';
import { HTMLAttributes, ReactNode } from 'react';

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function IconButton({ children, ...props }: IconButtonProps) {
  return (
    <button
      css={css`
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
      {...props}
    >
      {children}
    </button>
  );
}
