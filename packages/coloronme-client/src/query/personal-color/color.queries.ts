import { useQuery } from '@tanstack/react-query';
import ColorRepository from './color.repository';
import { PersonalColor } from './color.model';

export const usePersonalColor = (code: number | null) => {
  return useQuery<PersonalColor>({
    queryKey: ['PersonalColor', code],
    queryFn: () => ColorRepository.getPersonalColor(code),
    enabled: !!code,
  });
};

export const useWorstColor = (code: number | null) => {
  return useQuery<PersonalColor>({
    queryKey: ['worstColor', code],
    queryFn: () => ColorRepository.getWorstPersonalColor(code),
    enabled: !!code,
  });
};
