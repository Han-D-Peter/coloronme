import RegisterCustomerPage from '@/src/domains/registerCustomer/RegisterCustomerPage';
import DefaultLayout from '@/src/domains/shared/component/layout/DefaultLayout';
import { Suspense } from 'react';

export default function RegisterCustomer() {
  return (
    <DefaultLayout>
      <Suspense fallback={<div>...Loading</div>}>
        <RegisterCustomerPage />
      </Suspense>
    </DefaultLayout>
  );
}
