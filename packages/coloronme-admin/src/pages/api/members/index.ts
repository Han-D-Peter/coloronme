import { NextApiRequest, NextApiResponse } from 'next';

import { NetworkResult } from '@/src/domains/shared/api/client';
import { Client } from '@/src/domains/shared/hooks/queryhooks/common.typs';

export default async function handler(req: NextApiRequest, res: NextApiResponse<NetworkResult<Client[]>>) {
  return res.status(200).json({
    status: 'Success',
    data: [
      {
        memberId: 1,
        nickname: 'peter',
        email: 'asdf@asdf.com',
        consultedDate: '2022-2-22',

        age: 15,
        genderEnum: '1',
        consultedContent: 'simple is best',
        consultedDrawing: '{}',
      },
      {
        memberId: 1,
        nickname: 'peter',
        email: 'asdf@asdf.com',
        consultedDate: '2022-2-22',

        age: 15,
        genderEnum: '1',
        consultedContent: 'simple is best',
        consultedDrawing: '{}',
      },
    ],
  });
}
