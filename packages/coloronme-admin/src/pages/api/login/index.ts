import { NextApiRequest, NextApiResponse } from 'next';

import { NetworkResult } from '@/src/domains/shared/api/client';
import { AuthResult, Client } from '@/src/domains/shared/hooks/queryhooks/common.typs';

export default async function handler(req: NextApiRequest, res: NextApiResponse<NetworkResult<AuthResult>>) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ status: 'Failed', message: '아이디 또는 비밀번호를 잘못 입력했습니다.' });
    }
    return res.status(200).json({
      status: 'Success',
      data: {
        email: 'peter@naver.com',
        roleType: 'ROLE_CONSULTANT',
        accessToken:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4NiIsImF1dGgiOiJST0xFX0NPTlNVTFRBTlQiLCJleHAiOjE3MDE4NTgxODUsImlhdCI6MTcwMTc3MTc4NX0.i2PFVXkbKvfMNjIEn1Gj7diTBiQzo0FkvtqdJP6rmWY',
        refreshToken:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4MiIsImF1dGgiOiJST0xFX0NPTlNVTFRBTlQiLCJleHAiOjE3MDIyODg2OTgsImlhdCI6MTcwMTY4Mzg5OH0.UP9JRGxvo-IBxYItZ4RD9im7EnD9TPRxx4iH_3ms4kU',
      },
    });
  }
}
