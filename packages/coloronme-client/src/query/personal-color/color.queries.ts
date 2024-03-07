import { useQuery } from '@tanstack/react-query';
import ColorRepository from './color.repository';

export const usePersonalColor = (code: any) => {
  return useQuery({
    queryKey: ['PersonalColor', code],
    queryFn: () => ColorRepository.getPersonalColor(code),
  });
};

export const useWorstColor = (code: any) => {
  return useQuery({
    queryKey: ['worstColor', code],
    queryFn: () => ColorRepository.getWorstPersonalColor(code),
  });
};
