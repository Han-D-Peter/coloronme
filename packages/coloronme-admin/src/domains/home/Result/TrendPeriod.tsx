import { css } from '@emotion/react';
import { TextWithDescription } from '@design';
import { useIntervalData, usePeriodData } from '../usersQuery/usersData.query';
import dynamic from 'next/dynamic';
import { Day } from '../usersQuery/usersData.type';

interface TrendPeriod {
  date: { start: string; end: string };
}

export default function TrendPeriod({}: TrendPeriod) {
  const { data } = usePeriodData();

  if (!data?.data) return <></>;

  return (
    <>
      <div
        css={css`
          margin-top: 26px;
          margin-bottom: 16px;
        `}
      >
        <TextWithDescription description="해당 기간 동안 결과를 공유한 전체 고객 기준  ">
          요일 및 시간대
        </TextWithDescription>
      </div>
      {/* <div
        css={css`
          margin-bottom: 11px;
        `}
      >
        <div
          css={css`
            font-family: pretendard;
            font-size: 14px;
            margin-bottom: 3px;
          `}
        >
          해당 기간동안{' '}
          <span
            css={css`
              font-family: inherit;
              font-size: 14px;
              font-weight: bold;
            `}
          >
            {`${mostValue.요일} ${mostValue.시간}대`}
          </span>{' '}
          에
        </div>
        <div
          css={css`
            font-family: pretendard;
            font-size: 14px;
          `}
        >
          가장 많은 결과를 공유했어요.
        </div>
      </div> */}
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
