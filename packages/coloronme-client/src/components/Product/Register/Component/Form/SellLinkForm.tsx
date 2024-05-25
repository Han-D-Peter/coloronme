import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import { usePalette } from 'color-thief-react';
import { AxiosError } from 'axios';

import { Text } from '@design';

import { OGInfo } from '@/src/query/product/product.model';
import { useBooleanState } from '@/src/hooks/useBooleanState';
import ColorSelectModal from '../../../Component/ColorSelectModal/ColorSelectModal';
import LabeledInputButton from '../../../Component/LabeledInputButton';
import { ErrorDispatch } from '../Reducer/productErrorReducer';
import { ProductDispatch } from '../Reducer/productReducer';

const COLOR_COUNT = 8;
const COLOR_FORMAT = 'hex';

type Error = {
  [key: number]: string;
};

const responseError: Error = {
  500: '*유효하지 않은 링크입니다.',
  403: '*안전하지 않은 링크입니다.',
  409: '*이미 등록된 상품입니다.',
};

type Props = {
  ogData: OGInfo;
  ogMutate: Function;
  sellLink: string;
  validateUrl: boolean;
  errorMessage: string;
  dispatch: ProductDispatch;
  dispatchError: ErrorDispatch;
};

const SellLinkForm = ({ ogData, ogMutate, sellLink, validateUrl, errorMessage, dispatch, dispatchError }: Props) => {
  const { data: colorData } = usePalette(ogData?.image ?? '', COLOR_COUNT, COLOR_FORMAT, { crossOrigin: 'Anonymous' });

  const [colorSelectModalShown, onColorSelectModalOpen, onColorSelectModalClose] = useBooleanState();

  const changeSellLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_SELL_LINK', payload: e.target.value });
    dispatch({ type: 'SET_VALIDATE_URL', payload: false });
    dispatchError({ type: 'RESET_WARNINGS' });
  };

  const submitSellLink = () => {
    if (!sellLink) {
      return dispatchError({ type: 'SET_URL_WARN_TEXT', payload: '*판매 링크를 입력해주세요.' });
    }
    3;
    ogMutate(
      { url: sellLink },
      {
        onSuccess: () => {
          dispatch({ type: 'SET_VALIDATE_URL', payload: true });
          onColorSelectModalOpen();
        },
        onError: (error: AxiosError) => {
          const errorStatus = error?.response?.status;

          if (errorStatus && responseError[errorStatus]) {
            return dispatchError({ type: 'SET_URL_WARN_TEXT', payload: responseError[errorStatus] });
          }
          dispatchError({ type: 'SET_URL_WARN_TEXT', payload: '*다시 시도해주세요.' });
        },
      },
    );
  };

  useEffect(() => {
    if (!ogData) return;
    dispatch({ type: 'SET_PRODUCT_NAME', payload: ogData?.name });
    dispatch({ type: 'SET_PLATFORM', payload: ogData?.platform });
  }, [ogData]);

  useEffect(() => {
    if (!colorData) return;
    dispatch({ type: 'RECOMMEND_COLOR', payload: colorData });
  }, [colorData]);

  return (
    <div css={formContainerStyle}>
      <LabeledInputButton
        value={sellLink}
        onChange={changeSellLink}
        buttonText="확인"
        fullWidth
        onClick={submitSellLink}
        errorMessage={errorMessage}
        disabled={validateUrl}
      >
        <Text as="title" size="sm" weight="bold">
          판매 링크
        </Text>
      </LabeledInputButton>

      {colorSelectModalShown && ogData?.image && colorData && (
        <ColorSelectModal
          isOpen={colorSelectModalShown}
          image={ogData?.image}
          colorData={colorData}
          setSelectColors={(color) => dispatch({ type: 'ADD_COLOR', payload: color })}
          closeModal={onColorSelectModalClose}
        />
      )}
    </div>
  );
};

const formContainerStyle = css`
  display: flex;
  flex-direction: column;
`;

export default SellLinkForm;
