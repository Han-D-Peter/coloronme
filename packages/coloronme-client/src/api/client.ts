import Router from 'next/router';
import Axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../constants/constants';

const axios = Axios.create({
  baseURL: `${BASE_URL}/`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      Router.replace('/');
    }
    return Promise.reject(error);
  },
);

const client = {
  async get(url: string, config?: AxiosRequestConfig) {
    const response = await axios.get(url, config);

    return response.data;
  },

  async post(url: string, body?: any, config?: AxiosRequestConfig) {
    const response = await axios.post(url, body, config);

    return response.data;
  },

  async put(url: string, body?: any, config?: AxiosRequestConfig) {
    const response = await axios.put(url, body, config);

    return response.data;
  },

  async patch(url: string, body?: any, config?: AxiosRequestConfig) {
    const response = await axios.patch(url, body, config);

    return response.data;
  },

  async delete(url: string, config?: AxiosRequestConfig) {
    const response = await axios.delete(url, config);

    return response.data;
  },
};

export default client;
