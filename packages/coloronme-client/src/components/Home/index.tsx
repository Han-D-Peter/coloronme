import { useEffect, useState } from 'react';
import { SpinWheel } from 'react-color-spin-wheel';
import { css } from '@emotion/react';
import Image from 'next/image';

import usePersonalColorMode from '@/src/hooks/usePersonalColorMode';
import { usePersonalColor, useWorstColor } from '@/src/query/personal-color/color.queries';
import { Color, ColorCode, ColorName } from '@/src/query/personal-color/color.model';
import { PERSONAL_COLOR_MAPPING } from '@/src/constants/constants';
import { useBooleanState } from '@/src/hooks/useBooleanState';
import { useGetUser } from '@/src/query/user/user.queries';
import { parseRGB } from '@/src/utils/parseRGB';
import useSpinWheelSize from '@/src/hooks/useSpinWheelSize';

import Loading from '../Common/Loading';
import ColorModal from './components/ColorModal';
import MainHeader from './components/MainHeader';
import BottomSheet from '../Common/BottomSheet';
import ColorOptions from './components/ColorOptions';
import DefaultLayout from '../Common/Layout/DefaultLayout';
import MainLogo from '../Common/MainLogo';

const HomePage = () => {
  const spinWheelSize = useSpinWheelSize();

  const [personalColorMode] = usePersonalColorMode();

  const { data: userData, isLoading: userDataLoading } = useGetUser();

  const [isBottomSheetShown, onBottomSheetOpen, onBottomSheetClose] = useBooleanState();
  const [isColorModalShown, onColorModalOpen, onColorModalClose] = useBooleanState();

  const [currentPersonalColor, setCurrentPersonalColor] = useState<{ name: ColorName | null; code: number | null }>({
    name: null,
    code: null,
  });

  const [currentWheelColor, setCurrentWheelColor] = useState({
    name: '',
    rgb: '',
    index: 1,
  });
  const { data: colorData, isLoading: colorDataLoading } = usePersonalColor(currentPersonalColor?.code);
  const { data: worstColorData, isLoading: worstColorDataLoading } = useWorstColor(currentPersonalColor?.code);
  const currentColorRange = personalColorMode === 'best' ? colorData : worstColorData;

  const wheelColors = currentColorRange?.colors?.map((color: Color) => `rgb(${color.r}, ${color.g}, ${color.b})`);

  const changeWheelColor = (rgbColor: string, index: number) => {
    const colorInfo = currentColorRange?.colors?.find(
      (color: Color) => `rgb(${color.r}, ${color.g}, ${color.b})` === rgbColor,
    );

    if (colorInfo) {
      setCurrentWheelColor({
        name: colorInfo?.name,
        rgb: rgbColor,
        index,
      });
    }
  };

  const changePersonalColor = (code: ColorCode, name: ColorName, id: number) => {
    setCurrentPersonalColor({
      name,
      code: id,
    });
    onBottomSheetClose();
  };

  useEffect(() => {
    if (!userData) return;
    setCurrentPersonalColor({
      code: userData?.personalColorId,
      name: PERSONAL_COLOR_MAPPING[userData.personalColorId]?.name,
    });
  }, [userData]);

  useEffect(() => {
    if (!currentColorRange) return;
    const colors = currentColorRange?.colors?.map((color: Color) => `rgb(${color.r}, ${color.g}, ${color.b})`);
    if (!colors) return;
    setCurrentWheelColor({
      ...currentWheelColor,
      name: currentColorRange.colors[currentWheelColor.index]?.name,
      rgb: colors[currentWheelColor.index],
    });
  }, [currentColorRange, currentWheelColor.index]);

  if (userDataLoading) {
    return <Loading />;
  }

  return (
    <DefaultLayout header={<MainHeader />}>
      <div css={mainContainer}>
        <div css={containerStyle}>
          <div
            css={css`
              width: 100%;
              height: 100%;
              background: ${currentWheelColor?.rgb};
            `}
            onClick={onColorModalOpen}
          />

          <div css={textContainer}>
            <div css={colorText}>{currentWheelColor?.name}</div>
            <div css={rgbText}>{parseRGB(currentWheelColor?.rgb)}</div>
          </div>
        </div>

        <div css={personalColorContainer} onClick={onBottomSheetOpen}>
          <div css={titleText}>{currentPersonalColor?.name}</div>
        </div>
        {personalColorMode === 'best' ? (
          <div css={moodTagContainer}>
            {currentColorRange?.moods?.map((mood: any) => (
              <div css={tagStyle} key={mood.id}>
                {mood?.name}
              </div>
            ))}
          </div>
        ) : (
          <div css={worstModeText}>
            {currentColorRange?.moods?.map((mood: any, index: number) => <div key={index}>{mood?.name}</div>)}
          </div>
        )}
        {isBottomSheetShown && (
          <BottomSheet isOpen={isBottomSheetShown} close={onBottomSheetClose}>
            <ColorOptions onClick={changePersonalColor} />
          </BottomSheet>
        )}
        <ColorModal modalIsOpen={isColorModalShown} closeModal={onColorModalClose} color={currentWheelColor} />

        <div css={wheelContainer}>
          <div css={imageContainer}>
            <Image src="/images/polygon.png" width={25} height={15} alt="arrow" />
          </div>
          <div css={wheelRotation}>
            <SpinWheel
              colors={wheelColors && wheelColors.length > 0 ? wheelColors : []}
              lineWeight={4}
              onColorSelect={changeWheelColor}
              initialRotationDegree={-70}
              extractionDegrees={0}
              size={spinWheelSize}
            />
          </div>
          <div css={logoContainer}>
            <MainLogo />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

const titleText = css`
  font-size: 24px;
  font-family: 'Pretendard';
  color: #000;
  width: fit-content;
  cursor: pointer;
`;

const worstModeText = css`
  margin-top: 22px;
  margin-left: 5%;
  width: 148px;
  color: #878787;
  line-height: 1.5;
`;

const tagStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 32px;

  border-radius: 30px;
  background: #f4f4f4;

  color: #000;
  font-size: 14px;
  font-family: 'Pretendard';
`;

const mainContainer = css`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const containerStyle = css`
  position: relative;
  height: 50%;
`;

const textContainer = css`
  position: absolute;
  top: 4.5%;
  left: 5%;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const colorText = css`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #000;
  font-size: 16px;
  font-family: 'Pretendard';

  width: fit-content;
  padding: 0 14px;

  height: 36px;
  border-radius: 30px;
  background: #f4f4f4;
`;

const rgbText = css`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #8e9294;
  text-align: center;
  font-size: 12px;
  font-family: 'Pretendard';

  width: fit-content;
  padding: 0 15px;

  height: 28px;

  border-radius: 30px;
  background: #f4f4f4;
`;

const personalColorContainer = css`
  margin-top: 22px;
  margin-left: 5%;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
`;

const moodTagContainer = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 22px;
  margin-left: 5%;
`;

const imageContainer = css`
  position: absolute;
  top: -5%;
  left: 45%;
  transform: translate(-50%, -50%);
`;

const wheelRotation = css`
  width: 100%;
  height: 100%;
`;

const wheelContainer = css`
  position: absolute;

  bottom: -15vh;
  right: -12vh;

  @media (max-width: 668px) and (max-height: 741px) {
    bottom: -19vh;
  }
`;

const logoContainer = css`
  width: 120px;
  height: 120px;
  z-index: 2;
  position: absolute;
  top: 32%;
  left: 35.5%;

  @media (max-width: 668px) and (max-height: 741px) {
    width: 100px;
    height: 100px;
    top: 30%;
    left: 35%;
  }
`;

export default HomePage;
