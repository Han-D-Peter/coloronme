import { css } from '@emotion/react';
import TextWithDescription from '../../../../../design/src/TextWithDescription';
import { useColorData } from '../usersQuery/usersData.query';
import BarGraph from '../../../../../design/src/BarGraph';

interface ColorBarGraph {
  date: { start: string; end: string };
}

export default function ColorBarGraph({ date }: ColorBarGraph) {
  const { data, isLoading } = useColorData({ from: date.start, to: date.end });
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
          display: flex;
          justify-content: center;
          background-color: white;
          padding: 50px 28px;
          border-radius: 5px;
        `}
      >
        <BarGraph data={convertedData} isShownTotalCount={false} width={230} height={100} />
      </div>
    </div>
  );
}
