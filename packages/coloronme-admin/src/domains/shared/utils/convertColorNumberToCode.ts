import { ColorLibrary } from '../../../../../design/src/constants';

export default function convertColorNumberToCode(
  id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
): keyof ColorLibrary {
  switch (id) {
    case 1:
      return 'sw_lg';
    case 2:
      return 'sw_cl';
    case 3:
      return 'sw_st';
    case 4:
      return 'sc_lg';
    case 5:
      return 'sc_cl';
    case 6:
      return 'sc_mt';
    case 7:
      return 'fw_mt';
    case 8:
      return 'fw_st';
    case 9:
      return 'fw_dp';
    case 10:
      return 'wc_br';
    case 11:
      return 'wc_tr';
    case 12:
      return 'wc_dp';
  }
}
