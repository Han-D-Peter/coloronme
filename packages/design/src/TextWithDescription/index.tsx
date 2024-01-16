import { useState } from 'react';
import { Question } from '../assets/icons/Question';
import { Text } from '../text';
import { css } from '@emotion/react';

interface TextWithDescription {
  children: string;
  description?: string;
}

export default function TextWithDescription({ children, description }: TextWithDescription) {
  const [state, setState] = useState(false);

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <div
        css={css`
          position: relative;
          margin-right: 8px;
        `}
      >
        <Text as="title" size="sm" weight="bold">
          {children}
        </Text>
        {state && (
          <div
            css={css`
              z-index: 10000;
              background-color: rgb(103, 103, 103);
              position: absolute;
              top: 30px;
              min-width: 100%;
              padding: 10px 21px;
              color: white;
              border-radius: 10px;
              white-space: nowrap;
              font-size: 12px;
            `}
          >
            {description}
          </div>
        )}
      </div>
      <div
        onMouseEnter={() => setState(true)}
        onMouseLeave={() => setState(false)}
        onClick={() => setState(true)}
        css={css`
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1px;
        `}
      >
        <Question width="16" height="16" color="#A4A4A4" />
        {state && (
          <div
            css={css`
              position: absolute;
              top: 20px;
              width: 0px;
              height: 0px;
              border-bottom: 14px solid rgb(103, 103, 103);
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
            `}
          ></div>
        )}
      </div>
    </div>
  );
}
