import { createContext, ReactNode, useContext } from 'react';

interface TabsContextType {
  selectedKey: string;
  changeKey: (key: string) => void;
  tabStacks: {
    [key: string]: ReactNode;
  };
}

export const TabsContext = createContext<TabsContextType | null>(null);
TabsContext.displayName = 'TabsContext';

const useTabs = () => {
  const context = useContext(TabsContext) as TabsContextType;

  const { selectedKey, tabStacks, changeKey } = context;

  return { selectedKey, tabStacks, changeKey } as const;
};

export default useTabs;
