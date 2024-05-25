import { css } from '@emotion/react';

import { color } from '@design';

import FormSection from '../FormSection';
import SellLinkTitle from '../Title/SellLinkTitle';
import { ProductDispatch } from '../Reducer/productReducer';

type Props = {
  productName: string;
  dispatch: ProductDispatch;
  errorMessage: string;
};

const ProductPlatformForm = ({ productName, dispatch, errorMessage }: Props) => {
  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_PLATFORM', payload: event.target.value });
  };

  return (
    <FormSection title={<SellLinkTitle />} errorMessage={errorMessage}>
      <input css={inputStyle} value={productName} onChange={changeName} />
    </FormSection>
  );
};

const inputStyle = css`
  height: 100%;
  padding: 0;
  height: 28px;
  padding-left: 11px;
  outline: none;
  border-radius: 5px;
  color: ${color.gray.gray040};
  box-sizing: border-box;
  border: 1px solid ${color.gray.gray020};
`;

export default ProductPlatformForm;
