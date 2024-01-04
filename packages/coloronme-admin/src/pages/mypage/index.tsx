import { css } from '@emotion/react';
import DefaultLayout from '../../domains/shared/component/layout/DefaultLayout';
import MyPage from '../../domains/mypage/MyPage';

export default function Mypage() {
  return (
    <DefaultLayout>
      <div
        css={css`
          height: 100%;
        `}
      >
        <MyPage />
      </div>
    </DefaultLayout>
  );
}
