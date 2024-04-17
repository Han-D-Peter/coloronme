import { ComponentType, CSSProperties, ReactNode } from 'react';
import Modal from 'react-modal';

const ModalSafeForReact18 = Modal as ComponentType<ReactModal['props']>;

type Props = {
  isOpen: boolean;
  onClose?: () => void;
  ariaHideApp?: boolean;
  style?: { overlay?: CSSProperties; content?: CSSProperties };
  children: ReactNode;
};

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(84, 84, 84, 0.8)',
    zIndex: 10,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
  },
};

const DefaultModal = ({ isOpen, ariaHideApp = false, onClose, style, children }: Props) => {
  return (
    <ModalSafeForReact18
      style={{
        overlay: { ...modalStyles.overlay, ...style?.overlay },
        content: { ...modalStyles.content, ...style?.content },
      }}
      isOpen={isOpen}
      ariaHideApp={ariaHideApp}
      onRequestClose={onClose}
    >
      <>{children}</>
    </ModalSafeForReact18>
  );
};

export default DefaultModal;
