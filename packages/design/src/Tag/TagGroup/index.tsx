import { css } from '@emotion/react';
import { useMemo } from 'react';
import { tagGapSize } from '../../../src/constants';

interface TagGroupProps {
  children: React.ReactNode;
  gap?: 'lg' | 'md';
}

export function TagGroup({ children, gap = 'lg' }: TagGroupProps) {
  const gapSizeStyle = useMemo(() => {
    return css`
      gap: ${tagGapSize[gap]}px;
    `;
  }, [gap]);

  return <div css={[containerStyle, gapSizeStyle]}>{children}</div>;
}

const containerStyle = css`
  display: flex;
`;
