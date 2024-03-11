import { useEffect } from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';

import { Toggle } from '@design';

import usePersonalColorMode from '@/src/hooks/usePersonalColorMode';
import { PersonalColorMode } from '@/src/store/localeStore';

// 로컬 스토리지에 저장된 퍼스널 컬러 모드를 가져와서 토글 버튼을 렌더링한다.
// 토글 버튼을 클릭하면 로컬 스토리지에 퍼스널 컬러 모드를 저장하고, 퍼스널 컬러 모드를 변경한다.
const MainHeader = () => {
  const [personalColorMode, setPersonalColorMode] = usePersonalColorMode();
  const isChecked = personalColorMode === 'worst';

  const toggleColor = () => {
    const newMode = personalColorMode === 'best' ? 'worst' : 'best';
    localStorage.setItem('colorRange', newMode);
    setPersonalColorMode(newMode as PersonalColorMode);
  };

  useEffect(() => {
    const storedMode = localStorage.getItem('colorRange') || 'best';
    setPersonalColorMode(storedMode as PersonalColorMode);
  }, [setPersonalColorMode]);

  return (
    <div css={headerContainer}>
      <Image src="/images/subLogo.png" alt="logo" width={160} height={37} />
      <Toggle checked={isChecked} onChange={toggleColor} />
    </div>
  );
};

// const MainHeader = () => {
//   const [personalColorMode, setPersonalColorMode] = usePersonalColorModeToggle();

//   const [isChecked, setIsChecked] = useState(personalColorMode === 'worst');

//   const toggleColor = (checked: boolean) => {
//     setIsChecked(checked);

//     if (personalColorMode === 'best') {
//       localStorage.setItem('colorRange', 'worst');
//       setPersonalColorMode('worst');
//     } else {
//       localStorage.setItem('colorRange', 'best');
//       setPersonalColorMode('best');
//     }
//   };

//   useEffect(() => {
//     const color = localStorage.getItem('colorRange') || 'best';
//     setPersonalColorMode(color as PersonalColorMode);
//   }, []);

//   return (
//     <div css={headerContainer}>
//       <Image src="/icons/subLogo.png" alt="logo" width={160} height={37} />
//       <Toggle checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
//     </div>
//   );
// };

const headerContainer = css`
  height: 63px;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default MainHeader;
