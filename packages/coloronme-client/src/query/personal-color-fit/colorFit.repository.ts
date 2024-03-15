import client from '../../api/client';

class ColorFitRepository {
  async getProducts() {
    return client.get(`products`);
  }
}

export default new ColorFitRepository();
