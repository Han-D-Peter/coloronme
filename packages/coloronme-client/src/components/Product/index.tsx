import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { Text, color } from '@design';

import { useProduct } from '@/src/query/product/product.queries';
import { useBooleanState } from '@/src/hooks/useBooleanState';
import { PERSONAL_COLOR_MAPPING, CATEGORY } from '@/src/constants/constants';
import CenteredLayout from '../Common/Layout/CenteredLayout';
import Loading from '../Common/Loading';
import BottomSheet from '../Common/BottomSheet';
import ProductImage from './Component/ProductImage';
import LikeIndicator from './Component/LikeIndicator';
import SelectableButton from './Register/Component/SelectableButton';
import ProductManagement from './Component/ProductManagement';
import SelectColorButton from './Component/SelectColorButton';
import LabeledInputButton from './Component/LabeledInputButton';
import PostOptionsIndicator from './Component/PostOptionsIndicator';

const ProductPage = () => {
  const router = useRouter();
  const productId = router.query.productId;

  const [isBottomSheetShown, onBottomSheetOpen, onBottomSheetClose] = useBooleanState(false);

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
          {data?.name}
        </Text>
        <div css={subContentContainer}>
          <Text as="body" size="sm" style={platFormTextStyle}>
            {data?.platform}
          </Text>

          <div css={SubContentIconContainer}>
            <div css={likeIconContainer}>
              <LikeIndicator isLike={data?.isMyLike} count={data?.likeCount} />
            </div>

            <PostOptionsIndicator isMyPost={data?.isMyPost} onMyPostClick={onBottomSheetOpen} />
          </div>
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
            {data?.color?.map((color: string) => <SelectColorButton key={color} color={color} />)}
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

          {data && <SelectableButton isSelected={true}>{CATEGORY[data?.category]}</SelectableButton>}
        </div>
      </div>

      {isBottomSheetShown && (
        <BottomSheet snapPoints={150} isOpen={isBottomSheetShown} close={onBottomSheetClose}>
          <ProductManagement />
        </BottomSheet>
      )}
    </CenteredLayout>
  );
};

const subContentContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubContentIconContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

const likeIconContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
