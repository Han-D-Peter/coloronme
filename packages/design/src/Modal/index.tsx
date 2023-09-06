import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react';
import Modal from 'react-modal';

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
  style = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      borderRadius: '15px',
      border: '0',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0px 4px 10px 0px rgba(0,0,0,0.25)',
    },
    overlay: {
      background: '#545454ca',
    },
  },
}: {
  children: ReactNode;
  isOpen?: boolean;
  style?: Modal.Styles;
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
      <Modal isOpen={isTrue} style={style} onRequestClose={onCloseModal}>
        {children}
      </Modal>
    </ModalContext.Provider>
  );
}
