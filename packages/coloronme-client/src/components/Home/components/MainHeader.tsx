import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import Image from 'next/image';

import { Toggle } from '@design';

import usePersonalColorMode from '@/src/hooks/usePersonalColorMode';
import { PersonalColorMode } from '@/src/store/localeStore';

interface MainHeaderProps {
  isToggleActive?: boolean;
}

const MainHeader = ({ isToggleActive = true }: MainHeaderProps) => {
  const router = useRouter();

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
      <Image
        src="/images/subLogo.png"
        alt="logo"
        width={160}
        height={37}
        css={logoStyle}
        onClick={() => router.push('/')}
      />
      {isToggleActive && <Toggle checked={isChecked} onChange={toggleColor} />}
    </div>
  );
};

const logoStyle = css`
  cursor: pointer;
`;

const headerContainer = css`
  height: 63px;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default MainHeader;
