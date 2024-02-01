import { css } from '@emotion/react';
import TextWithDescription from '../../../../../design/src/TextWithDescription';
import { useColorData } from '../usersQuery/usersData.query';
import BarGraph from '../../../../../design/src/BarGraph';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const Pie = dynamic(() => import('../../../../../design/src/Pie/index'), { ssr: false });

interface ColorDataGraph {
  date: { start: string; end: string };
}

export default function ColorDataGraph({ date }: ColorDataGraph) {
  const { data, isLoading } = useColorData({ from: date.start, to: date.end });
  const [isPie, setIsPie] = useState(false);
  if (!data?.data) return <></>;

  const convertedData = data.data.map((item) => {
    return {
      label: item.name,
      value: item.name,
      count: item.count,
    };
  });

  return (
    <div>
      <div>
        <div
          css={css`
            margin-top: 26px;
            margin-bottom: 16px;
          `}
        >
          <TextWithDescription description="해당 기간 동안 결과를 공유한 전체 고객 기준">
            고객 퍼스널 컬러 Top 5
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
            `}
          >
            전체 고객{' '}
            <span
              css={css`
                font-family: inherit;
                font-size: 14px;
                font-weight: bold;
              `}
            >
              108명
            </span>{' '}
            중
          </div>
          <div
            css={css`
              font-family: pretendard;
              font-size: 14px;
            `}
          >
            <span
              css={css`
                font-family: inherit;
                font-size: 14px;
                font-weight: bold;
              `}
            >
              여름 쿨 라이트
            </span>
            가
            <span
              css={css`
                font-family: inherit;
                font-size: 14px;
                font-weight: bold;
              `}
            >
              19.4%
            </span>
            로 가장 많았어요.
          </div>
        </div>
      </div>
      <div
        css={css`
          position: relative;
          display: flex;
          justify-content: center;
          background-color: white;
          padding: 50px 28px;
          border-radius: 5px;
        `}
      >
        <button
          onClick={() => setIsPie((prev) => !prev)}
          css={css`
            position: absolute;
            right: 10px;
            top: 9px;
            width: 42px;
            height: 31px;
            border-radius: 5px;
            border: none;
            background: var(--Grayscale-10, #f4f4f4);
            box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          `}
        >
          <img src="images/Pie.png" width={30} />
        </button>
        {isPie && <Pie data={convertedData} isShownTotalCount={false} width={300} height={230} />}
        {!isPie && <BarGraph data={convertedData} isShownTotalCount={false} width={230} height={100} />}
      </div>
    </div>
  );
}
