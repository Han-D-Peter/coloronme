import RegisterCustomerPage from '@/src/domains/registerCustomer/RegisterCustomerPage';
import DefaultLayout from '@/src/domains/shared/component/layout/DefaultLayout';
import { useUserByQR } from '@/src/domains/shared/hooks/queryhooks/common.query';
import { useRouter } from 'next/router';

export default function RegisterCustomer() {
  return (
    <DefaultLayout>
      <RegisterCustomerPage />
    </DefaultLayout>
  );
}
