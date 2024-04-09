import React from 'react';
import { css } from '@emotion/react';
import { Text } from '@design';

type Props = {
  sortOptions: [string, string][];
  onClick: (option: string) => void;
};

const SortTabContent = ({ sortOptions, onClick }: Props) => {
  return (
    <>
      {sortOptions.map(([key, value], index) => (
        <React.Fragment key={key}>
          <div onClick={() => onClick(key)} css={textStyle}>
            <Text as="body" size="md">
              {value}
            </Text>
          </div>
          {index !== sortOptions.length - 1 && <div css={tabTextDivide} />}
        </React.Fragment>
      ))}
    </>
  );
};

const textStyle = css`
  cursor: pointer;
`;

const tabTextDivide = css`
  width: 93px;
  height: 1px;
  background: #f4f4f4;
`;

export default SortTabContent;
