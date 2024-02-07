/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import { setAuthToken } from '../shared/api/client';
import { useLogin } from '../shared/hooks/queryhooks/common.query';
import { Button } from '@design';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';

interface LoginPageProps {}

export default function LoginPage() {
  const [email, setEmail] = useState('peter@naver.com');
  const [password, setPassword] = useState('1234');
  const router = useRouter();
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const { mutate } = useLogin();

  const submit = () => {
    if (!email || !password) {
      alert('정보 누락');
      return;
    }
    mutate(
      { email, password },

      {
        onError: () => {
          alert('로그인 에러');
        },
        onSuccess: (data) => {
          const { accessToken, refreshToken } = data.data!;

          setAuthToken(accessToken, refreshToken);
          router.push('/');
        },
      },
    );
  };

  return (
    <main
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background: linear-gradient(
          134deg,
          #c4a1d7 9.81%,
          #86b3cc 39.06%,
          #8cbbd4 45.31%,
          #fff3ea 85.94%,
          #fff387 100%
        );
      `}
    >
      <div
        css={css`
          margin-bottom: 72px;
        `}
      >
        <img src="/images/bigLogo.png" alt="logo" width={200} height={200} />
      </div>

      <div
        css={css`
          margin-bottom: 5px;
        `}
      >
        <input value={email} onChange={onChangeEmail} placeholder="이메일" type="email" css={inputStyle} />
      </div>
      <div
        css={css`
          margin-bottom: 48px;
        `}
      >
        <input value={password} onChange={onChangePassword} placeholder="비밀번호" type="password" css={inputStyle} />
      </div>
      <div css={css``}>
        <Button onClick={submit}>로그인</Button>
      </div>
    </main>
  );
}

const inputStyle = css`
  width: 224px;
  height: 10px;
  border-radius: 30px;
  outline: transparent;
  border: transparent;
  padding: 20px 28px 20px 28px;
  ::placeholder {
    color: #8e9294;
  }
`;
