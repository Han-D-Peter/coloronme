import { css } from '@emotion/react';
import { Text, color } from '@design';
import { useMe } from '../shared/hooks/queryhooks/common.query';
import Hr from '../shared/Hr';
import { Me } from '../shared/hooks/queryhooks/common.typs';
import { useRouter } from 'next/router';
import { clearAuthToken } from '../shared/api/client';

export default function MyPage() {
  const { data, isLoading } = useMe();
  const router = useRouter();

  function logout() {
    clearAuthToken();
    router.push('/login');
  }

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Error...</div>;

  const { company, name, email } = data?.data as Me;

  return (
    <section>
      <div
        css={css`
          margin-top: 40px;
        `}
      >
        <Text as="title" size="sm" weight="bold">
          마이페이지
        </Text>
      </div>
      <div
        css={css`
          margin-top: 67px;
        `}
      >
        <Text as="title" size="sm" weight="bold">
          {company}
        </Text>
      </div>
      <div
        css={css`
          margin-top: 17px;
        `}
      >
        <Text as="title" size="sm" weight="bold">
          {name}
        </Text>
      </div>
      <div
        css={css`
          margin-top: 16px;
        `}
      >
        <Text
          as="body"
          size="md"
          weight="regular"
          style={css`
            color: ${color.gray.gray050};
          `}
        >
          {email}
        </Text>
      </div>
      <div
        css={css`
          margin-top: 68px;
        `}
      >
        <div>
          <button css={textButtonStyle} onClick={() => router.push('/mypage/modify')}>
            <Text as="body" size="sm" weight="regular">
              회원 정보 수정
            </Text>
          </button>
        </div>
        <Hr topMargin={17} bottomMargin={17} />
        <div>
          <button css={textButtonStyle} onClick={() => router.push('/mypage/password')}>
            <Text as="body" size="md" weight="regular">
              비밀번호 변경
            </Text>
          </button>
        </div>
        <Hr topMargin={17} bottomMargin={17} />
        <div>
          <button css={textButtonStyle} onClick={logout}>
            <Text as="body" size="md" weight="regular">
              로그아웃
            </Text>
          </button>
        </div>
        <Hr topMargin={17} bottomMargin={17} />
        <div>
          <button css={textButtonStyle}>
            <Text as="body" size="md" weight="regular">
              회원탈퇴
            </Text>
          </button>
        </div>
      </div>
    </section>
  );
}

const textButtonStyle = css`
  outline: none;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
`;
