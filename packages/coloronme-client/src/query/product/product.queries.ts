import { useQuery } from '@tanstack/react-query';
import ProductRepository from './product.repository';
import { Products } from './product.model';

export const useProducts = () => {
  return useQuery<Products>({
    queryKey: ['products'],
    queryFn: () => ProductRepository.getProducts(),
  });
};
