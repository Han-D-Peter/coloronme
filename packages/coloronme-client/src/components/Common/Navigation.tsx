import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { Home, HomeOutline, Person, PersonOutline, ShoppingCart, ShoppingCartOutline } from '@design';

import IconWithText from './IconWithText';
import GhostButton from './Button/GhostButton';
import { centeredStyle } from '@/src/style/SharedStyles';

const Navigation = () => {
  const router = useRouter();

  return (
    <footer css={footerContainer}>
      <nav css={[centeredStyle, navContainer]}>
        <GhostButton onClick={() => router.push('/home')}>
          <IconWithText
            color={router.pathname === '/home' ? '#000000' : '#B9BEC1'}
            icon={
              router.pathname === '/home' ? (
                <Home width="24" height="24" color="#000000" />
              ) : (
                <HomeOutline width="24" height="24" color="#B9BEC1" />
              )
            }
            bottomText="홈"
          />
        </GhostButton>
        <GhostButton onClick={() => router.push('/products')}>
          <IconWithText
            color={router.pathname === '/products' ? '#000000' : '#B9BEC1'}
            icon={
              router.pathname === '/products' ? (
                <ShoppingCart width="24" height="24" color="#000000" />
              ) : (
                <ShoppingCartOutline width="24" height="24" color="#B9BEC1" />
              )
            }
            bottomText="퍼스널컬러핏"
          />
        </GhostButton>

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
