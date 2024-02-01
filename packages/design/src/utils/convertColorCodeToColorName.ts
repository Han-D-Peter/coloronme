import { ColorCode, ColorName } from './constants';

export function convertColorCodeToColorName(code: ColorCode | 'ETC'): ColorName | '그 외' {
  switch (code) {
    case 'Best_SW_LG':
      return '봄 웜 라이트';
    case 'Best_SW_CL':
      return '봄 웜 클리어';
    case 'Best_SW_ST':
      return '봄 웜 스트롱';
    case 'Best_SC_LG':
      return '여름 쿨 라이트';
    case 'Best_SC_CL':
      return '여름 쿨 클리어';
    case 'Best_SC_MT':
      return '여름 쿨 뮤트';
    case 'Best_FW_MT':
      return '가을 웜 뮤트';
    case 'Best_FW_TR':
      return '가을 웜 트루';
    case 'Best_FW_DP':
      return '가을 웜 딥';
    case 'Best_WC_ST':
      return '겨울 쿨 스트롱';
    case 'Best_WC_TR':
      return '겨울 쿨 트루';
    case 'Best_WC_DP':
      return '겨울 쿨 딥';
    case 'ETC':
      return '그 외';
  }
}
