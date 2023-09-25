import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react';
import ModalContainer from './ModalContainer';
import { SxProps, Theme } from '@mui/material';

interface ModalContextValue {
  isOpen: boolean;
  close: () => void;
  open: () => void;
}

export const useModal = () => {
  return useContext(ModalContext) as ModalContextValue;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export default function ModalBox({
  children,
  isOpen = false,
  close,
  open,
  sx = {},
}: {
  children: ReactNode;
  isOpen?: boolean;
  close: () => void;
  open: () => void;
  sx?: SxProps<Theme>;
}) {
  const modalValues = useMemo(() => {
    return {
      isOpen,
      close,
      open,
    };
  }, [close, open, isOpen]);

  return (
    <ModalContext.Provider value={modalValues}>
      <ModalContainer sx={{ ...sx }} isOpen={isOpen} onRequestClose={close}>
        {children}
      </ModalContainer>
    </ModalContext.Provider>
  );
}
