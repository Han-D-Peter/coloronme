import { css } from '@emotion/react';

const LoadingPage = () => {
  return (
    <main css={homeContainer}>
      <div css={logoPosition}>
        <img src="/images/bigLogo.png" alt="logo" width={200} height={200} />
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
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(134deg, #c4a1d7 9.81%, #86b3cc 39.06%, #8cbbd4 45.31%, #fff3ea 85.94%, #fff387 100%);
`;

const logoPosition = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default LoadingPage;
