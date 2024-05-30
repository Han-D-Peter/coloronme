import { useState } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { Text } from '@design';

import { useGetUser } from '@/src/query/user/user.queries';
import { useLogout } from '@/src/query/auth/auth.queries';

import DefaultLayout from '../Common/Layout/DefaultLayout';
import Header from './components/Header';
import Profile from './components/Profile';
import Diagnose from './components/Diagnose';
import MyColor from './components/MyColor';

const MypageView = () => {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);

  const { data: userData, isLoading: userDataLoading } = useGetUser();
  const { mutate: logoutMutate } = useLogout();

  const logout = () => {
    logoutMutate(undefined, {
      onSuccess: () => {
        router.push('/');
      },
    });
  };

  return (
    <DefaultLayout header={<Header>{isEdit ? '마이페이지 변경' : '마이페이지'}</Header>} isLoading={userDataLoading}>
      <div css={mainContainer}>
        <div css={profileContainer}>{userData && <Profile data={userData} />}</div>

        <MyColor isEdit={isEdit} setIsEdit={setIsEdit} />

        <Diagnose />

        <button css={logoutButton} onClick={logout}>
          <Text as="body" size="md">
            로그아웃
          </Text>
        </button>
      </div>
    </DefaultLayout>
  );
};

const mainContainer = css`
  width: 100%;
  height: 100%;
  padding: 0 5%;
  padding-bottom: 3%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: auto;
`;

const profileContainer = css`
  margin-top: 3%;
`;

const logoutButton = css`
  width: 100%;
  width: fit-content;
`;

export default MypageView;
