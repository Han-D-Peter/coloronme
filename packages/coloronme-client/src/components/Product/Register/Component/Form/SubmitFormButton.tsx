import { usePostProduct } from '@/src/query/product/product.queries';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { Button } from '@design';

import { Product } from '../Reducer/productReducer';

type Props = {
  urlWarnText: string;
  dispatchError: Function;
  image: string;
} & Product;

const SubmitFormButton = ({
  productName,
  platform,
  image,
  productType,
  selectColors,
  personalColorId,
  sellLink,
  urlWarnText,
  validateUrl,
  dispatchError,
}: Props) => {
  const router = useRouter();

  const { mutate: postProductMutate } = usePostProduct();

  const validateProduct = () => {
    dispatchError({ type: 'RESET_WARNINGS' });
    if (!productName) dispatchError({ type: 'SET_PRODUCT_NAME_WARN_TEXT', payload: '*상품명을 입력해주세요.' });
    if (!platform) dispatchError({ type: 'SET_PLATFORM_WARN_TEXT', payload: '*판매처를 입력해주세요.' });
    if (!productType) dispatchError({ type: 'SET_PRODUCT_TYPE_WARN_TEXT', payload: '*상품 유형을 선택해주세요.' });
    if (!sellLink) dispatchError({ type: 'SET_URL_WARN_TEXT', payload: '*판매 링크를 입력해주세요.' });
  };

  const submitProduct = () => {
    validateProduct();

    if (!productName || !platform || !productType || !sellLink || urlWarnText || !image) return;

    if (!validateUrl) {
      return dispatchError({ type: 'SET_URL_WARN_TEXT', payload: '*판매 링크가 수정되었습니다. 다시 확인해주세요.' });
    }

    postProductMutate(
      {
        name: productName,
        color: selectColors,
        platform: [platform],
        sellUrl: sellLink,
        imageUrl: image,
        personalColor: personalColorId,
        category: productType,
      },
      {
        onSuccess: () => {
          router.push('/products');
        },
      },
    );
  };

  return (
    <div css={submitButtonStyle}>
      <Button size="md" fullWidth onClick={submitProduct}>
        등록하기
      </Button>
    </div>
  );
};

const submitButtonStyle = css`
  padding: 6% 8%;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default SubmitFormButton;
