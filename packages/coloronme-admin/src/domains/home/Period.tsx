import { css } from '@emotion/react';
import { Text } from '../../../../design/src/text';
import DateRange from '../../../../design/src/DateRange';

interface Period {
  onClick: (date: { start: string; end: string }) => void;
}

export default function Period({ onClick }: Period) {
  return (
    <div
      css={css`
        display: flex;
        margin-top: 46px;
      `}
    >
      <div
        css={css`
          margin-right: 8px;
          width: 50px;
          margin-top: 6px;
        `}
      >
        <Text as="body" size="sm" weight="bold">
          기간설정
        </Text>
      </div>
      <div
        css={css`
          width: 100%;
        `}
      >
        <DateRange onClick={onClick} />
      </div>
    </div>
  );
}
