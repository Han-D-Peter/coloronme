import { css } from '@emotion/react';
import DefaultLayout from '../domains/shared/component/layout/DefaultLayout';

export default function Colors() {
  return (
    <DefaultLayout>
      <div
        css={css`
          height: 100%;
        `}
      >
        colors
      </div>
    </DefaultLayout>
  );
}
