import { css } from '@emotion/react';
import DefaultLayout from '../domains/shared/component/layout/DefaultLayout';
import { useRouter } from 'next/router';
import withAuth from '../domains/shared/hoc/withAuth';

function Home() {
  // const router = useRouter();

  // router.push('/register');
  return (
    <DefaultLayout>
      <div
        css={css`
          height: 100%;
        `}
      >
        hello
      </div>
    </DefaultLayout>
  );
}

export default withAuth(Home);
