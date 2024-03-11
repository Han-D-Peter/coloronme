import Image from 'next/image';
import { css } from '@emotion/react';
import { useBooleanState } from '@/src/hooks/useBooleanState';
import MainLogo from '../../Common/MainLogo';
import MyPageQrCode from './MyPageQrCode';

const Profile = ({ data }: { data: { name: string; email: string; profileImageUrl: string } }) => {
  const [isQrModalOpen, onQrModalOpen, onQrModalClose] = useBooleanState(false);

  return (
    <div css={container}>
      <div css={leftContainer}>
        {data.profileImageUrl ? (
          <Image css={imageStyles} src={data?.profileImageUrl} alt="logo" width={58} height={58} />
        ) : (
          <div css={logoContainer}>
            <MainLogo />
          </div>
        )}
        <div>
          <div css={nameStyles}>{data?.name ? data?.name : 'hi'}</div>
          <div css={emailStyles}>{data?.email ? data?.email : '365support@naver.com'}</div>
        </div>
      </div>
      <div onClick={onQrModalOpen} css={qrStyles}>
        나의 QR
      </div>
      {isQrModalOpen && <MyPageQrCode onClose={onQrModalClose} />}
    </div>
  );
};

const leftContainer = css`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const qrStyles = css`
  padding: 5px 10px;
  border-radius: 30px;
  background: var(--Grayscale-0, #fff);
  color: var(--Grayscale-50, #878787);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px; /* 150% */
  letter-spacing: -0.14px;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

  cursor: pointer;
`;

const container = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 13px;
`;

const nameStyles = css`
  color: #000;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 18px;
`;

const emailStyles = css`
  color: #8e9294;
  font-size: 12px;
  font-family: Pretendard;
  line-height: 18px;
`;

const logoContainer = css`
  width: 58px;
  height: 58px;
`;

const imageStyles = css`
  border-radius: 50%;
`;

export default Profile;
