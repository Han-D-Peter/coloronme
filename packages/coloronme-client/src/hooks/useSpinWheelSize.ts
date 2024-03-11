import { useState, useEffect } from 'react';

const useSpinWheelSize = () => {
  const [spinWheelSize, setSpinWheelSize] = useState(300);

  useEffect(() => {
    const updateSize = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = Math.min(window.innerWidth, 500);

      // SpinWheel의 사이즈를 브라우저 창의 높이에 맞추되, 최대 500px로 제한합니다.
      // 여기서는 예시로 창 높이의 0.5배를 사용하되, 실제 비율은 앱의 디자인에 맞게 조정할 수 있습니다.
      // 또한, 최소 사이즈를 설정하여 너무 작아지지 않도록 할 수 있습니다.
      const newSize = Math.min(Math.max(windowHeight * 0.5, 200), windowWidth);

      setSpinWheelSize(newSize);
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return spinWheelSize;
};

export default useSpinWheelSize;
