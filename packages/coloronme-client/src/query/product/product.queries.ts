import { useInfiniteQuery } from '@tanstack/react-query';
import ProductRepository from './product.repository';

export const useInfiniteProducts = () => {
  return useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: ({ pageParam = { page: 1, lastItemId: 0 } }) =>
      ProductRepository.getProducts(pageParam.page, pageParam.lastItemId),
    initialPageParam: { page: 1, lastItemId: 0 },
    getNextPageParam: (lastPage) => {
      if (lastPage.pagination.currentPage === lastPage.pagination.totalPages) return undefined;

      const lastItemId = lastPage.products?.[lastPage.products.length - 1]?.id;
      return { page: lastPage.pagination.currentPage + 1, lastItemId };
    },
  });
};
