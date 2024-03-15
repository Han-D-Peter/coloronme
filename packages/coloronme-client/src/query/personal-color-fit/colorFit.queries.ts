import { useQuery } from '@tanstack/react-query';
import colorFitRepository from './colorFit.repository';
import { Products } from './colorFit.model';

export const useProducts = () => {
  return useQuery<Products>({
    queryKey: ['products'],
    queryFn: () => colorFitRepository.getProducts(),
  });
};
