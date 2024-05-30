import { css } from '@emotion/react';
import Lottie from 'react-lottie-player';
import LottieLoadingSpinner from 'public/lottie/loadingSpinner.json';

const LoadingSpinner = () => {
  return (
    <div css={overlay}>
      <Lottie loop animationData={LottieLoadingSpinner} play css={lottieStyle} />
    </div>
  );
};

const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const lottieStyle = css`
  width: 80px;
  height: 80px;
`;

export default LoadingSpinner;
