import { css } from '@emotion/react';
import LoginWithKakao from './LoginWithKakao';

const LoginPage = () => {
  return (
    <main css={homeContainer}>
      <div css={logoPosition}>
        <img src="/images/bigLogo.png" alt="logo" width={200} height={200} />
      </div>

      <div css={buttonContainer}>
        <LoginWithKakao />
      </div>
    </main>
  );
};

const homeContainer = css`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  background: linear-gradient(134deg, #c4a1d7 9.81%, #86b3cc 39.06%, #8cbbd4 45.31%, #fff3ea 85.94%, #fff387 100%);
`;

const logoPosition = css`
  position: absolute;
  top: 15%;
`;

const buttonContainer = css`
  width: 70%;
  position: absolute;
  bottom: 20%;
`;

export default LoginPage;
