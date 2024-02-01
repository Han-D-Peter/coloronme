import { css } from '@emotion/react';
import DefaultLayout from '../domains/shared/component/layout/DefaultLayout';
import { useRouter } from 'next/router';
import withAuth from '../domains/shared/hoc/withAuth';
import HomePage from '../domains/home/HomePage';

function Home() {
  // const router = useRouter();

  // router.push('/register');
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  );
}

export default withAuth(Home);
