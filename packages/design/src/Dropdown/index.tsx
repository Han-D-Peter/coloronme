import { ReactElement, createContext, useCallback, useEffect, useMemo, useState } from 'react';
import DropdownHeader from './components/DropdownHeader';
import DropdownContainer from './components/DropdownContainer';
import DropdownElement from './components/DropdownElement';
import { css } from '@emotion/react';

interface DropdownProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  children: ReactElement<typeof DropdownElement> | ReactElement<typeof DropdownElement>[];
}

export interface DropdownContextValues {
  isOpen: boolean;
  closeContainer: () => void;
  openContainer: () => void;
  toggleContainer: () => void;
  selectedValue?: string;
  placeholder?: string;
  changeHandler: (value: string) => void;
}

export const DropdownContext = createContext<DropdownContextValues | null>(null);

export default function Dropdown({ placeholder = 'select', value, onChange, children }: DropdownProps) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);
  const [isOpen, setIsOpen] = useState(false);

  const closeContainer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openContainer = useCallback(() => {
    setIsOpen(true);
  }, []);
  const toggleContainer = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (onChange && selectedValue) {
      onChange(selectedValue);
    }
  }, [value, selectedValue]);

  const changeHandler = (value: string) => {
    setSelectedValue(value);
  };

  const contextValues = useMemo(() => {
    return {
      selectedValue,
      changeHandler,
      placeholder,
      closeContainer,
      openContainer,
      isOpen,
      toggleContainer,
    };
  }, [selectedValue, placeholder, isOpen, toggleContainer, changeHandler]);

  return (
    <DropdownContext.Provider value={contextValues}>
      <div
        css={css`
          position: relative;
          min-width: 130px;
        `}
      >
        <DropdownHeader />
        {isOpen && <DropdownContainer>{children}</DropdownContainer>}
      </div>
    </DropdownContext.Provider>
  );
}

Dropdown.Element = DropdownElement;
