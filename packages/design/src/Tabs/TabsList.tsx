import { css } from '@emotion/react';
import useTabs from './useTabs';
import { color } from '../constants';

export default function TabsList() {
  const { selectedKey, tabStacks } = useTabs();
  return (
    <div
      css={css`
        background: ${color.gray.gray010};
        padding: 7px 24px 7px 24px;
        height: 100%;
        overflow: auto;
      `}
    >
      <div
        css={css`
          width: 100%;
        `}
      >
        {tabStacks[selectedKey]}
      </div>
    </div>
  );
}
