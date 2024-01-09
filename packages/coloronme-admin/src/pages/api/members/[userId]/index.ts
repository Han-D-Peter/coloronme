import { NextApiRequest, NextApiResponse } from 'next';

import { NetworkResult } from '@/src/domains/shared/api/client';
import { Client } from '@/src/domains/shared/hooks/queryhooks/common.typs';

export default async function handler(req: NextApiRequest, res: NextApiResponse<NetworkResult<Client>>) {
  if (req.method === 'POST') {
    const { personalColorId, consultedContent, consultedDrawing, consultedDate } = req.body;

    if (!personalColorId || !consultedContent || !consultedDrawing || !consultedDate) {
      return res.status(400).json({
        status: 'Failed',
        message: '필요 정보 부족',
      });
    }
    return res.status(200).json({
      status: 'Success',
      data: {
        memberId: 3,
        nickname: '이현아',
        email: 'gusdktest@gmail.com',
        profileImageUrl: 'http://k.kakaocdn.net/dn/c4KuHP/btsAbmN1hpI/B6pq4YqBHzDPKV6y3bLeKK/img_640x640.jpg',
        consultedDate: '2023-11-22T15:53:16.45',
        personalColorId: 5,
        age: 25,
        genderEnum: 'FEMALE',
        consultedContent: '어두워요',
        consultedDrawing: '',
      },
    });
  }

  if (req.method === 'PATCH') {
    const { personalColorId, consultedContent, consultedDrawing, consultedDate } = req.body;

    if (!personalColorId || !consultedContent || !consultedDrawing || !consultedDate) {
      return res.status(400).json({
        status: 'Failed',
        message: '필요 정보 부족',
      });
    }
    return res.status(200).json({
      status: 'Success',
      data: {
        memberId: 3,
        nickname: '이현아',
        email: 'gusdktest@gmail.com',
        profileImageUrl: 'http://k.kakaocdn.net/dn/c4KuHP/btsAbmN1hpI/B6pq4YqBHzDPKV6y3bLeKK/img_640x640.jpg',
        consultedDate: '2023-11-22T15:53:16.45',
        personalColorId: 5,
        age: 25,
        genderEnum: 'FEMALE',
        consultedContent: '어두워요',
        consultedDrawing: '',
      },
    });
  }
}
