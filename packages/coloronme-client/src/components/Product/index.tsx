import { useState } from 'react';
import { css } from '@emotion/react';
import { Text, color, PlusOutline } from '@design';
import { PERSONAL_COLOR_MAPPING } from '@/src/constants/constants';
import CenteredLayout from '../Common/Layout/CenteredLayout';
import ProductImage from './Component/ProductImage';
import LabeledInputButton from './Component/LabeledInputButton';
import SelectColorButton from './Component/SelectColorButton';
import SelectableButton from './Register/Component/SelectableButton';

type ProductType = '아우터' | '상의' | '하의' | '원피스/세트' | '주얼리' | '패션소품';
const productTypes: ProductType[] = ['아우터', '상의', '하의', '원피스/세트', '주얼리', '패션소품'];

const myColorId = '1';
const selectedItemType = '아우터';

const ProductPage = () => {
  const [saleLink, setSaleLink] = useState('http://www.abcdefg.com');

  return (
    <CenteredLayout>
      <ProductImage image="/images/greenT.png" />

      <div css={productTitleContainer}>
        <Text as="title" size="md" weight="bold">
          그린 맨투맨 트레이닝복 세트
        </Text>
        <div>
          <Text as="body" size="sm" style={platFormTextStyle}>
            지그재그
          </Text>
        </div>
      </div>
      <div css={dividerStyle} />

      <div css={formStyle}>
        <LabeledInputButton value={saleLink} buttonText="이동" fullWidth>
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

          <div css={colorButtonContainerStyle}>
            {Object.entries(PERSONAL_COLOR_MAPPING).map(([id, { code, name }]) => (
              <SelectableButton key={id} id={id} isSelected={myColorId === id} label={name} />
            ))}
          </div>
        </div>

        <div css={innerContentGapStyle}>
          <Text as="title" size="sm" weight="bold">
            상품 유형
          </Text>

          <div css={colorButtonContainerStyle}>
            {productTypes.map((item, index) => (
              <SelectableButton key={index} id={index.toString()} isSelected={item === selectedItemType} label={item} />
            ))}
          </div>
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

const flexStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

const gapSmStyle = css`
  gap: 5px;
`;

const flexMdStyle = css`
  ${flexStyle}
  ${gapSmStyle}
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

const captionStyle = css`
  color: ${color.gray.gray040};
`;

const colorButtonContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export default ProductPage;
