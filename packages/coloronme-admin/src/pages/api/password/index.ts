import { NextApiRequest, NextApiResponse } from 'next';

import { NetworkResult } from '@/src/domains/shared/api/client';
import { Client } from '@/src/domains/shared/hooks/queryhooks/common.typs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NetworkResult<{ newPassword: string }>>,
) {
  if (req.method === 'PATCH') {
    const { oldPassword, newPassword, newPasswordConfirm } = req.body;

    if (!oldPassword || !newPassword || !newPasswordConfirm) {
      return res.status(400).json({
        status: 'Failed',
        message: '입력 정보 부족',
      });
    }

    if (newPassword !== newPasswordConfirm) {
      return res.status(400).json({
        status: 'Failed',
        message: '비밀번호가 일치하지 않습니다.',
      });
    }

    return res.status(200).json({
      status: 'Success',
      data: {
        newPassword: '$2a$10$jmVa483XFNFplHrwupEfqel8vCTChR1lWmNqAsQuh4o0ky0B27spO',
      },
    });
  }
}
