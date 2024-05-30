import { css } from '@emotion/react';
import { Text } from '@design';
import LoginWithKakao from './LoginWithKakao';

const LoginPage = () => {
  return (
    <main css={homeContainer}>
      <div css={logoPosition}>
        <img src="/images/loginImg.png" alt="logo" />
      </div>

      <div css={contentContainer}>
        <div css={textContainer}>
          <Text as="title" size="lg" weight="bold">
            당신의 <br /> 색을 <br />
            확인해 보세요!
          </Text>
        </div>
        <div css={buttonContainer}>
          <LoginWithKakao />
        </div>
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
`;

const contentContainer = css`
  width: 80%;
  height: 44%;
  position: absolute;
  top: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const textContainer = css`
  line-height: 1.4;
  display: flex;
`;

const logoPosition = css`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white);
    opacity: 1;
  }
`;

const buttonContainer = css`
  /* background-color: red; */
  /* width: 70%; */
  /* position: absolute; */
  /* bottom: 20%; */
`;

export default LoginPage;
