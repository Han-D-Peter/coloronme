import { useQuery } from '@tanstack/react-query';
import usersDataRepository from './usersData.repository';
import { AgeData, ChannelData, ColorData, GenderData } from './usersData.type';

export const useColorData = ({ from, to }: { from: string; to: string }) => {
  return useQuery(
    ['colorData'],
    () => usersDataRepository.getColorData<ColorData>({ from, to, top: 5, type: 'color' }),
    {
      enabled: !from || !to ? false : true,
    },
  );
};

export const useApproachChannelData = ({ from, to }: { from: string; to: string }) => {
  return useQuery(
    ['channelData'],
    () => usersDataRepository.getColorData<ChannelData>({ from, to, top: 5, type: 'channel' }),
    {
      enabled: !from || !to ? false : true,
    },
  );
};

export const useGenderData = ({ from, to }: { from: string; to: string }) => {
  return useQuery(
    ['genderData'],
    () => usersDataRepository.getColorData<GenderData>({ from, to, top: 5, type: 'gender' }),
    {
      enabled: !from || !to ? false : true,
    },
  );
};

export const useAgeData = ({ from, to }: { from: string; to: string }) => {
  return useQuery(['ageData'], () => usersDataRepository.getColorData<AgeData>({ from, to, top: 5, type: 'age' }), {
    enabled: !from || !to ? false : true,
  });
};
