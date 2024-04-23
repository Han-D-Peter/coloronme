import { useMutation, useQuery } from '@tanstack/react-query';
import commentRepository from './comment.repository';
import { Comments } from './comment.model';
import { CommentReport } from '@/src/constants/constants';

export const useComments = (id: number) => {
  return useQuery<Comments>({
    queryKey: ['comments', id],
    queryFn: () => commentRepository.getComments(id),
    enabled: !!id,
  });
};

export type CommentData = {
  productId: number;
  comment: string;
};

export const usePostComment = () => {
  return useMutation({
    mutationFn: ({ comment, productId }: CommentData) => commentRepository.postComment({ comment, productId }),
  });
};

export const usePatchComment = () => {
  return useMutation({
    mutationFn: (id: number) => commentRepository.postProductLike(id),
  });
};

export const useDeleteComment = () => {
  return useMutation({
    mutationFn: (id: number) => commentRepository.deleteComment(id),
  });
};

export type ReportComment = {
  id: number;
  reason: CommentReport;
  comment: string;
};
export const useReportComment = () => {
  return useMutation({
    mutationFn: ({ id, reason, comment }: ReportComment) => commentRepository.reportComment({ id, reason, comment }),
  });
};
