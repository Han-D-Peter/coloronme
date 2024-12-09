import { ColorRGB } from '../../../../../../design/src/ColorSelect/types';
import { CustomColorType, Seasons } from './color/color.type';

export interface ColorResponse<T> {
  status: 'success' | 'error';
  data?: T;
  message?: string;
}

export type Client = {
  memberId: number;
  nickname: string;
  email: string;
  profileImageUrl?: string;
  consultedDate: string | null;
  personalColorType?: CustomColorType;
  age: number;
  genderEnum: string;
  consultedContent: string;
  consultedDrawing: string;
  personalColorGroupName?: Seasons;
};

export type Me = {
  name: string;
  company: string;
  email: string;
};

export type AuthResult = {
  accessToken: string;
  email: string;
  refreshToken: string;
  roleType: string;
};

export type MutatedUser = { name?: string; company?: string; email?: string };

export type IncreasingData = {
  period: number[];
  increase_than_right_before: number;
  full_period: number;
};
