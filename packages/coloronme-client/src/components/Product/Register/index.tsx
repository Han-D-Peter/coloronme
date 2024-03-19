import { useState } from 'react';
import { css } from '@emotion/react';
import { Text, color, Question, Button, PlusOutline } from '@design';
import { PERSONAL_COLOR_MAPPING } from '@/src/constants/constants';
import ToolTip from '../../Common/ToolTip';
import ProductImage from '../Component/ProductImage';
import PlatformNotice from './Component/PlatformNotice';
import SelectableButton from './Component/SelectableButton';
import SelectColorButton from '../Component/SelectColorButton';
import CenteredLayout from '../../Common/Layout/CenteredLayout';
import LabeledInputButton from '../Component/LabeledInputButton';

// 상품 상세 페이지
// 상품 등록 페이지
// 상품 수정 페이지
// 비슷함  같이 사용 할 수 있게 컴포넌트 분리

type ProductType = '아우터' | '상의' | '하의' | '원피스/세트' | '주얼리' | '패션소품';
const productTypes: ProductType[] = ['아우터', '상의', '하의', '원피스/세트', '주얼리', '패션소품'];

const myColorId = '1';
const selectedItemType = '아우터';

const ProductRegisterPage = () => {
  const [saleLink, setSaleLink] = useState('http://www.abcdefg.com');
  const [editProductName, setEditProductName] = useState('그린 맨투맨');
  const [editPlatform, setEditPlatform] = useState('지그재그');

  const clickColor = (code: string, name: string, id: number) => {
    console.log(code, name, id);
  };

  const changeProductType = (type: ProductType) => {
    console.log(type);
  };

  return (
    <CenteredLayout>
      <ProductImage image="/images/greenT.png" />

      <div css={formStyle}>
        <LabeledInputButton value={saleLink} onChange={(e) => setSaleLink(e.target.value)} buttonText="확인" fullWidth>
          <Text as="title" size="sm" weight="bold">
            판매 링크
          </Text>
        </LabeledInputButton>

        <LabeledInputButton
          value={editProductName}
          onChange={(e) => setEditProductName(e.target.value)}
          buttonText="수정"
          fullWidth
        >
          <Text as="title" size="sm" weight="bold">
            제품명 수정
          </Text>
        </LabeledInputButton>

        <LabeledInputButton
          value={editPlatform}
          onChange={(e) => setEditPlatform(e.target.value)}
          buttonText="추가"
          fullWidth
        >
          <div css={platformTextStyle}>
            <Text as="title" size="sm" weight="bold">
              판매처 추가
            </Text>
            <ToolTip content={<PlatformNotice />}>
              <Question width="15" height="15" color="#A4A4A4" />
            </ToolTip>
          </div>
        </LabeledInputButton>

        <div css={innerContentGapStyle}>
          <Text as="title" size="sm" weight="bold">
            상품 컬러
          </Text>
          <div css={colorBoxContainer}>
            <SelectColorButton color={color.gray.gray010}>
              <PlusOutline width="20" height="20" color={color.gray.gray040} />
            </SelectColorButton>
            <SelectColorButton color="#556B68" />
          </div>
        </div>

        <div css={innerContentGapStyle}>
          <div css={flexMdStyle}>
            <Text as="title" size="sm" weight="bold">
              퍼스널컬러
            </Text>

            <Text as="caption" size="md" style={captionStyle}>
              *나의 퍼스널컬러가 기본으로 선택돼요
            </Text>
          </div>

          <div css={colorButtonContainerStyle}>
            {Object.entries(PERSONAL_COLOR_MAPPING).map(([id, { code, name }]) => (
              <SelectableButton
                key={id}
                id={id}
                isSelected={myColorId === id}
                label={name}
                onClick={() => clickColor(code, name, +id)}
              />
            ))}
          </div>
        </div>

        <div css={innerContentGapStyle}>
          <Text as="title" size="sm" weight="bold">
            상품 유형
          </Text>

          <div css={colorButtonContainerStyle}>
            {productTypes.map((item, index) => (
              <SelectableButton
                key={index}
                id={index.toString()}
                isSelected={item === selectedItemType}
                label={item}
                onClick={() => changeProductType(item)}
              />
            ))}
          </div>
        </div>
      </div>
      <div css={submitButtonStyle}>
        <Button size="md" fullWidth>
          등록하기
        </Button>
      </div>
    </CenteredLayout>
  );
};

const flexStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

const gapSmStyle = css`
  gap: 5px;
`;

const gapMdStyle = css`
  gap: 10px;
`;

const flexSmStyle = css`
  ${flexStyle}
  ${gapMdStyle}
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
`;

const platformTextStyle = css`
  display: flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
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

const submitButtonStyle = css`
  padding: 10% 8%;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default ProductRegisterPage;
