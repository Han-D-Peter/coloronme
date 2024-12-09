import { css } from '@emotion/react';
import { Text } from '../text';
import { color } from '../constants';

type Value = { title: string; value: number };

interface PeriodTracking {
  values: Value[];
  height: number;
  width: string;
}

export default function PeriodTracking({ values, height, width }: PeriodTracking) {
  const total = values.reduce(
    (accum, curr) => {
      if (accum[0] < curr.value) {
        accum[0] = curr.value;
      }
      accum[1] = accum[1] + curr.value;
      return accum;
    },
    [0, 0],
  );

  const nomalizedValues = values.map((value) => ({ ...value, height: height * (value.value / total[1]) }));

  return (
    <div
      css={css`
        width: ${width};
        height: ${height}px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      `}
    >
      {nomalizedValues.map((value, index) => (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 11px;
          `}
        >
          <div>
            <Text
              as="body"
              size="md"
              style={
                index + 1 === values.length
                  ? css`
                      color: #cd9de9;
                    `
                  : css`
                      color: #878787;
                    `
              }
            >
              {value.value}
            </Text>
          </div>
          <div
            css={
              index + 1 === values.length
                ? css`
                    width: 14px;
                    height: ${value.height}px;
                    background: linear-gradient(
                      0deg,
                      rgba(196, 161, 216, 1) 0%,
                      rgba(163, 171, 210, 1) 22%,
                      rgba(137, 179, 205, 1) 46%,
                      rgba(255, 243, 171, 1) 94%
                    );
                    border-top-right-radius: 100px;
                    border-top-left-radius: 100px;
                  `
                : css`
                    width: 14px;
                    height: ${value.height}px;
                    background-color: ${color.gray.gray030};
                    border-top-right-radius: 100px;
                    border-top-left-radius: 100px;
                  `
            }
          ></div>
          <div>
            <Text
              as="body"
              size="md"
              style={css`
                color: #878787;
              `}
            >
              {value.title}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
}
