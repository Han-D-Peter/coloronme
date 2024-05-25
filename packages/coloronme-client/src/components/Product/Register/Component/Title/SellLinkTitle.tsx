import ToolTip from '@/src/components/Common/ToolTip';
import { css } from '@emotion/react';

import { Text, Question } from '@design';

import PlatformNotice from '../PlatformNotice';

const SellLinkTitle = () => {
  return (
    <div css={platformTextStyle}>
      <Text as="title" size="sm" weight="bold">
        판매처
      </Text>
      <ToolTip content={<PlatformNotice />}>
        <Question width="15" height="15" color="#A4A4A4" />
      </ToolTip>
    </div>
  );
};

const platformTextStyle = css`
  display: flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
`;

export default SellLinkTitle;
