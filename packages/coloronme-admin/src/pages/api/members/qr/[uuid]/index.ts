import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '../../../../../domains/shared/hooks/queryhooks/common.typs';
import { NetworkResult } from '@/src/domains/shared/api/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<NetworkResult<Client>>) {
  return res.status(200).json({
    status: 'Success',
    data: {
      memberId: 1,
      nickname: 'peter',
      email: 'asdf@asdf.com',
      consultedDate: '2022-2-22',
      personalColorId: 1,
      age: 15,
      genderEnum: '1',
      consultedContent: 'simple is best',
      consultedDrawing: '{}',
    },
  });
}
