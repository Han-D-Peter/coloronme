import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react';
import ModalContainer from './ModalContainer';
import { SxProps, Theme } from '@mui/material';

interface ModalContextValue {
  isTrue: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

export const useModal = () => {
  return useContext(ModalContext) as ModalContextValue;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export default function ModalBox({
  children,
  isOpen = false,
  sx = {},
}: {
  children: ReactNode;
  isOpen?: boolean;
  sx?: SxProps<Theme>;
}) {
  const [isTrue, setIsTrue] = useState(isOpen);

  const onCloseModal = useCallback(() => {
    setIsTrue(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsTrue(true);
  }, []);

  const modalValues = useMemo(() => {
    return {
      isTrue,
      onCloseModal,
      onOpenModal,
    };
  }, [isTrue, onCloseModal, onOpenModal]);

  return (
    <ModalContext.Provider value={modalValues}>
      <ModalContainer sx={{ ...sx }} isOpen={isTrue} onRequestClose={onCloseModal}>
        {children}
      </ModalContainer>
    </ModalContext.Provider>
  );
}
