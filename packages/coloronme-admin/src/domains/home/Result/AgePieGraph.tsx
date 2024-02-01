import { css } from '@emotion/react';
import BarGraph from '../../../../../design/src/BarGraph';
import { useAgeData } from '../usersQuery/usersData.query';
import TextWithDescription from '../../../../../design/src/TextWithDescription';
import dynamic from 'next/dynamic';
const Pie = dynamic(() => import('../../../../../design/src/Pie'), { ssr: false });

interface AgePieGraph {
  date: { start: string; end: string };
}

function convertEngAgeToKorAge(age: string) {
  switch (age) {
    case 'ten':
      return '10대';
    case 'twenty':
      return '20대';
    case 'thirty':
      return '30대';
    case 'forty':
      return '40대';
    case 'fifty':
      return '50대';
    case 'sixtyOver':
      return '60대 이상';
    default:
      return age;
  }
}

export default function AgePieGraph({ date }: AgePieGraph) {
  const { data } = useAgeData({ from: date.start, to: date.end });
  if (!data?.data) return <></>;

  const convertedData = Object.entries(data.data).map((item) => {
    const name = convertEngAgeToKorAge(item[0]);
    return {
      label: name,
      value: name,
      count: item[1],
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
          <TextWithDescription description="해당 기간 동안 결과를 공유한 고객중 성별을 입력한 고객 기준">
            고객 연령대
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
            우리 고객의 연령대는 주로{' '}
            <span
              css={css`
                font-family: inherit;
                font-size: 14px;
                font-weight: bold;
              `}
            >
              {convertedData[0].label}
            </span>
            예요.
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
