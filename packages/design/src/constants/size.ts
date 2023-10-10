export type TypoType = 'title' | 'body' | 'caption';
export type TypoScale = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
export type TypoWeight = 'bold' | 'regular';

export type buttonScale = 'md' | 'lg';
export type ButtonSizeDimensions = {
  width: number;
  height: number;
};

export type FontSize = {
  [key in TypoType]: Partial<{
    [sizeKey in TypoScale]: number;
  }>;
};

export type ButtonSize = {
  [sizeKey in buttonScale]: ButtonSizeDimensions;
};

export const fontSize: FontSize = {
  title: {
    xs: 16,
    sm: 18,
    md: 24,
    lg: 30,
  },
  body: {
    sm: 12,
    md: 14,
  },
  caption: {
    sm: 10,
    md: 11,
  },
};

export const buttonSize: ButtonSize = {
  md: {
    width: 126,
    height: 45,
  },
  lg: {
    width: 281,
    height: 45,
  },
};

export const tagGapSize = {
  lg: 9,
  md: 6,
};
