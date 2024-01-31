import { css } from '@emotion/react';
import TabsTitle from './TabsTitle';
import useTabs from './useTabs';

const tabsHeaderContainerStyle = css`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-radius: 7px 7px 0 0;
`;

export default function TabsHeader() {
  const { selectedKey, tabStacks, changeKey } = useTabs();

  return (
    <ul
      css={css`
        padding: 0;
        margin: 0;
      `}
    >
      <div css={tabsHeaderContainerStyle}>
        {Object.keys(tabStacks).map((key) => {
          if (selectedKey === key) {
            return (
              <TabsTitle key={key} selected onClick={changeKey}>
                {key}
              </TabsTitle>
            );
          }
          return (
            <TabsTitle key={key} onClick={changeKey}>
              {key}
            </TabsTitle>
          );
        })}
      </div>
    </ul>
  );
}
