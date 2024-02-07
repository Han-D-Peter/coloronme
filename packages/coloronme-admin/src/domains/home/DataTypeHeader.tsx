import { css } from '@emotion/react';
import { Text } from '@design';
import { color } from '@design';

export default function DateTypeHeader() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <div>
        <Text as="title" size="sm" weight="bold">
          진단 대시보드
        </Text>
      </div>
      <div>
        <button
          css={css`
            padding: 6px 11px;
            border: none;
            border-radius: 5px;
            background-color: ${color.gray.gray040};
            color: ${color.gray.gray000};
          `}
        >
          <Text as="body" size="sm">
            데이터 전체 조회
          </Text>
        </button>
      </div>
    </div>
  );
}
