import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { Button } from '@design';
import { Text } from '@design';

import { useBooleanState } from '@/src/hooks/useBooleanState';
import { usePatchPersonalColor } from '@/src/query/user/user.queries';
import { PERSONAL_COLOR } from '@/src/constants/constants';
import CenteredLayout from '../Common/Layout/CenteredLayout';

const SelectColorPage = () => {
  const router = useRouter();

  const [isAlertModalShown, onAlertModalOpen, onAlertModalClose] = useBooleanState();
  const [selectedColor, setSelectedColor] = useState<null | number>(null);

  const { mutate: selectColor } = usePatchPersonalColor();

  const ClickStartButton = () => {
    if (!selectedColor) {
      onAlertModalOpen();
      return;
    }
    selectColor(selectedColor, {
      onSuccess: () => {
        router.push('/');
      },
    });
  };

  useEffect(() => {
    if (isAlertModalShown) {
      const modalCloseTimer = setTimeout(() => {
        onAlertModalClose();
      }, 2000);
      return () => clearTimeout(modalCloseTimer);
    }
  }, [isAlertModalShown]);

  return (
    <CenteredLayout>
      <div css={mainContainer}>
        <div>
          <Text as="title" size="lg" weight="bold">
            퍼스널컬러
          </Text>
          <Text as="title" size="lg">
            를
          </Text>
        </div>
        <Text as="title" size="lg">
          선택해주세요 ✍
        </Text>

        <div css={subText}>
          <Text as="body" size="md">
            나의 퍼스널컬러를 모른다면?
          </Text>
          <Text as="body" size="md">
            색상과 분위기가 궁금한 퍼스널컬러를 선택하세요 :-)
          </Text>
        </div>

        <div css={buttonContainer}>
          <div css={gridStyle}>
            {Object.entries(PERSONAL_COLOR).map(([season, colors]) => (
              <div key={season} css={columnStyle}>
                {colors?.map(({ id, name, color, fontColor }) => (
                  <button
                    key={name}
                    css={css`
                      ${colorButton};
                      background: ${selectedColor === id ? color : '#f4f4f4'};
                      color: ${selectedColor === id ? fontColor : '#000'};
                    `}
                    onClick={() => setSelectedColor(id)}
                  >
                    <Text as="body" size="md">
                      {name}
                    </Text>
                  </button>
                ))}
              </div>
            ))}
          </div>

          {isAlertModalShown && <div css={alertModal}>퍼스널 컬러를 선택해주세요</div>}
        </div>
        <Button fullWidth css={startButtonStyle} onClick={ClickStartButton}>
          <Text as="title" size="xs" weight="bold">
            컬러온미 시작하기
          </Text>
        </Button>
      </div>
    </CenteredLayout>
  );
};

const mainContainer = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
`;

const subText = css`
  color: #99a0a4;
  line-height: 20px;
  margin-top: 17px;
  margin-bottom: 38px;
`;

const buttonContainer = css`
  position: relative;
`;

const gridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 42px;
`;

const columnStyle = css`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const colorButton = css`
  width: 100%;
  height: 36px;
  border-radius: 30px;
  background: #f4f4f4;
  font-size: 14px;
  font-family: 'Pretendard';
  border: none;
  color: #000;
`;

const startButtonStyle = css`
  width: 100%;
  margin-top: 45px;
`;

const alertModal = css`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);

  background-color: #242424a6;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 34px;

  border-radius: 10px;

  color: #fff;
  text-align: center;
  font-size: 12px;
  font-family: 'pretendard';
`;

export default SelectColorPage;
