import { ReactNode, useMemo } from 'react';
import { css } from '@emotion/react';

interface CardProps {
  width?: number;
  height?: number;
  children?: ReactNode;
}

export default function Card({ width = 100, height = 100, children }: CardProps) {
  const cardStyle = useMemo(() => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      background-color: white;
      box-shadow: 0px 4px 10px 0px #f0f0f0;
      width: ${width}px;
      height: ${height}px;
    `;
  }, [width, height]);
  return <div css={cardStyle}>{children && children}</div>;
}
