/* eslint-disable import/no-anonymous-default-export */

import { requestInstance } from '../../shared/api/client';
import { ColorData } from './usersData.type';

interface UsersDataQueryArgs {
  from?: string;
  to?: string;
  top: number;
  type: 'color' | 'channel' | 'gender' | 'age' | 'interval' | 'month';
}

function makeQuery({ from, to, top = 5, type }: UsersDataQueryArgs) {
  let query = `top=${top}`;

  if (type) {
    query += `&type=${type}`;
  }
  if (from) {
    query += `&from=${from}`;
  }

  if (to) {
    query += `&to=${to}`;
  }

  return query;
}

class UserDataRepository {
  async getColorData({ from, to, top, type }: UsersDataQueryArgs) {
    return await requestInstance.get<ColorData>(`data/users?${makeQuery({ from, to, top, type })}`);
  }
}

export default new UserDataRepository();
