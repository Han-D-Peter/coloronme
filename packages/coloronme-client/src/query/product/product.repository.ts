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
}

export default new ProductRepository();
