import { ColorRGB } from '../../../../../../../design/src/ColorSelect/types';
export type Seasons = 'spring' | 'summer' | 'autumn' | 'winter';
export type UpperSeasons = 'SPRING' | 'SUMMER' | 'AUTUMN' | 'WINTER';
export type CustomColorType = {
  personalColorTypeId: number;
  personalColorTypeName: string;
  colors: ColorRGB[];
  is_deleted: boolean;
};

export type MyColor = {
  [seasons in Seasons]: CustomColorType[];
};

export type RegistrationColorTypeArg = {
  personalColorTypeId?: number;
  personalColorGroup: Seasons;
  personalColorTypeName: string;
  colors: number[];
};
