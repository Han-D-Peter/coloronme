import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ProductReport } from '@/src/constants/constants';
import ProductRepository from './product.repository';
import { OGInfo, ProductDetail } from './product.model';

type GetProduct = {
  keyword?: string;
  personalColor?: string;
  category?: string;
  sort?: string;
};

export const useInfiniteProducts = ({ keyword, personalColor, category, sort }: GetProduct) => {
  return useInfiniteQuery({
    queryKey: ['projects', keyword, personalColor, category, sort],
    queryFn: ({ pageParam = { page: 1, lastItemId: 0 } }) =>
      ProductRepository.getProducts({
        page: pageParam.page,
        productId: pageParam.lastItemId,
        keyword,
        personalColor,
        category,
        sort,
      }),
    initialPageParam: { page: 1, lastItemId: 0 },
    getNextPageParam: (lastPage) => {
      if (lastPage.products.length === 0 || lastPage.pagination.currentPage === lastPage.pagination.totalPages)
        return undefined;

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
  return useMutation<OGInfo, AxiosError, { url: string }>({
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

export const usePostProductLike = () => {
  return useMutation({
    mutationFn: (id: number) => ProductRepository.postProductLike(id),
  });
};

export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: (id: number) => ProductRepository.deleteProduct(id),
  });
};

export type ReportPost = {
  id: number;
  reason: ProductReport;
  comment: string;
};
export const useReportProduct = () => {
  return useMutation({
    mutationFn: ({ id, reason, comment }: ReportPost) => ProductRepository.reportProduct({ id, reason, comment }),
  });
};
