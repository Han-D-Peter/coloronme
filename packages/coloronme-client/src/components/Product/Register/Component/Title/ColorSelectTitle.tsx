import { css } from '@emotion/react';

import { color, Text } from '@design';

const ColorSelectTitle = () => {
  return (
    <div css={flexStyle}>
      <Text as="title" size="sm" weight="bold">
        퍼스널컬러
      </Text>

      <Text as="caption" size="md" style={captionStyle}>
        *나의 퍼스널컬러가 기본으로 선택돼요
      </Text>
    </div>
  );
};

const flexStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

const captionStyle = css`
  color: ${color.gray.gray040};
`;

export default ColorSelectTitle;
