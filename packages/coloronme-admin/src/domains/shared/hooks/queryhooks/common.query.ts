import { useMutation, useQuery } from '@tanstack/react-query';
import commonRepository from './common.repository';

export const useUserByQR = (qruuid: string) => {
  return useQuery(['user', qruuid], () => commonRepository.getUserByQR(qruuid), {
    refetchOnWindowFocus: false,
    enabled: !!qruuid,
  });
};

export const useMutateUser = () => {
  return useMutation(['mutation user'], commonRepository.registerCustomer, {
    onError: (error) => console.error(error),
  });
};

export const useLogin = () => {
  return useMutation(['login'], commonRepository.login, {
    onError: (error) => console.error(error),
  });
};

export const useUsers = () => {
  return useQuery(['users'], commonRepository.getUsers, {
    refetchOnWindowFocus: false,
  });
};
