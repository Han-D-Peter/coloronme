import { css } from '@emotion/react';
import { Text } from '../../../../../design/src/text';
import { color } from '../../../../../design/src/constants';

const EmptyProduct = () => {
  return (
    <div css={centerStyle}>
      <Text as="body" size="md" style={warnTextStyle}>
        해당되는 상품이 없어요 🥲
      </Text>
    </div>
  );
};

const centerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - (63px + 150px + 81px));
`;

const warnTextStyle = css`
  color: ${color.gray.gray040};
`;

export default EmptyProduct;
