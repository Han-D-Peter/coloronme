import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false,
});

import LottieLoadingSpinner from 'public/lottie/loadingSpinner.json';

const LoadingSpinner = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

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
