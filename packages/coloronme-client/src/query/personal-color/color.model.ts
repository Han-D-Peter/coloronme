export type ColorCode =
  | 'Best_SW_LG'
  | 'Best_SW_CL'
  | 'Best_SW_ST'
  | 'Best_SC_LG'
  | 'Best_SC_CL'
  | 'Best_SC_MT'
  | 'Best_FW_MT'
  | 'Best_FW_TR'
  | 'Best_FW_DP'
  | 'Best_WC_ST'
  | 'Best_WC_TR'
  | 'Best_WC_DP';

export type ColorName =
  | '봄 웜 라이트'
  | '봄 웜 클리어'
  | '봄 웜 스트롱'
  | '여름 쿨 라이트'
  | '여름 쿨 클리어'
  | '여름 쿨 뮤트'
  | '가을 웜 뮤트'
  | '가을 웜 트루'
  | '가을 웜 딥'
  | '겨울 쿨 스트롱'
  | '겨울 쿨 트루'
  | '겨울 쿨 딥';

export interface Color {
  id: number;
  name: string;
  code: string;
  r: string;
  g: string;
  b: string;
  personalColorId: number;
  worstColorId: number | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface PersonalColorMood {
  id: number;
  name: string;
  code: string;
  personalColorId: number;
  worstColorId: number | null;
}
export interface PersonalColor {
  code: ColorCode;
  colors: Color[];
  createdAt: string;
  deletedAt: string;
  id: number;
  moods: PersonalColorMood[];
  name: ColorName;
  updatedAt: string;
}
