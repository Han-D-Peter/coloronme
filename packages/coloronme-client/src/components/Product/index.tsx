import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { Text, color } from '@design';
import { useProduct } from '@/src/query/product/product.queries';
import { PERSONAL_COLOR_MAPPING, category } from '@/src/constants/constants';
import CenteredLayout from '../Common/Layout/CenteredLayout';
import ProductImage from './Component/ProductImage';
import LabeledInputButton from './Component/LabeledInputButton';
import SelectColorButton from './Component/SelectColorButton';
import SelectableButton from './Register/Component/SelectableButton';
import Loading from '../Common/Loading';

const ProductPage = () => {
  const router = useRouter();
  const productId = router.query.productId;

  const { data } = useProduct(Number(productId));

  const redirectToSaleLink = (url: string) => {
    router.push(url);
  };

  if (!data) return <Loading />;

  return (
    <CenteredLayout>
      <ProductImage image={data?.imageUrl} showBackButton />

      <div css={productTitleContainer}>
        <Text as="title" size="md" weight="bold">
          {data?.name ?? ''}
        </Text>
        <div>
          <Text as="body" size="sm" style={platFormTextStyle}>
            {data?.platform ?? ''}
          </Text>
        </div>
      </div>
      <div css={dividerStyle} />

      <div css={formStyle}>
        <LabeledInputButton
          value={data?.sellUrl}
          buttonText="이동"
          fullWidth
          onClick={() => redirectToSaleLink(data?.sellUrl)}
        >
          <Text as="title" size="sm" weight="bold">
            판매 링크
          </Text>
        </LabeledInputButton>

        <div css={innerContentGapStyle}>
          <Text as="title" size="sm" weight="bold">
            상품 컬러
          </Text>
          <div css={colorBoxContainer}>
            <SelectColorButton color="#556B68" />
          </div>
        </div>

        <div css={innerContentGapStyle}>
          <Text as="title" size="sm" weight="bold">
            퍼스널컬러
          </Text>

          {data && (
            <SelectableButton isSelected={true}>{PERSONAL_COLOR_MAPPING[data?.personalColor]?.name}</SelectableButton>
          )}
        </div>

        <div css={innerContentGapStyle}>
          <Text as="title" size="sm" weight="bold">
            상품 유형
          </Text>

          {data && <SelectableButton isSelected={true}>{category[data?.category]}</SelectableButton>}
        </div>
      </div>
    </CenteredLayout>
  );
};

const productTitleContainer = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 5%;
`;

const platFormTextStyle = css`
  color: ${color.gray.gray030};
`;

const dividerStyle = css`
  width: 100%;
  height: 8px;
  background-color: ${color.gray.gray010};
`;

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 38px;
  padding: 0 5%;

  margin-top: 5%;
  padding-bottom: 5%;
`;

const innerContentGapStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const colorBoxContainer = css`
  display: flex;
  gap: 10px;
`;

export default ProductPage;
