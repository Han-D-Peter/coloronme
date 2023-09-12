export type TypoType = 'title' | 'body';
export type TypoScale = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
export type TypoWeight = 'bold' | 'regular';

export type buttonScale = 'md' | 'lg';
export type ButtonSizeDimensions = {
  width: number;
  height: number;
};

export type FontSize = {
  [key in TypoType]: {
    [sizeKey in TypoScale]: number;
  };
};

export type ButtonSize = {
  [sizeKey in buttonScale]: ButtonSizeDimensions;
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

export const buttonSize: ButtonSize = {
  md: {
    width: 132,
    height: 45,
  },
  lg: {
    width: 281,
    height: 45,
  },
};
