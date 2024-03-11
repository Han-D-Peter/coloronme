import client from '../../api/client';

class ColorRepository {
  async getPersonalColor(code: number | null) {
    return client.get(`personal-colors/${code}`);
    // return client.get(`personal-color/1`);
  }
  async getWorstPersonalColor(code: number | null) {
    return client.get(`worst-colors/${code}`);
  }
}

export default new ColorRepository();
