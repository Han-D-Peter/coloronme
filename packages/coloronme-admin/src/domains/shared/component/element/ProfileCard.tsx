import { css } from '@emotion/react';
import { Text, color } from '@design';

interface ProfileCardProps {
  name: string;
  email: string;
  date: string;
  colorType: string;
}

export default function ProfileCard({ name, email, date, colorType }: ProfileCardProps) {
  return (
    <div
      css={css`
        height: 66px;
        padding: 16px 20px;
        border-radius: 15px;
        box-shadow: 0px 2px 5px 2px #ededed;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <div>
            <Text
              as="body"
              size="md"
              weight="bold"
              style={css`
                margin: 0;
                padding: 0;
              `}
            >
              {name}
            </Text>
          </div>
          <div
            css={css`
              margin-left: 5px;
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
              고객님
            </Text>
          </div>
        </div>
        <div
          css={css`
            margin-bottom: 3px;
            margin-left: 14px;
          `}
        >
          <Text
            as="body"
            size="sm"
            style={css`
              margin: 0;
              padding: 0;
              color: ${color.gray.gray050};
            `}
          >
            {email}
          </Text>
        </div>
      </div>
      <div
        css={css`
          margin-top: 20px;
        `}
      >
        <Text
          as="body"
          size="sm"
          style={css`
            margin: 0;
            padding: 0;
          `}
        >
          {date}
        </Text>
      </div>
      <div>
        <Text
          as="body"
          size="sm"
          style={css`
            margin: 0;
            padding: 0;
          `}
        >
          {colorType}
        </Text>
      </div>
    </div>
  );
}
