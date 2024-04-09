import { useRouter } from 'next/router';
import { PlusOutline } from '@design';
import RoundButton from '../../Common/Button/RoundButton';

const RegisterButton = () => {
  const router = useRouter();

  return (
    <RoundButton
      onClick={() => {
        router.push('/product/register');
      }}
    >
      <PlusOutline width="21" height="21" color="white" />
    </RoundButton>
  );
};

export default RegisterButton;
