import { ColorLibrary } from '../../../../../design/src/constants';
import { ColorCode } from '../../../../../design/src/utils/constants';

export type ColorData = { name: ColorCode | 'ETC'; count: number; percentage: number }[];

export type ChannelData = { [key: string]: number };
export type AgeData = { [key: string]: number };

export type GenderData = {
  [key in 'male' | 'female' | 'unknown']: number;
};
