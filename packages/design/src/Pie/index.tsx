import { css } from '@emotion/react';
import { ResponsivePie as NivoPie } from '@nivo/pie';
import { Text } from '../text';
import { fontSize } from '../constants/size';
import { useMemo } from 'react';
import { convertColorCodeToColorName } from '../utils/convertColorCodeToColorName';
import { ColorCode } from '../utils/constants';
import { color } from '../constants';

interface Pie {
  data: { label: ColorCode; value: ColorCode; count: number }[];
  width: number;
  height: number;
  isShownTotalCount?: boolean;
}

export default function Pie({ data, width, height, isShownTotalCount = true }: Pie) {
  const onlyOneKeys = new Set([...data.map((dat) => dat.value)]);
  if (onlyOneKeys.size !== data.length) {
    throw new Error('Data 안에 중복된 value를 가진 요소가 있습니다.');
  }

  const convertedValue = useMemo(() => {
    return data.map((dat) => {
      return { id: convertColorCodeToColorName(dat.label), value: dat.count };
    });
  }, [data]);

  const totalCount = useMemo(() => {
    return data.reduce((acc, current) => acc + current.count, 0);
  }, [data]);

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text {
          font-size: 6px !important;
        }
      `}
    >
      <div>
        <Text as="body" size="md" weight="bold">
          {`${totalCount}건 (전체)`}
        </Text>
      </div>
      <div
        css={css`
          width: ${width}px;
          height: ${height}px;
        `}
      >
        <NivoPie
          data={convertedValue}
          sortByValue={true}
          margin={{
            top: 40,
            bottom: 40,
          }}
          innerRadius={0.5}
          padAngle={0.5}
          arcLinkLabelsColor={{
            from: 'color',
          }}
          arcLinkLabelsThickness={1}
          arcLinkLabelsTextColor={{
            from: 'color',
            modifiers: [['darker', 1.2]],
          }}
          arcLinkLabelsOffset={-6}
          arcLinkLabelsDiagonalLength={12}
        />
      </div>
      <div>
        {data.map((dat, index) => (
          <div
            key={dat.label}
            css={css`
              /* width: 136px; */
            `}
          >
            <span
              css={css`
                font-size: 12px;
                line-height: 18px;
              `}
            >
              {index + 1}.
            </span>{' '}
            <span
              css={css`
                font-size: 12px;
                line-height: 18px;
              `}
            >
              {convertColorCodeToColorName(dat.label)}
            </span>{' '}
            <span
              css={css`
                font-size: 12px;
                line-height: 18px;
                color: ${color.gray.gray050};
              `}
            >
              (19.4%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
