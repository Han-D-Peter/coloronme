import { useEffect, useReducer } from 'react';
import { css } from '@emotion/react';

import { useGetUser } from '@/src/query/user/user.queries';
import { useProductOGInfo } from '@/src/query/product/product.queries';
import CenteredLayout from '../../Common/Layout/CenteredLayout';
import ProductImage from '../Component/ProductImage';
import PersonalColorSelection from './Component/Form/PersonalColorSelection';
import ProductTypeSelection from './Component/Form/ProductTypeSelection';
import ProductPlatformForm from './Component/Form/ProductPlatformForm';
import SubmitFormButton from './Component/Form/SubmitFormButton';
import ProductNameForm from './Component/Form/ProductNameForm';
import ColorSelection from './Component/Form/ColorSelection';
import SellLinkForm from './Component/Form/SellLinkForm';
import { initialErrorState, productErrorReducer } from './Component/Reducer/productErrorReducer';
import { productInitialState, productReducer } from './Component/Reducer/productReducer';

const ProductRegisterPage = () => {
  const { data: userData } = useGetUser();
  const { mutate: productOGMutate, data: ogData } = useProductOGInfo();

  const [productState, dispatchProduct] = useReducer(productReducer, productInitialState);
  const [errorState, dispatchError] = useReducer(productErrorReducer, initialErrorState);
  const { urlWarnText, productNameWarnText, platformWarnText, productTypeWarnText, colorPickerErrorMessage } =
    errorState;

  useEffect(() => {
    if (!userData) return;
    dispatchProduct({ type: 'SET_PERSONAL_COLOR_ID', payload: userData.personalColorId });
  }, [userData]);

  if (!userData) return null;

  return (
    <CenteredLayout>
      <ProductImage image={ogData?.image} showBackButton />

      <div css={formStyle}>
        <SellLinkForm
          {...productState}
          ogData={ogData!}
          ogMutate={productOGMutate}
          errorMessage={urlWarnText}
          dispatch={dispatchProduct}
          dispatchError={dispatchError}
        />
        <ProductNameForm {...productState} errorMessage={productNameWarnText} dispatch={dispatchProduct} />
        <ProductPlatformForm {...productState} errorMessage={platformWarnText} dispatch={dispatchProduct} />
        <ColorSelection
          {...productState}
          errorMessage={colorPickerErrorMessage}
          dispatch={dispatchProduct}
          dispatchError={dispatchError}
        />
        <PersonalColorSelection {...productState} dispatch={dispatchProduct} />
        <ProductTypeSelection {...productState} dispatch={dispatchProduct} errorMessage={productTypeWarnText} />
        <SubmitFormButton {...productState} {...errorState} image={ogData?.image ?? ''} dispatchError={dispatchError} />
      </div>
    </CenteredLayout>
  );
};

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 5%;
  margin-top: 5%;
`;

export default ProductRegisterPage;
