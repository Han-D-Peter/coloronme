import { useQuery } from '@tanstack/react-query';
import client from '../api/client';

const useAuth = (requireAuth = true) => {
  const { data, isLoading, isSuccess, isInitialLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => client.get('users'),
    enabled: requireAuth,
    retry: false,
  });

  return { isLoading, isInitialLoading, verified: isSuccess && !!data.personalColorId, data };
};

export default useAuth;
