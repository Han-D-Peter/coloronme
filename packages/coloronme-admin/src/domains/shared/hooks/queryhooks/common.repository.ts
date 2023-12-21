/* eslint-disable import/no-anonymous-default-export */
import ky from 'ky';
import { AuthResult, Client, ColorResponse } from './common.typs';
import { BASE_URL } from '../../constants/constants';
import { requestInstance } from '../../api/client';

class CommonRepository {
  async getUserByQR(uuid: string) {
    return await requestInstance.get<Client>(`members/qr/${uuid}`);
  }
  async getUsers() {
    return await requestInstance.get<Client[]>('members');
  }

  async login({ email, password }: { email: string; password: string }) {
    return await requestInstance.post<AuthResult, { email: string; password: string }>('login', {
      email,
      password,
    });
  }

  async registerCustomer({
    userId,
    personalColorId,
    consultedContent,
    consultedDrawing,
    consultedDate,
  }: {
    userId: string;
    personalColorId: number;
    consultedContent: string;
    consultedDrawing: string;
    consultedDate: string;
  }) {
    return await requestInstance.post(`members/${userId}`, {
      personalColorId,
      consultedContent,
      consultedDrawing,
      consultedDate,
    });
  }
}

export default new CommonRepository();
