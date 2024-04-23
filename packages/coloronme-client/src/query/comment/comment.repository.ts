import client from '../../api/client';
import { CommentData, ReportComment } from './comment.queries';

class CommentRepository {
  async getComments(productId: number) {
    return client.get(`comments/${productId}`);
  }

  async postComment({ comment, productId }: CommentData) {
    return client.post(`comments/${productId}`, {
      comment,
    });
  }

  async postProductLike(id: number) {
    return client.post(`likes/product/${id}`);
  }

  async deleteComment(id: number) {
    return client.delete(`comments/${id}`);
  }

  async patchComment({ productId, comment }: CommentData) {
    return client.patch(`comments/${productId}`, {
      comment,
    });
  }

  async reportComment({ id, reason, comment }: ReportComment) {
    return client.post(`comment-report/${id}`, {
      reason,
      comment,
    });
  }
}

export default new CommentRepository();
