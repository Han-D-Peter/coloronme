import { css } from '@emotion/react';
import { Text } from '../text';
import { color } from '../constants';

interface Bar {
  /**
   * @description degree는 100을 초과할 수 없음
   */
  degree: number;
  count: number;
  barColor: string;
  title: string;
}

export default function Bar({ count, degree, barColor, title }: Bar) {
  return (
    <div>
      <div
        css={css`
          display: flex;
        `}
      >
        <Text as="body" size="xlg" weight="regular">{`${title}`}</Text>
        <Text
          as="body"
          size="xlg"
          weight="regular"
          style={css`
            margin-left: 5px;
            color: ${color.gray.gray050};
          `}
        >{`(${(degree * 100).toFixed(2)}%)`}</Text>
      </div>
      <div
        css={css`
          margin-top: 7px;
          width: ${degree * 100}%;
          height: 13px;
          border-radius: 3px;
          background-color: ${barColor};
        `}
      ></div>
    </div>
  );
}
