import client from '../../api/client';

class ProductRepository {
  async getProducts(page: number, productId?: number) {
    if (page === 1) {
      return client.get(`products`);
    }

    return client.get(`products?page=${page}&lastcursor=${productId}`);
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
}

export default new ProductRepository();
