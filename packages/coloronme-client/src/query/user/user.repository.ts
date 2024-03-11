import client from '../../api/client';
import { User } from './user.model';

class UserRepository {
  async postUser(data: any) {
    return client.post('users', {
      personalColor: data,
    });
  }
  async getUser(): Promise<User> {
    return client.get('users');
  }
  async postId() {
    return client.post('users/uuid');
  }
  async patchPersonalColor(id: any) {
    return client.patch('users/personal-color', {
      personalColorId: Number(id),
    });
  }
  async aboutMe() {
    return client.get('users/aboutme');
  }
}

export default new UserRepository();
