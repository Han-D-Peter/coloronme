import RegisterCustomerPage from '@/src/domains/registerCustomer/RegisterCustomerPage';
import DefaultLayout from '@/src/domains/shared/component/layout/DefaultLayout';

export default function RegisterCustomer() {
  return (
    <DefaultLayout>
      <RegisterCustomerPage />
    </DefaultLayout>
  );
}
