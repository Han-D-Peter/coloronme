import { css } from '@emotion/react';
import { ResponsiveHeatMap } from '@nivo/heatmap';

interface Heatmap {
  data: {
    id: string;
    data: {
      x: string;
      y: number;
    }[];
  }[];
  width: number;
  height: number;
  min: number;
  max: number;
}

export default function Heatmap({ data, width, height, min, max }: Heatmap) {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: center;
        text {
          font-size: 6px !important;
        }
      `}
    >
      {/* {isShownTotalCount && (
        <div>
          <Text as="body" size="md" weight="bold">
            {`${totalCount}건 (전체)`}
          </Text>
        </div>
      )} */}
      <div
        css={css`
          width: ${width}px;
          height: ${height}px;
        `}
      >
        <ResponsiveHeatMap
          data={data}
          margin={{ top: 50, right: 30, bottom: 80, left: 40 }}
          enableLabels={false}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '시간대',
            legendPosition: 'middle',
            legendOffset: -72,
          }}
          colors={{
            type: 'diverging',
            scheme: 'blues',
            minValue: min,
            maxValue: max,
            divergeAt: 0.5,
          }}
          emptyColor="#555555"
          opacity={0.75}
          inactiveOpacity={0.2}
          legends={[
            {
              anchor: 'bottom',
              translateX: 0,
              translateY: 30,
              length: 180,
              thickness: 8,
              direction: 'row',
              tickPosition: 'after',
              tickSize: 3,
              tickSpacing: 4,
              tickOverlap: false,
              title: 'Value →',
              titleAlign: 'start',
              titleOffset: 4,
            },
          ]}
        />
      </div>
      <div></div>
    </div>
  );
}

// {data.map((dat, index) => (
//   <div
//     key={dat.label}
//     css={css`
//       /* width: 136px; */
//     `}
//   >
//     <span
//       css={css`
//         font-size: 12px;
//         line-height: 18px;
//       `}
//     >
//       {index + 1}.
//     </span>{' '}
//     <span
//       css={css`
//         font-size: 12px;
//         line-height: 18px;
//       `}
//     >
//       {convertColorCodeToColorName(dat.label)}
//     </span>{' '}
//     {/* <span
//       css={css`
//         font-size: 12px;
//         line-height: 18px;
//         color: ${color.gray.gray050};
//       `}
//     >
//       {`(${((dat.count * 100) / totalCount).toFixed(2)}%)`}
//     </span> */}
//   </div>
// ))}
