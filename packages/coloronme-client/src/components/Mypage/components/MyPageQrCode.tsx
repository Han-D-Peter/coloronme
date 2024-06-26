import { usePostId } from '@/src/query/user/user.queries';
import { css } from '@emotion/react';
import { useQRCode } from 'next-qrcode';
import Button from '../../../../../design/src/Button';

interface Props {
  onClose: () => void;
}

const MyPageQrCode = ({ onClose }: Props) => {
  const { data: idData, isLoading: idLoading } = usePostId();

  const { Canvas } = useQRCode();

  return (
    <div css={alertModal} onClick={onClose}>
      <div css={mainContainer}>
        <div css={titleStyle}>
          <div css={mainText}>
            컨설턴트님께
            <br />
            <span css={fontWeight}>QR코드를 보여주세요 🙌</span>
          </div>
          <div css={subText}>가장 최근 진단 결과가 서비스에 반영됩니다.</div>
        </div>
        <div css={qrContainer}>
          {!idLoading && (
            <Canvas
              text={idData?.uuid}
              options={{
                errorCorrectionLevel: 'M',
                margin: 2,
                scale: 4,
                width: 220,
              }}
            />
          )}
        </div>
        <div css={buttonContainer}>
          <Button variant="ghost" onClick={onClose}>
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
};

const alertModal = css`
  position: fixed;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);

  background-color: #242424a6;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 520px;
  height: 100vh;

  border-radius: 10px;

  color: #fff;
  font-size: 12px;
  font-family: 'pretendard';

  z-index: 100;
`;

const mainContainer = css`
  background-color: white;
  width: 340px;
  height: 500px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 9% 9%;
  justify-content: space-around;
`;

const titleStyle = css`
  display: flex;
  flex-direction: column;
`;

const mainText = css`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
`;

const fontWeight = css`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
`;

const subText = css`
  margin-top: 10px;

  color: var(--Grayscale-40, #adadad);

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

const qrContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 250px;
  margin: 0 auto;
`;

const buttonContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MyPageQrCode;
