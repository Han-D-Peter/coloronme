import { css } from '@emotion/react';

import { color } from '@design';

import FormSection from '../FormSection';
import { ProductDispatch } from '../Reducer/productReducer';

type Props = {
  productName: string;
  dispatch: ProductDispatch;
  errorMessage: string;
};

const ProductNameForm = ({ productName, dispatch, errorMessage }: Props) => {
  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_PRODUCT_NAME', payload: event.target.value });
  };

  return (
    <FormSection title="상품명" errorMessage={errorMessage}>
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

export default ProductNameForm;
