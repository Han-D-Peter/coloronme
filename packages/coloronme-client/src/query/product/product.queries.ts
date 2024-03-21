import { UseMutationResult, useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import ProductRepository from './product.repository';
import { OGInfo, ProductDetail } from './product.model';

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

export const useProductOGInfo = () => {
  return useMutation({
    mutationFn: ({ url }: { url: string }) => ProductRepository.postProductOGInfo(url),
  });
};

export type PostProduct = {
  name: string;
  color: string[];
  platform: string[];
  sellUrl: string;
  imageUrl: string;
  personalColor: number;
  category: string;
};

export const usePostProduct = () => {
  return useMutation({
    mutationFn: ({ name, color, platform, sellUrl, imageUrl, personalColor, category }: PostProduct) =>
      ProductRepository.postProduct({ name, color, platform, sellUrl, imageUrl, personalColor, category }),
  });
};
