import { css } from '@emotion/react';
import BarGraph from '../../../../../design/src/BarGraph';
import { useGenderData } from '../usersQuery/usersData.query';
import TextWithDescription from '../../../../../design/src/TextWithDescription';
import dynamic from 'next/dynamic';
const Pie = dynamic(() => import('../../../../../design/src/Pie'), { ssr: false });

interface GenderPieGraph {
  date: { start: string; end: string };
}

export default function GenderPieGraph({ date }: GenderPieGraph) {
  const { data } = useGenderData({ from: date.start, to: date.end });
  if (!data?.data) return <></>;

  const convertedData = Object.entries(data.data)
    .filter((item) => item[0] !== 'unknown')
    .map((item) => {
      const name = item[0] === 'male' ? '남성' : '여성';
      return {
        label: name,
        value: name,
        count: item[1],
      };
    })
    .sort((a, b) => b.count - a.count);

  return (
    <div>
      <div>
        <div
          css={css`
            margin-top: 26px;
            margin-bottom: 16px;
          `}
        >
          <TextWithDescription description="해당 기간 동안 결과를 공유한 고객중 성별을 입력한 고객 기준">
            고객 성별
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
            우리 고객의 성별은 주로{' '}
            <span
              css={css`
                font-family: inherit;
                font-size: 14px;
                font-weight: bold;
              `}
            >
              {convertedData[0].label}
            </span>
            이에요.
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          background-color: white;
          padding: 50px 28px;
          border-radius: 5px;
        `}
      >
        <Pie data={convertedData} isShownTotalCount={false} width={280} height={250} />
      </div>
    </div>
  );
}
