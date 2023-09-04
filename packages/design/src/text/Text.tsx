import { SerializedStyles, css } from '@emotion/react';
import { useMemo } from 'react';
import { TypoScale, TypoType, TypoWeight, fontSize } from '../constants/size';

// type TypoTitleScale = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps {
  as: TypoType;
  size: TypoScale;
  weight?: TypoWeight;
  children: string;
  style?: SerializedStyles;
}

export function Text({ as, size, weight = 'regular', children, style }: TextProps) {
  const textSize = useMemo(() => {
    return css`
      font-size: ${fontSize[as][size]}px;
    `;
  }, [as, size]);

  const textWeight = useMemo(() => {
    return css`
      font-weight: ${weight};
    `;
  }, [weight]);

  if (as === 'title') {
    return <span css={[textSize, textWeight, style ?? null]}>{children}</span>;
  }

  if (as === 'body') {
    return <p css={[textSize, textWeight, style ?? null]}>{children}</p>;
  }
}
