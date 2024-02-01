import { useQuery } from '@tanstack/react-query';
import usersDataRepository from './usersData.repository';

export const useColorData = ({ from, to }: { from: string; to: string }) => {
  return useQuery(['colorData'], () => usersDataRepository.getColorData({ from, to, top: 5, type: 'color' }), {
    enabled: !from || !to ? false : true,
  });
};
