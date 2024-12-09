import { css } from '@emotion/react';
import { color } from '../../constants';
import { ReactNode } from 'react';
import DropdownElement from './DropdownElement';

interface DropdownContianerProps {
  children: React.ReactNode;
}

export default function DropdownContainer({ children }: DropdownContianerProps) {
  return (
    <div
      css={css`
        position: absolute;
        z-index: 1000000;
        top: 36px;
        border-radius: 0 0 5px 5px;
        border: 1px solid ${color.gray.gray020};
        border-top: 0px;
        width: 100%;
        max-height: 210px;
        min-width: 130px;
      `}
    >
      {children}
    </div>
  );
}
