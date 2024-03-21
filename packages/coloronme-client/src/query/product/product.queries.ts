import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import ProductRepository from './product.repository';
import { ProductDetail } from './product.model';

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

export const useProduct = (id: number) => {
  return useQuery<ProductDetail>({
    queryKey: ['product', id],
    queryFn: () => ProductRepository.getProduct(id),
    enabled: !!id,
  });
};
