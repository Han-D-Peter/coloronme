import { css } from '@emotion/react';
import { color, Text } from '@design';

export default function Tag({ children }: { children: string }) {
  return (
    <div
      css={css`
        width: 80px;
        height: 32px;
        border-radius: 30px;
        border: none;
        background-color: ${color.gray.gray010};
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Text
        as="body"
        size="md"
        weight="regular"
        style={css`
          color: ${color.gray.gray050};
        `}
      >
        {`#${children}`}
      </Text>
    </div>
  );
}
