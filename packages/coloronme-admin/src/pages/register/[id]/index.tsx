import RegisterCustomerPage from '@/src/domains/registerCustomer/RegisterCustomerPage';
import { useUserByQR } from '@/src/domains/shared/hooks/queryhooks/common.query';
import { useRouter } from 'next/router';

export default function RegisterCustomer() {
  return <RegisterCustomerPage />;
}
