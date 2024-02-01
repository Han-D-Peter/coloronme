import { SerializedStyles, css } from '@emotion/react';
import { useMemo } from 'react';
import { TypoScale, TypoType, TypoWeight, fontSize } from '../constants/size';

// type TypoTitleScale = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextBaseType {
  weight?: TypoWeight;
  children: string;
  style?: SerializedStyles;
}
interface TextTitle extends TextBaseType {
  as: 'title';
  size: 'lg' | 'xs' | 'md' | 'sm';
}

interface TextBody extends TextBaseType {
  as: 'body';
  size: 'md' | 'sm';
}

interface TextCaption extends TextBaseType {
  as: 'caption';
  size: 'md' | 'sm';
}

type TextProps = TextTitle | TextBody | TextCaption;

const defaultStyle = css`
  margin: 0;
  padding: 0;
`;

export function Text({ as, size, weight = 'regular', children, style }: TextProps) {
  const textSize = useMemo(() => {
    return css`
      font-family: 'pretendard';
      font-size: ${fontSize[as][size]}px;
    `;
  }, [as, size]);

  const textWeight = useMemo(() => {
    return css`
      font-weight: ${weight === 'bold' ? 800 : 400};
    `;
  }, [weight]);

  if (as === 'title') {
    return <span css={[defaultStyle, textSize, textWeight, style ?? null]}>{children}</span>;
  }

  if (as === 'body' || as === 'caption') {
    return <p css={[defaultStyle, textSize, textWeight, style ?? null]}>{children}</p>;
  }
  return <></>;
}
