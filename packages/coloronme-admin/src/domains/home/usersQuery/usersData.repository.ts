/* eslint-disable import/no-anonymous-default-export */

import { requestInstance } from '../../shared/api/client';
import { ColorData } from './usersData.type';

interface UsersDataQueryArgs {
  from?: string;
  to?: string;
  top?: number;
  type: 'color' | 'channel' | 'gender' | 'age' | 'interval' | 'month';
  principal?: 'day' | 'time';
}

function makeQuery({ from, to, top = 5, type, principal }: UsersDataQueryArgs) {
  let query = `top=${top}`;

  if (type) {
    query += `&type=${type}`;
    if (type === 'interval') {
      query += `&principal=${principal}`;
    }
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
  async getColorData<T>({ from, to, top, type, principal }: UsersDataQueryArgs) {
    return await requestInstance.get<T>(`data/users?${makeQuery({ from, to, top, type, principal })}`);
  }
}

export default new UserDataRepository();
