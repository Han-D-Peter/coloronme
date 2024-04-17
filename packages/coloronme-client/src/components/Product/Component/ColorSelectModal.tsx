import { useState } from 'react';
import { css } from '@emotion/react';

import { Text, CheckmarkOutline, Button, color } from '@design';
import DefaultModal from '../../Common/Modal';

type Props = {
  image: string;
  colorData: string[];
  isOpen: boolean;
  setSelectColors: React.Dispatch<React.SetStateAction<string[]>>;
  closeModal: () => void;
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
    transform: 'translate(-50%, -50%)',

    width: '85vw',
    maxWidth: '340px',
    minHeight: '60vh',

    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '20px',
    padding: '30px',
    overflow: 'hidden',
    borderRadius: '10px',
  },
};

const ColorSelectModal = ({ image, isOpen, setSelectColors, colorData, closeModal }: Props) => {
  const [preSelectColor, setPreSelectColor] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleColor = (color: string) => {
    setErrorMessage('');

    if (preSelectColor.includes(color)) {
      setPreSelectColor(preSelectColor.filter((item) => item !== color));
    } else {
      if (preSelectColor.length >= 3) return;
      setPreSelectColor([...preSelectColor, color]);
    }
  };

  const submitColor = () => {
    if (preSelectColor.length === 0) {
      return setErrorMessage('컬러를 선택해주세요.');
    }

    setSelectColors(preSelectColor);
    closeModal();
  };

  return (
    <DefaultModal style={modalStyles} isOpen={isOpen} ariaHideApp={false}>
      <div css={titleTextContainer}>
        <Text as="body" size="md">
          컬러피커가 컬러를 추출했어요.
        </Text>
        <div css={titleTextSecondLine}>
          <Text as="body" size="md" weight="bold">
            제품과 어울리는 컬러
          </Text>
          <Text as="body" size="md">
            를 선택해주세요.
          </Text>
          <Text as="body" size="md" style={titleTextCaption}>
            (최대 3개)
          </Text>
        </div>
      </div>

      <img src={image ?? '/images/defaultProduct.png'} alt="productImage" css={imgStyle} />

      <div css={colorContainer}>
        {colorData?.map((color) => {
          const isSelected = preSelectColor.includes(color);

          return (
            <div
              key={color}
              css={css`
                ${colorStyle}
                background-color: ${color ?? '#fff'};
              `}
              onClick={() => toggleColor(color)}
            >
              {isSelected && <CheckmarkOutline color="#fff" width="24" height="24" />}
            </div>
          );
        })}
      </div>

      <div css={bottomSectionStyle}>
        <Text as="caption" size="md" style={errorMessageStyle}>
          {errorMessage}
        </Text>
        <div css={managementButtonContainer}>
          <Button variant="ghost" onClick={closeModal}>
            닫기
          </Button>
          <Button onClick={submitColor}>저장</Button>
        </div>
      </div>
    </DefaultModal>
  );
};

const titleTextContainer = css`
  display: flex;
  flex-wrap: wrap;
`;

const titleTextSecondLine = css`
  display: flex;
  flex-wrap: wrap;
`;

const titleTextCaption = css`
  color: ${color.gray.gray030};
`;

const imgStyle = css`
  width: 100%;
  height: 270px;
  border-radius: 8px;
`;

const colorContainer = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;

const colorStyle = css`
  width: 55px;
  height: 55px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const errorMessageStyle = css`
  color: ${color.red.red100};
  height: 12px;
  margin-left: 10px;
`;

const bottomSectionStyle = css`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const managementButtonContainer = css`
  display: flex;
  gap: 10px;
`;

export default ColorSelectModal;
