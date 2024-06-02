import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CenteredLayout from '../components/Common/Layout/CenteredLayout';
import LoadingPage from '../components/Common/Loading/LoadingPage';
import LoginPage from '../components/Login';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/Common/Loading/LoadingSpinner';

export default function Home() {
  const router = useRouter();
  const { verified, data, isInitialLoading } = useAuth();

  useEffect(() => {
    if (verified) {
      router.replace('/home');
    } else if (data && !data.personalColorId) {
      router.replace('/qrcode');
    }
  }, [verified, data]);

  if (isInitialLoading) {
    return (
      <CenteredLayout>
        <LoadingPage />
      </CenteredLayout>
    );
  }

  return <CenteredLayout>{verified ? <LoadingSpinner /> : <LoginPage />}</CenteredLayout>;
}
