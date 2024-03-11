import { atom } from 'recoil';
import { v1 } from 'uuid';

export type PersonalColorMode = 'best' | 'worst';

export const personalColorMode = atom<PersonalColorMode>({
  key: `codeKey/${v1()}`,
  default: 'best',
});
