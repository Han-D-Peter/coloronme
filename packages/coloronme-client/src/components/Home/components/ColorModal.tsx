import Modal from 'react-modal';
import { css } from '@emotion/react';
import Image from 'next/image';
import { parseRGB } from '@/src/utils/parseRGB';
import { ComponentType } from 'react';

type ColorModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  color: {
    rgb: string;
    name: string;
  };
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '92%',
    height: '90%',
    padding: '0',
    borderRadius: '0',
    border: 'none',
  },
  overlay: {
    background: 'rgba(84, 84, 84, 0.80)',
    backdropFilter: 'blur(2px)',
    maxWidth: '600px',
    margin: '0 auto',
    zIndex: '2',
  },
};

const ModalSafeForReact18 = Modal as ComponentType<ReactModal['props']>;

const ColorModal = ({ modalIsOpen, closeModal, color }: ColorModalProps) => {
  return (
    <ModalSafeForReact18
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div css={mainContainer}>
        <div
          css={css`
            width: 100%;
            height: 85%;
            background: ${color.rgb};
          `}
        />
        <div css={textContainer}>
          <div css={colorText}>{color.name}</div>
          <div css={rgbText}>{parseRGB(color.rgb)}</div>
        </div>
        <Image
          src="/images/close.png"
          alt="closeButton"
          width={27}
          height={27}
          css={closeButton}
          onClick={closeModal}
        />
      </div>
    </ModalSafeForReact18>
  );
};

const mainContainer = css`
  width: 100%;
  height: 100%;
  padding: 0;
  position: relative;
`;

const closeButton = css`
  position: absolute;
  top: 14px;
  right: 11px;
  cursor: pointer;
`;

const colorContainer = css`
  width: 100%;
  height: 85%;
  background: #75a0c8;
`;

const textContainer = css`
  margin-top: 13px;
`;

const colorText = css`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #000;
  font-size: 16px;
  font-family: 'Pretendard';

  width: fit-content;
  padding: 0 14px;

  height: 36px;
  border-radius: 30px;
`;

const rgbText = css`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #8e9294;
  text-align: center;
  font-size: 12px;
  font-family: 'Pretendard';

  width: fit-content;
  padding: 0 15px;

  height: 28px;

  border-radius: 30px;
`;

export default ColorModal;
