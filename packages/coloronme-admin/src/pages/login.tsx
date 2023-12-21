import { css } from '@emotion/react';
import { requestInstance } from '../domains/shared/api/client';
import ky from 'ky';
import LoginPage from '../domains/login/LoginPage';

export default function login() {
  return <LoginPage />;
}
