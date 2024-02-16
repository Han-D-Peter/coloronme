import { css } from '@emotion/react';
import { TextWithDescription } from '@design';
import { useIntervalData } from '../usersQuery/usersData.query';
import dynamic from 'next/dynamic';
import { Day } from '../usersQuery/usersData.type';

const ResponsiveHeatMap = dynamic(() => import('../../../../../design/src/Heatmap'), { ssr: false });

interface DayHeatMap {
  date: { start: string; end: string };
}

function convertEngDayToHangul(day: Day) {
  switch (day) {
    case 'MONDAY':
      return '월요일';
    case 'TUESDAY':
      return '화요일';
    case 'WEDNESDAY':
      return '수요일';
    case 'THURSDAY':
      return '목요일';

    case 'FRIDAY':
      return '금요일';
    case 'SATURDAY':
      return '토요일';
    case 'SUNDAY':
      return '일요일';
  }
}

export default function DayHeatMap({ date }: DayHeatMap) {
  const { data } = useIntervalData({ from: date.start, to: date.end });

  if (!data?.data) return <></>;

  const convertedData = data.data
    .filter((item) => Number(item.id) > 7 && Number(item.id) < 21)
    .map((item) => ({
      id: `${item.id}시`,
      data: item.data.map((dataItem) => ({
        x: convertEngDayToHangul(dataItem.x),
        y: dataItem.y,
      })),
    }));

  const valueArr = Object.values(convertedData).flatMap((item) => item.data.map((data) => data.y));
  const mostValue = Object.values(convertedData)
    .map((item) => {
      const 시간 = item.id;
      const { x: 요일, y: 빈도 } = item.data.reduce((accu, curr) => {
        if (accu.y < curr.y) {
          return curr;
        } else {
          return accu;
        }
      });
      return { 시간, 요일, 빈도 };
    })
    .reduce((accu, curr) => {
      if (accu.빈도 < curr.빈도) {
        return curr;
      } else {
        return accu;
      }
    });

  const min = Math.min(...valueArr);
  const max = Math.max(...valueArr);

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
      <div
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
      </div>
      <div
        css={css`
          position: relative;
          display: flex;
          justify-content: center;
          background-color: white;
          border-radius: 5px;
        `}
      >
        {data.data && <ResponsiveHeatMap data={convertedData} width={400} height={350} min={min} max={max} />}
      </div>
    </>
  );
}
