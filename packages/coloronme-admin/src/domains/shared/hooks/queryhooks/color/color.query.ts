import { useMutation, useQuery } from '@tanstack/react-query';
import colorRepository from './color.repository';
import { queryClient } from '@/src/pages/_app';

export function useMyColor() {
  return useQuery(['myColor'], colorRepository.getColor);
}

export function useRemoveColorType() {
  return useMutation(['deleteMyColor'], colorRepository.removeMyColorType);
}

export function useMutateColorType() {
  return useMutation(['mutateColorType'], colorRepository.registMyColorType, {
    onSuccess: () => {
      queryClient.refetchQueries(['myColor']);
    },
  });
}

export function useModifyColorType() {
  return useMutation(['modifyColorType'], colorRepository.modifyMyColorType, {
    onSuccess: () => {
      queryClient.refetchQueries(['myColor']);
    },
  });
}
