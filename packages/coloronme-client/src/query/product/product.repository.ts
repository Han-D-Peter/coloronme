import client from '../../api/client';
import { ReportPost } from './product.queries';

type GetProducts = {
  page: number;
  productId?: number;
  keyword?: string;
  personalColor?: string;
  category?: string;
  sort?: string;
};

class ProductRepository {
  async getProducts({ page, productId, keyword, personalColor, category, sort }: GetProducts) {
    return client.get(
      `products?page=${page}${page === 1 || !productId ? '' : `&lastcursor=${productId}`}${
        keyword ? `&keyword=${keyword}` : ''
      }${personalColor ? `&personalcolor=${personalColor}` : ''}${category ? `&category=${category}` : ''}${
        sort ? `&sort=${sort}` : ''
      }`,
    );
  }

  async getProduct(productId: number) {
    return client.get(`products/${productId}`);
  }

  async postProductOGInfo(url: string) {
    return client.post(`products/address`, {
      sellUrl: url,
    });
  }

  async postProduct({
    name,
    color,
    platform,
    sellUrl,
    imageUrl,
    personalColor,
    category,
  }: {
    name: string;
    color: string[];
    platform: string[];
    sellUrl: string;
    imageUrl: string;
    personalColor: number;
    category: string;
  }) {
    return client.post(`products`, {
      name,
      color,
      platform,
      sellUrl,
      imageUrl,
      personalColor,
      category,
    });
  }

  async postProductLike(id: number) {
    return client.post(`likes/product/${id}`);
  }

  async deleteProduct(id: number) {
    return client.delete(`products/${id}`);
  }

  async reportProduct({ id, reason, comment }: ReportPost) {
    return client.post(`product-report/${id}`, {
      reason,
      comment,
    });
  }
}

export default new ProductRepository();
