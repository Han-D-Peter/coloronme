import { css } from '@emotion/react';
import { ResponsivePie as NivoPie } from '@nivo/pie';
import { Text } from '../text';
import { fontSize } from '../constants/size';
import { useMemo } from 'react';
import { convertColorCodeToColorName } from '../utils/convertColorCodeToColorName';
import { ColorCode } from '../utils/constants';
import { color } from '../constants';
import Bar from './Bar';

interface BarGraph {
  data: { label: ColorCode; value: ColorCode; count: number }[];
  width: number;
  height: number;
  isShownTotalCount?: boolean;
}

const barRandomColor = ['red', 'green', 'blue', 'yellow', 'skyblue', 'black'];

export default function BarGraph({ data, width, height, isShownTotalCount = true }: BarGraph) {
  const onlyOneKeys = new Set([...data.map((dat) => dat.value)]);
  if (onlyOneKeys.size !== data.length) {
    throw new Error('Data 안에 중복된 value를 가진 요소가 있습니다.');
  }

  const convertedValue = useMemo(() => {
    return data
      .map((dat) => {
        return { id: convertColorCodeToColorName(dat.label), value: dat.count };
      })
      .sort((a, b) => b.value - a.value);
  }, [data]);

  const totalCount = useMemo(() => {
    return data.reduce((acc, current) => acc + current.count, 0);
  }, [data]);
  const mostCount = useMemo(() => {
    return data.reduce((acc, current) => {
      if (acc > current.count) {
        return acc;
      } else {
        return current.count;
      }
    }, 0);
  }, [data]);

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          margin-bottom: 45px;
        `}
      >
        <div>
          <Text as="body" size="xlg" weight="bold">
            {`${totalCount}건(전체)`}
          </Text>
        </div>
      </div>
      <div>
        {convertedValue.map((value, index) => {
          return (
            <div
              key={value.id}
              css={css`
                display: flex;
                margin-bottom: 24px;
              `}
            >
              <div
                css={css`
                  margin-right: 17px;
                `}
              >
                <Text as="body" size="md" weight="regular">
                  {`${index + 1}`}
                </Text>
              </div>
              <Bar
                count={value.value}
                degree={value.value / totalCount}
                barSize={value.value / mostCount}
                barColor={barRandomColor[index]}
                title={value.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
