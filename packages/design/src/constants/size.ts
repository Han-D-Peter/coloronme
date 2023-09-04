export type TypoType = 'title' | 'body';
export type TypoScale = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
export type TypoWeight = 'bold' | 'regular';

export type FontSize = {
  [key in TypoType]: {
    [sizeKey in TypoScale]: number;
  };
};

export const fontSize: FontSize = {
  title: {
    xxs: 14,
    xs: 16,
    sm: 18,
    md: 24,
    lg: 28,
    xlg: 30,
  },
  body: {
    xxs: 9,
    xs: 10,
    sm: 11,
    md: 12,
    lg: 13,
    xlg: 14,
  },
};
