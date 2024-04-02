import { css } from '@emotion/react';
import { Text } from '../../../../design/src/text';

interface CustomCountDescription {
  customCount: number;
}

export default function CustomCountDescription({ customCount }: CustomCountDescription) {
  return (
    <>
      <div>
        <Text as="title" size="sm" weight="bold">
          고객등록
        </Text>
      </div>
      <div
        css={css`
          margin-top: 44px;
        `}
      >
        <Text as="title" size="sm" weight="bold">
          Today
        </Text>
      </div>
      <div
        css={css`
          margin-top: 19px;
        `}
      >
        <Text
          as="body"
          size="md"
          style={css`
            margin-bottom: 0;
          `}
        >
          컬러온미를 통해
        </Text>
        <div
          css={css`
            display: flex;
            align-items: center;
            margin-bottom: 26px;
          `}
        >
          <Text
            as="body"
            size="md"
            weight="bold"
            style={css`
              margin: 0;
              padding: 0;
            `}
          >
            {`${customCount}명`}
          </Text>
          <Text
            as="body"
            size="md"
            style={css`
              margin: 0;
              padding: 0;
            `}
          >
            의 고객에게 진단 결과를 공유했어요
          </Text>
        </div>
      </div>
    </>
  );
}
