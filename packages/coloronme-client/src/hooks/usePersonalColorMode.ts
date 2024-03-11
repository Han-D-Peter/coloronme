import { useRecoilState } from 'recoil';
import { personalColorMode } from '../store/localeStore';

const usePersonalColorMode = () => {
  return useRecoilState(personalColorMode);
};

export default usePersonalColorMode;
