/* eslint-disable import/no-anonymous-default-export */
import ky from 'ky';
import { Me, AuthResult, Client, ColorResponse, MutatedUser } from './common.typs';
import { BASE_URL } from '../../constants/constants';
import { requestInstance } from '../../api/client';

class CommonRepository {
  async getMe() {
    return await requestInstance.get<Me>('myPages');
  }

  async getUserByQR(uuid: string) {
    return await requestInstance.get<Client>(`members/qr/${uuid}`);
  }
  async getUsers() {
    return await requestInstance.get<Client[]>('members');
  }

  async getUser(userId: string) {
    return await requestInstance.get<Client>(`members/${userId}`);
  }

  async login({ email, password }: { email: string; password: string }) {
    return await requestInstance.post<AuthResult, { email: string; password: string }>('login', {
      email,
      password,
    });
  }

  async mutateMe(body: MutatedUser) {
    return await requestInstance.patch<ColorResponse<MutatedUser>, MutatedUser>('myPages', { ...body });
  }

  async modifyCustomer({
    userId,
    personalColorTypeId,
    consultedContent,
    consultedDrawing,
    consultedDate,
    colors,
  }: {
    userId: string;
    personalColorTypeId: number;
    consultedContent: string;
    consultedDrawing: string;
    consultedDate: string;
    colors: number[];
  }) {
    return await requestInstance.patch<Client>(`members/${userId}`, {
      personalColorTypeId,
      consultedContent,
      consultedDrawing,
      consultedDate,
      colors,
    });
  }

  async registerCustomer({
    userId,
    personalColorTypeId,
    consultedContent,
    consultedDrawing,
    consultedDate,
    colors,
  }: {
    userId: string;
    personalColorTypeId: number;
    consultedContent: string;
    consultedDrawing: string;
    consultedDate: string;
    colors: number[];
  }) {
    return await requestInstance.post<Client>(`members/${userId}`, {
      personalColorTypeId,
      consultedContent,
      consultedDrawing,
      consultedDate,
      colors,
    });
  }

  async modifyPassword(body: { oldPassword: string; newPassword: string; newPasswordConfirm: string }) {
    return await requestInstance.patch('password', body);
  }
}

export default new CommonRepository();
