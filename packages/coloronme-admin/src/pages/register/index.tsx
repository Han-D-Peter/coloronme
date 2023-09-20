import { css } from '@emotion/react';
import DefaultLayout from '../../domains/shared/component/layout/DefaultLayout';
import RegisterPage from '../../domains/register/RegisterPage';

export default function Register() {
  return (
    <DefaultLayout>
      <RegisterPage />
    </DefaultLayout>
  );
}
