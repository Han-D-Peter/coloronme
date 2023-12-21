import ky from 'ky';
import { BASE_URL } from '../constants/constants';

type NetworkStatus = 'Success' | 'Failed';

export interface NetworkResult<DataType> {
  status: NetworkStatus;
  message?: string;
  data?: DataType | null;
}

type request = {
  get: <T>(url: string) => Promise<NetworkResult<T>>;
  post: <T>(url: string, data: any) => Promise<NetworkResult<T>>;
  patch: <T>(url: string, data: any) => Promise<NetworkResult<T>>;
  put: <T>(url: string, data: any) => Promise<NetworkResult<T>>;
  delete: <T>(url: string) => Promise<NetworkResult<T>>;
};

const api = ky.create({
  prefixUrl: `${BASE_URL}/`,
  credentials: 'include',
  throwHttpErrors: false, // To handle HTTP errors manually
  hooks: {
    beforeRequest: [
      (request) => {
        const authToken = localStorage.getItem('coloronmeAdmin-token');

        if (authToken) {
          request.headers.set('Authorization', `${authToken}`);
        }
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (response.status === 401) {
          const refreshToken = localStorage.getItem('coloronmeAdmin-RefreshToken');

          try {
            const data: { status: string; data: { refreshToken: string; accessToken: string } } = await ky
              .post(`${BASE_URL}/refresh-token`, { json: { refreshToken } })
              .json();

            localStorage.setItem('coloronmeAdmin-token', data.data.accessToken);
            request.headers.set('Authorization', `${data.data.accessToken}`);
            return ky(request);
          } catch (e) {
            console.log(e);
            clearAuthToken();
          }
        }

        if (response.status === 500) {
          clearAuthToken();
        }

        return response;
      },
    ],
  },
});

export function setAuthToken(authToken: string | undefined | null, refreshToken: string): void {
  if (authToken == undefined) return;

  localStorage.setItem('coloronmeAdmin-token', authToken);
  localStorage.setItem('coloronmeAdmin-RefreshToken', refreshToken);
}

export function clearAuthToken(): void {
  localStorage.removeItem('coloronmeAdmin-token');
  localStorage.removeItem('coloronmeAdmin-RefreshToken');
}

const kyRequest: request = {
  get: <R = unknown>(url: string) =>
    api
      .get(url, { credentials: 'include' })
      .json<NetworkResult<R>>()
      .then((res) => ({ data: res.data, status: res.status })),
  post: <R = unknown, Q = any>(url: string, data: Q) =>
    api
      .post(url, { json: data, credentials: 'include' })
      .json<NetworkResult<R>>()
      .then((res) => ({ data: res.data, status: res.status })),
  patch: <R = unknown, Q = any>(url: string, data: Q) =>
    api
      .patch(url, { json: data })
      .json<NetworkResult<R>>()
      .then((res) => ({ data: res.data, status: res.status })),
  put: <R = unknown, Q = any>(url: string, data: Q) =>
    api
      .put(url, { json: data })
      .json<NetworkResult<R>>()
      .then((res) => ({ data: res.data, status: res.status })),
  delete: <R = unknown>(url: string) =>
    api
      .delete(url)
      .json<NetworkResult<R>>()
      .then((res) => ({ data: res.data, status: res.status })),
};

class HttpRequestInstance {
  private request: request;
  constructor(request: request) {
    this.request = request;
  }
  get<R = unknown>(url: string): Promise<NetworkResult<R>> {
    return this.request.get<R>(url);
  }
  post<R = unknown, Q = any>(url: string, data?: Q): Promise<NetworkResult<R>> {
    return this.request.post(url, data);
  }
  delete<R = unknown>(url: string): Promise<NetworkResult<R>> {
    return this.request.delete(url);
  }
  put<R = unknown, Q = any>(url: string, data?: Q): Promise<NetworkResult<R>> {
    return this.request.put(url, data);
  }
  patch<R = unknown, Q = any>(url: string, data?: Q): Promise<NetworkResult<R>> {
    return this.request.patch(url, data);
  }
}

export const requestInstance = new HttpRequestInstance(kyRequest);
