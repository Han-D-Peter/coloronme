import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { Home } from '@design';
import { HomeOutline } from '@design';
import { Person } from '@design';
import { PersonOutline } from '@design';
import { ShoppingCart } from '@design';
import { ShoppingCartOutline } from '@design';

import IconWithText from './IconWithText';
import GhostButton from './Button/GhostButton';
import { centeredStyle } from '@/src/style/SharedStyles';

const Navigation = () => {
  const router = useRouter();

  return (
    <footer css={footerContainer}>
      <nav css={[centeredStyle, navContainer]}>
        <GhostButton onClick={() => router.push('/')}>
          <IconWithText
            color={router.pathname === '/' ? '#000000' : '#B9BEC1'}
            icon={
              router.pathname === '/' ? (
                <Home width="24" height="24" color="#000000" />
              ) : (
                <HomeOutline width="24" height="24" color="#B9BEC1" />
              )
            }
            bottomText="홈"
          />
        </GhostButton>
        <IconWithText
          color={router.pathname === '/color-fit' ? '#000000' : '#B9BEC1'}
          icon={
            router.pathname === '/color-fit' ? (
              <ShoppingCart width="24" height="24" color="#000000" />
            ) : (
              <ShoppingCartOutline width="24" height="24" color="#B9BEC1" />
            )
          }
          bottomText="퍼스널컬러핏"
        />
        <GhostButton onClick={() => router.push('/mypage')}>
          <IconWithText
            color={router.pathname === '/mypage' ? '#000000' : '#B9BEC1'}
            icon={
              router.pathname === '/mypage' ? (
                <Person width="24" height="24" color="#000000" />
              ) : (
                <PersonOutline width="24" height="24" color="#B9BEC1" />
              )
            }
            bottomText="마이페이지"
          />
        </GhostButton>
      </nav>
    </footer>
  );
};

const footerContainer = css`
  width: 100%;
  height: 81px;
  border-radius: 15px 15px 0px 0px;
  background: #fafafa;
  box-shadow: 0px -2px 3px 0px rgba(183, 183, 183, 0.25);
`;

const navContainer = css`
  height: 100%;
  justify-content: space-around;
`;

export default Navigation;
