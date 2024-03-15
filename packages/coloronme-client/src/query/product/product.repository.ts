import client from '../../api/client';

class ProductRepository {
  async getProducts() {
    return client.get(`products`);
  }
}

export default new ProductRepository();
