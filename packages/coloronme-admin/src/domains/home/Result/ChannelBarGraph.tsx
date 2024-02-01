import { css } from '@emotion/react';
import BarGraph from '../../../../../design/src/BarGraph';
import { useApproachChannelData } from '../usersQuery/usersData.query';
import TextWithDescription from '../../../../../design/src/TextWithDescription';

interface ChannelBarGraph {
  date: { start: string; end: string };
}

export default function ChannelBarGraph({ date }: ChannelBarGraph) {
  const { data } = useApproachChannelData({ from: date.start, to: date.end });
  if (!data?.data) return <></>;

  const convertedData = Object.entries(data.data).map((item) => {
    return {
      label: item[0],
      value: item[0],
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
          <TextWithDescription description="해당 기간 동안 결과를 공유한 전체 고객 기준">
            고객 유입 채널
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
            우리 고객은 주로
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
              인스타그램
            </span>
            을 통해 샵을 알게 되었어요.
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
