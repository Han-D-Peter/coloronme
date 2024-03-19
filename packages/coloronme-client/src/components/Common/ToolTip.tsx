import React, { useState } from 'react';
import { SerializedStyles, css } from '@emotion/react';
import { color } from '../../../../design/src/constants';

type ToolTipProps = {
  content: React.ReactElement;
  children: React.ReactNode;
  style?: SerializedStyles;
};

const ToolTip = ({ content, children, style }: ToolTipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div css={[hoverContainerStyle]} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {children}
      <div
        css={css`
          ${tooltipStyle}
          display: ${isVisible ? 'block' : 'none'};
          ${style}
        `}
      >
        {content}
      </div>
    </div>
  );
};

const hoverContainerStyle = css`
  position: relative;
  display: inline-block;
  margin: auto;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
`;

const tooltipStyle = css`
  min-width: 10em;
  max-width: 21em;

  position: absolute;
  left: 0;
  top: 100%;
  margin-top: 8px;
  padding: 10px 20px;
  color: ${color.gray.gray000};
  background-color: ${color.gray.gray060};
  border-radius: 5px;
  z-index: 1000;

  &::before {
    content: '';
    position: absolute;
    left: 9px;
    top: -6px;
    border-width: 0 4px 6px;
    border-style: solid;
    border-color: transparent transparent ${color.gray.gray060};
    transform: translateX(-50%);
  }
`;

export default ToolTip;
