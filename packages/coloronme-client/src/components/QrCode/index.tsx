import { useRouter } from 'next/router';
import { useQRCode } from 'next-qrcode';
import { css } from '@emotion/react';
import { usePostId } from '@/src/query/user/user.queries';
import CenteredLayout from '../Common/Layout/CenteredLayout';
import Loading from '../Common/Loading';

const QrCodePage = () => {
  const router = useRouter();
  const { data: idData, isLoading: idLoading } = usePostId();

  const { Canvas } = useQRCode();

  const handleClickStartButton = () => {
    return router.replace('/select-color');
  };

  if (idLoading) {
    return <Loading />;
  }

  return (
    <CenteredLayout>
      <div css={mainContainer}>
        <div>
          <div css={mainText}>
            컨설턴트님께
            <br />
            <span css={fontWeight}>QR코드를 보여주세요 🙌</span>
          </div>
          <div css={subText}>
            컨설턴트님이 진단 결과를 공유하면 <br />
            자동으로 메인페이지로 이동합니다 :-)
          </div>
        </div>
        <div css={qrContainer}>
          <Canvas
            text={idData?.uuid}
            options={{
              errorCorrectionLevel: 'M',
              margin: 2,
              scale: 4,
              width: 250,
            }}
          />
        </div>
        <div css={startButtonWrapper}>
          <div css={startButtonStyle} onClick={handleClickStartButton}>
            컬러온미의 컨설턴트에게 진단을 받지 않았어요
          </div>
        </div>
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
  gap: 6%;
`;

const mainText = css`
  font-size: 30px;
  font-family: 'Pretendard';
`;

const fontWeight = css`
  font-weight: 700;
`;

const subText = css`
  color: #99a0a4;
  font-size: 12px;
  font-family: 'Pretendard';
  line-height: 18px;
  margin-top: 17px;
`;

const qrContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 250px;
  margin: 0 auto;
`;

const startButtonWrapper = css`
  display: flex;
  justify-content: center;
`;

const startButtonStyle = css`
  color: #adadad;
  text-align: center;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;

  text-decoration: underline;
  text-decoration-thickness: 0.5px;
  text-underline-position: under;
  text-decoration-color: #adadad;
`;

export default QrCodePage;
