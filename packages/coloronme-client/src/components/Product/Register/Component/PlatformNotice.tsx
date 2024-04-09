import { css } from '@emotion/react';
import { Text } from '@design';

const PlatformNotice = () => {
  return (
    <div css={textContainer}>
      <Text as="caption" size="md">
        아래에 해당하는 플랫폼의 링크를 등록하면 판매처가 자동으로 추가돼요
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
