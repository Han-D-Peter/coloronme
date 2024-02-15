import { css } from '@emotion/react';
import { Tabs } from '@design';
import ColorDataGraph from './ColorDataGraph';
import ChannelDataGraph from './ChannelDataGraph';
import GenderPieGraph from './GenderPieGraph';
import AgePieGraph from './AgePieGraph';
import DayHeatMap from './DayHeatMap';

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
        margin-top: 26px;
      `}
    >
      <Tabs
        tabStacks={{
          '고객 정보': (
            <>
              <ColorDataGraph date={date} />
              <ChannelDataGraph date={date} />
              <GenderPieGraph date={date} />
              <AgePieGraph date={date} />
            </>
          ),
          '진단 결과 공유 현황': (
            <>
              <DayHeatMap date={date} />
            </>
          ),
        }}
      />
    </div>
  );
}
