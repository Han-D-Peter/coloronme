import { css } from '@emotion/react';

import { CATEGORY_ENTRIES } from '@/src/constants/constants';
import { ProductDispatch } from '../Reducer/productReducer';
import SelectableButton from '../SelectableButton';
import FormSection from '../FormSection';

type Props = {
  productType: null | string;
  errorMessage: string;
  dispatch: ProductDispatch;
};

const ProductTypeSelection = ({ productType, errorMessage, dispatch }: Props) => {
  return (
    <FormSection title="상품 유형" errorMessage={errorMessage}>
      <div css={colorButtonContainerStyle}>
        {CATEGORY_ENTRIES.map(([key, value], index) => (
          <SelectableButton
            key={index}
            id={index.toString()}
            isSelected={key === productType}
            onClick={() => dispatch({ type: 'SET_PRODUCT_TYPE', payload: key })}
          >
            {value}
          </SelectableButton>
        ))}
      </div>
    </FormSection>
  );
};

const colorButtonContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export default ProductTypeSelection;
