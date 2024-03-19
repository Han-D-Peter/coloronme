import { css } from '@emotion/react';
import { Text } from '@design';

const PlatformNotice = () => {
  return (
    <div css={textContainer}>
      <Text as="caption" size="md">
        아래에 해당하는 플랫폼이 판매처로 적용될 경우, 실제 쇼핑몰을 추가할 수 있어요
      </Text>

      <Text as="caption" size="md" weight="bold">
        * 지그재그, 무신사, 29cm, 브랜디, 에이블리
      </Text>
    </div>
  );
};

const textContainer = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 210px;
`;

export default PlatformNotice;
