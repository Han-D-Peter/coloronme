import React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { color } from '@design';

type Props = {
  isOpen?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  style?: SerializedStyles;
};

const Tab = ({ isOpen = false, children, style }: Props) => {
  if (!isOpen) return null;

  return (
    <div
      css={css`
        ${tabContainer}
        ${style}
      `}
    >
      {children}
    </div>
  );
};

const tabContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${color.gray.gray000};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  width: 117px;
  padding: 10px 0;
  gap: 8px;
  flex-shrink: 0;
  position: absolute;
  z-index: 10;
`;

export default Tab;
