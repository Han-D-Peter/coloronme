import Link from 'next/link';
import { css } from '@emotion/react';
import { Kakao } from '@design';
import { BASE_URL } from '@/src/constants/constants';

const LoginWithKakao = () => {
  return (
    <Link href={`${BASE_URL}/auth/login/kakao`} css={linkStyle}>
      <button css={kakaoLoginButton}>
        <Kakao height="20" width="20" color="#000000" />
        카카오톡으로 시작하기
      </button>
    </Link>
  );
};

const kakaoLoginButton = css`
  border-radius: 30px;
  width: 100%;
  background: #ffe500;
  color: #000000;
  padding: 10px 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: bold;
`;

const linkStyle = css`
  text-decoration: none;
`;

export default LoginWithKakao;
