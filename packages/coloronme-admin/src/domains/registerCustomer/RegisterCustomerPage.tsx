import { css } from '@emotion/react';
import { Text, color } from '@design';

export default function RegisterCustomerPage() {
  return (
    <section
      css={css`
        padding-top: 48px;
      `}
    >
      <div>
        <Text as="title" size="sm" weight="bold">
          진단 결과 공유
        </Text>
      </div>
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-top: 27px;
        `}
      >
        <div
          css={css`
            width: 57px;
            height: 57px;
            background-color: green;
            border-radius: 200px;
          `}
        ></div>
        <div
          css={css`
            margin-left: 15px;
            margin-bottom: 10px;
          `}
        >
          <div>
            <Text as="title" size="sm" weight="bold">
              맹꽁이
            </Text>
          </div>
          <div>
            <Text
              as="body"
              size="sm"
              style={css`
                color: ${color.gray.gray050};
              `}
            >
              abcdefg@naver.com
            </Text>
          </div>
        </div>
      </div>
      <div
        css={css`
          margin-top: 35px;
        `}
      >
        <div>
          <Text as="title" size="xlg" weight="bold">
            진단일
          </Text>
        </div>
        <div
          css={css`
            margin-top: 22px;
          `}
        >
          <Text as="body" size="md">
            2023. 08. 13 12:30
          </Text>
        </div>
      </div>
      <div
        css={css`
          margin-top: 42px;
        `}
      >
        <div>
          <Text as="title" size="xlg" weight="bold">
            퍼스널컬러 타입
          </Text>
        </div>
        <div
          css={css`
            margin-top: 18px;
          `}
        ></div>
      </div>
    </section>
  );
}
