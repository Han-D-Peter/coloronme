import { ColorCode, ColorName } from '@design';
import { Seasons } from '../hooks/queryhooks/color/color.type';
import { Seasons as KoSeasons } from '../../../../../design/src/SeasonPicker/index';

// export const BASE_URL = 'https://api.admin.coloronme.site';
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export const PERSONAL_COLOR_MAPPING: {
  [key: number]: {
    code: ColorCode;
    string: ColorName;
  };
} = {
  1: {
    code: 'Best_SW_LG',
    string: '봄 웜 라이트',
  },
  2: {
    code: 'Best_SW_CL',
    string: '봄 웜 클리어',
  },
  3: {
    code: 'Best_SW_ST',
    string: '봄 웜 스트롱',
  },
  4: {
    code: 'Best_SC_LG',
    string: '여름 쿨 라이트',
  },
  5: {
    code: 'Best_SC_CL',
    string: '여름 쿨 클리어',
  },
  6: {
    code: 'Best_SC_MT',
    string: '여름 쿨 뮤트',
  },
  7: {
    code: 'Best_FW_MT',
    string: '가을 웜 뮤트',
  },
  8: {
    code: 'Best_FW_TR',
    string: '가을 웜 트루',
  },
  9: {
    code: 'Best_FW_DP',
    string: '가을 웜 딥',
  },
  10: {
    code: 'Best_WC_ST',
    string: '겨울 쿨 스트롱',
  },
  11: {
    code: 'Best_WC_TR',
    string: '겨울 쿨 트루',
  },
  12: {
    code: 'Best_WC_DP',
    string: '겨울 쿨 딥',
  },
};

export const GENDER: Record<string, string> = {
  FEMALE: '여성',
  MALE: '남성',
};

export const KO_SEASON: Record<KoSeasons, Seasons> = {
  '봄 웜': 'spring',
  '여름 쿨': 'summer',
  '가을 웜': 'autumn',
  '겨울 쿨': 'winter',
};
