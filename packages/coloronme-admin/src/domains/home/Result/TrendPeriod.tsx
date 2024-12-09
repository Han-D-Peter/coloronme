import { css } from '@emotion/react';
import { TextWithDescription } from '@design';
import { useIntervalData, usePeriodData } from '../usersQuery/usersData.query';
import dynamic from 'next/dynamic';
import { Day } from '../usersQuery/usersData.type';
import PeriodTracking from '../../../../../design/src/PeriodTracking/index';

interface TrendPeriod {
  date: { start: string; end: string };
}

export default function TrendPeriod({}: TrendPeriod) {
  const { data } = usePeriodData();
  if (!data?.data) return <></>;

  const currentMonth = new Date().getMonth() + 1;

  const period = data.data.period.map((per, index) => {
    return {
      title: 5 - index === 0 ? '이번달' : `${currentMonth - 5 + index}월`,
      value: per,
    };
  });

  return (
    <>
      <div
        css={css`
          margin-top: 26px;
          margin-bottom: 16px;
        `}
      >
        <TextWithDescription description="해당 기간 동안 결과를 공유한 전체 고객 기준  ">
          6개월 간 진단추이
        </TextWithDescription>
      </div>
      <div
        css={css`
          margin-bottom: 11px;
        `}
      >
        <div
          css={css`
            position: relative;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            background-color: white;
            border-radius: 5px;
            padding: 76px 33px 56px 33px;
          `}
        >
          <PeriodTracking values={period} width="256px" height={200} />
        </div>
      </div>
      <div
        css={css`
          position: relative;
          display: flex;
          justify-content: center;
          background-color: white;
          border-radius: 5px;
        `}
      ></div>
    </>
  );
}
