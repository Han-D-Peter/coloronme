import { ColorName } from '../../../../../design/src/utils';
import { PERSONAL_COLOR_MAPPING } from '../constants/constants';

export function isNull(value: unknown) {
  return !value;
}

export function checkExistedValueOneOfThem(values: unknown[], alertMsg: string) {
  const nullableValues = values.filter(isNull);
  nullableValues.length > 0 && alert(alertMsg);
  return nullableValues.length > 0;
}

export function 퍼스널컬러이름으로부터_아이디추출하기(keyword: ColorName) {
  const 키워드에_해당하는_퍼스널컬러_정보 = Object.entries(PERSONAL_COLOR_MAPPING).find(([key, value]) => {
    return keyword === value.string;
  })!;
  return Number(키워드에_해당하는_퍼스널컬러_정보[0]);
}
