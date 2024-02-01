import { css } from '@emotion/react';
import Tabs from '../../../../../design/src/Tabs/index';
import { useColorData } from '../usersQuery/usersData.query';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import BarGraph from '../../../../../design/src/BarGraph/index';
import TextWithDescription from '../../../../../design/src/TextWithDescription/index';
import ColorBarGraph from './ColorBarGraph';
import ChannelBarGraph from './ChannelBarGraph';
import GenderPieGraph from './GenderPieGraph';
const Pie = dynamic(() => import('../../../../../design/src/Pie/index'), { ssr: false });

interface Result {
  date: { start: string; end: string };
}

export default function Result({ date }: Result) {
  return (
    <div
      css={css`
        /* position: fixed; */
        left: 0;
        width: 100%;
        top: 180px;
      `}
    >
      <Tabs
        tabStacks={{
          '고객 정보': (
            <>
              <ColorBarGraph date={{ start: '2024-01-01', end: '2024-01-31' }} />
              <ChannelBarGraph date={{ start: '2024-01-01', end: '2024-01-31' }} />
              <GenderPieGraph date={{ start: '2024-01-01', end: '2024-01-31' }} />
            </>
          ),
          '진단 결과 공유 현황': <div>hello</div>,
        }}
      />
    </div>
  );
}
