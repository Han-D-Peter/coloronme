import { css } from '@emotion/react';
import { Text } from '../text';
import { color } from '../constants';

interface Bar {
  /**
   * @description degree는 100을 초과할 수 없음
   */
  degree: number;
  barSize: number;
  count: number;
  barColor: string;
  title: string;
  hasBar?: boolean;
}

export default function Bar({ count, degree, barSize, barColor, title, hasBar = true }: Bar) {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: end;
        `}
      >
        <Text as="body" size="md" weight="regular">{`${title}`}</Text>
        <Text
          as="body"
          size="sm"
          weight="regular"
          style={css`
            margin-left: 5px;
            color: ${color.gray.gray050};
          `}
        >{`${(degree * 100).toFixed(2)}%`}</Text>
        <Text
          as="body"
          size="sm"
          weight="regular"
          style={css`
            margin-left: 5px;
            color: ${color.gray.gray050};
          `}
        >{`(${count})`}</Text>
      </div>
      {hasBar && (
        <div
          css={css`
            margin-top: 7px;
            width: ${barSize * 100}%;
            height: 13px;
            border-radius: 3px;
            background-color: ${barColor};
          `}
        ></div>
      )}
    </div>
  );
}
