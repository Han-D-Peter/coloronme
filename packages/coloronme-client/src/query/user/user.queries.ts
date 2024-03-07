import { useMutation, useQuery } from '@tanstack/react-query';
import UserRepository from './user.repository';

export const usePostUser = () => {
  return useMutation({
    mutationKey: ['postUser'],
    mutationFn: (data: string) => UserRepository.postUser(data),
  });
};

export const useGetUser = () => {
  return useQuery({
    queryKey: ['getUser'],
    queryFn: () => UserRepository.getUser(),
  });
};

export const usePostId = () => {
  return useQuery({
    queryKey: ['postId'],
    queryFn: () => UserRepository.postId(),
  });
};

export const usePatchPersonalColor = () => {
  return useMutation({
    mutationKey: ['patchPersonalColor'],
    mutationFn: (id: any) => UserRepository.patchPersonalColor(id),
  });
};

export const useAboutMe = () => {
  return useQuery({
    queryKey: ['aboutMe'],
    queryFn: () => UserRepository.aboutMe(),
  });
};
