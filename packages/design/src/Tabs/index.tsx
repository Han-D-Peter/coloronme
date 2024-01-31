import { ReactNode, useMemo, useState } from 'react';
import TabsHeader from './TabsHeader';
import TabsList from './TabsList';
import { TabsContext } from './useTabs';
import { Box } from '@mui/material';

interface TabsContainer {
  /**
   * 제일 첫줄에 입력된 값이 기본 값이 됩니다.
   */
  tabStacks?: {
    [key: string]: ReactNode;
  };
}

export default function TabsContainer({
  tabStacks = {
    '고객 정보': <div>first</div>,
    '진단 결과 공유 현황': <div>second</div>,
  },
}: TabsContainer) {
  const [selectedKey, setSelectedKey] = useState(Object.keys(tabStacks)[0]);

  const changeKey = (key: string) => {
    setSelectedKey(key);
  };

  const providerValues = useMemo(() => ({ tabStacks, selectedKey, changeKey }), [tabStacks, selectedKey, changeKey]);

  return (
    <TabsContext.Provider value={providerValues}>
      <Box sx={{ width: '100%', margin: 0 }}>
        <TabsHeader />
        <TabsList />
      </Box>
    </TabsContext.Provider>
  );
}

TabsContainer.Header = TabsHeader;
TabsContainer.List = TabsList;
