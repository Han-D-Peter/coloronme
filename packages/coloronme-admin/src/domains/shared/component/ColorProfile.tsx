import { css } from '@emotion/react';
import { Text, color } from '@design';

interface ColorProfile {
  name: string;
  code: { r: number; g: number; b: number };
}

export default function ColorProfile({ name, code }: ColorProfile) {
  return (
    <div>
      <div>
        <Text as="body" size="sm">
          {name}
        </Text>
      </div>
      <div
        css={css`
          margin-top: 7px;
          width: 129px;
          height: 20px;
          border-radius: 5px;
          background-color: rgb(${code.r}, ${code.g}, ${code.b});
        `}
      ></div>
      <div
        css={css`
          margin-top: 4px;
          display: flex;
        `}
      >
        <div>
          <Text
            as="caption"
            weight="regular"
            size="md"
            style={css`
              color: ${color.gray.gray030};
            `}
          >
            {`R : ${code.r} `}
          </Text>
        </div>
        <div
          css={css`
            margin-left: 6px;
          `}
        >
          <Text
            as="caption"
            weight="regular"
            size="md"
            style={css`
              color: ${color.gray.gray030};
            `}
          >{`G : ${code.g}`}</Text>
        </div>
        <div
          css={css`
            margin-left: 6px;
          `}
        >
          <Text
            as="caption"
            weight="regular"
            size="md"
            style={css`
              color: ${color.gray.gray030};
            `}
          >{`B : ${code.b}`}</Text>
        </div>
      </div>
    </div>
  );
}
