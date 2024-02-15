import { ColorLibrary } from '../../../../../design/src/constants';
import { ColorCode } from '../../../../../design/src/utils/constants';

export type Day = 'SUNDAY' | 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY';
type Time =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23';

export type ColorData = { name: ColorCode | 'ETC'; count: number; percentage: number }[];

export type ChannelData = { [key: string]: number };
export type AgeData = { [key: string]: number };
export type IntervalDataByTime = { id: Time; data: { x: Day; y: number }[] }[];
export type GenderData = {
  [key in 'male' | 'female' | 'unknown']: number;
};
