import { css } from '@emotion/react';
import { color, Text } from '@design';

const ColorSelectText = () => {
  return (
    <div css={titleTextContainer}>
      <Text as="body" size="md">
        컬러피커가 컬러를 추출했어요.
      </Text>
      <div css={titleTextSecondLine}>
        <Text as="body" size="md" weight="bold">
          제품과 어울리는 컬러
        </Text>
        <Text as="body" size="md">
          를 선택해주세요.
        </Text>
        <Text as="body" size="md" style={titleTextCaption}>
          (최대 3개)
        </Text>
      </div>
    </div>
  );
};

const titleTextContainer = css`
  display: flex;
  flex-wrap: wrap;
`;

const titleTextSecondLine = css`
  display: flex;
  flex-wrap: wrap;
`;

const titleTextCaption = css`
  color: ${color.gray.gray030};
`;

export default ColorSelectText;
