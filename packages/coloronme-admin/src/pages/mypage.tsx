import { css } from '@emotion/react';
import DefaultLayout from '../domains/shared/component/layout/DefaultLayout';

export default function Mypage() {
  return (
    <DefaultLayout>
      <div
        css={css`
          height: 100%;
        `}
      >
        my page
      </div>
    </DefaultLayout>
  );
}
