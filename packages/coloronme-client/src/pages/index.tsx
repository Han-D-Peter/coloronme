import CenteredLayout from '../components/Common/Layout/CenteredLayout';
import LoginPage from '../components/Login';
import useAuth from '../hooks/useAuth';

export default function Home() {
  const {} = useAuth();

  return (
    <CenteredLayout>
      <LoginPage />
    </CenteredLayout>
  );
}
