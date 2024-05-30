import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import client from '../api/client';

const useAuth = (requireAuth = true) => {
  const router = useRouter();

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['user'],
    queryFn: () => client.get('users'),
    enabled: requireAuth,
    retry: false,
  });

  useEffect(() => {
    if (isSuccess) {
      if (!data.personalColorId) {
        router.replace('/qrcode');
      }
      router.replace('/home');
    }
  }, [data, isSuccess, isError, router]);

  return { isLoading, verified: isSuccess };
};

export default useAuth;
