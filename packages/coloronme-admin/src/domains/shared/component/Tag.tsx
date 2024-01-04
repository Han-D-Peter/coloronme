import { css } from '@emotion/react';
import { color } from '../../../../../design/src/constants';
import { Text } from '../../../../../design/src/text';

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
        size="lg"
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
