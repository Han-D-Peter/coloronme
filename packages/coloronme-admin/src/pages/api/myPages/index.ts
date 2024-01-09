import { NextApiRequest, NextApiResponse } from 'next';
import { Me, MutatedUser } from '../../../domains/shared/hooks/queryhooks/common.typs';
import { NetworkResult } from '@/src/domains/shared/api/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<NetworkResult<MutatedUser>>) {
  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'Success',
      data: {
        name: 'peter',
        company: 'coloronme',
        email: 'asdf@asdf.com',
      },
    });
  }

  if (req.method === 'PATCH') {
    const { name, company, email } = req.body;

    if (!name || !company || !email) {
      return res.status(400).json({
        status: 'Failed',
        message: 'Error',
      });
    }
    return res.status(200).json({
      status: 'Success',
      data: {
        name: 'peter',
        company: 'coloronme',
        email: 'asdf@asdf.com',
      },
    });
  }
}
