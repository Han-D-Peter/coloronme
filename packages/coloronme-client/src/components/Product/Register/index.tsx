import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { Text, color, Question, Button, PlusOutline } from '@design';
import { CATEGORY, PERSONAL_COLOR_MAPPING } from '@/src/constants/constants';
import ToolTip from '../../Common/ToolTip';
import ProductImage from '../Component/ProductImage';
import PlatformNotice from './Component/PlatformNotice';
import SelectableButton from './Component/SelectableButton';
import SelectColorButton from '../Component/SelectColorButton';
import CenteredLayout from '../../Common/Layout/CenteredLayout';
import LabeledInputButton from '../Component/LabeledInputButton';
import { useGetUser } from '@/src/query/user/user.queries';
import { usePostProduct, useProductOGInfo } from '@/src/query/product/product.queries';
import { useColor } from 'color-thief-react';
import { useBooleanState } from '@/src/hooks/useBooleanState';
import Colorful from '@uiw/react-color-colorful';
//https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-colorful/file/README.md

type ProductType = '아우터' | '상의' | '하의' | '원피스/세트' | '주얼리' | '패션소품';
const productTypes: ProductType[] = ['아우터', '상의', '하의', '원피스/세트', '주얼리', '패션소품'];

// 판매 링크 등록 후 클릭
const ProductRegisterPage = () => {
  const { data } = useGetUser();

  const { mutate: productOGMutate, data: ogData } = useProductOGInfo();
  const { mutate: postProductMutate } = usePostProduct();
  const { data: colorData } = useColor(ogData?.image, 'hex', { crossOrigin: 'Anonymous' });

  const [isShownColorPicker, onOpenColorPicker, onClose, onToggleColorPicker] = useBooleanState(false);
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });

  // const onColorPickerInfoChange = (color) => {
  //   console.log('Main Color Change', color);
  // };

  useEffect(() => {
    console.log('isShownColorPicker', isShownColorPicker);
  }, [isShownColorPicker]);

  useEffect(() => {
    console.log('data', data);
    console.log('urlData', ogData);
  }, [data, ogData]);

  const [sellLink, setSellLink] = useState('https://zigzag.kr/catalog/products/131358195');

  useEffect(() => {
    console.log('colorData', colorData);
  }, [colorData, ogData]);

  const [personalColorId, setPersonalColorId] = useState(0);
  const [productType, setProductType] = useState<ProductType>();

  const [productName, setProductName] = useState('');
  const [platform, setPlatform] = useState('');

  const submitSellLink = () => {
    productOGMutate({ url: sellLink });
  };

  useEffect(() => {
    console.log('productName', productName);
  }, [productName]);

  const findCategoryKeyByValue = (value: string) => {
    const entries = Object.entries(CATEGORY);
    for (let [key, val] of entries) {
      if (val === value) {
        return key;
      }
    }
    return null;
  };

  const submitProduct = () => {
    if (!data) return;
    if (!productType) return;
    const keyForCategory = findCategoryKeyByValue(productType) || '';

    console.log('submit');
    postProductMutate({
      name: productName,
      color: [`${colorData}`],
      platform: [platform],
      sellUrl: sellLink,
      imageUrl: ogData.image,
      personalColor: personalColorId,
      category: keyForCategory,
    });
  };

  useEffect(() => {
    if (!data) return;

    setPersonalColorId(data?.personalColorId);
  }, [data]);

  useEffect(() => {
    if (!ogData) return;

    setProductName(ogData?.name);
    setPlatform(ogData?.platform);
  }, [ogData]);

  if (!data) return null;

  return (
    <CenteredLayout>
      <ProductImage image={ogData?.image ?? '/images/greenT.png'} showBackButton />

      <div css={formStyle}>
        <LabeledInputButton
          value={sellLink}
          onChange={(e) => setSellLink(e.target.value)}
          buttonText="확인"
          fullWidth
          onClick={submitSellLink}
        >
          <Text as="title" size="sm" weight="bold">
            판매 링크
          </Text>
        </LabeledInputButton>
        <LabeledInputButton
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          buttonText="수정"
          fullWidth
        >
          <Text as="title" size="sm" weight="bold">
            제품명 수정
          </Text>
        </LabeledInputButton>
        <LabeledInputButton value={platform} onChange={(e) => setPlatform(e.target.value)} buttonText="추가" fullWidth>
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
            {isShownColorPicker && (
              <div
                css={css`
                  position: absolute;
                  z-index: 100;
                  /* bottom: 10%; */
                  left: 20%;
                  /* transform: translateX(-50%); X축 기준으로 자신의 크기의 반만큼 왼쪽으로 이동 */
                `}
              >
                <Colorful
                  color={hsva}
                  disableAlpha={true}
                  onChange={(color) => {
                    setHsva(color.hsva);
                  }}
                />
              </div>
            )}
            <SelectColorButton color={color.gray.gray010} onClick={onToggleColorPicker}>
              <PlusOutline width="20" height="20" color={color.gray.gray040} />
            </SelectColorButton>
            {colorData && <SelectColorButton color={colorData} />}
          </div>
        </div>
        {/* <div css={innerContentGapStyle}>
          <Text as="title" size="sm" weight="bold">
            상품 컬러
          </Text>
          <div css={colorBoxContainer}>
            <SelectColorButton color={color.gray.gray010} onClick={onOpenColorPicker}>
              <PlusOutline width="20" height="20" color={color.gray.gray040} />
            </SelectColorButton>
            {colorData && <SelectColorButton color={colorData} />}
          </div>
        </div> */}
        {/* {isShownColorPicker && (
          <Colorful
            css={css`
              z-index: 100;
            `}
            color={hsva}
            disableAlpha={true}
            onChange={(color) => {
              setHsva(color.hsva);
            }}
          />
        )} */}

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
                isSelected={personalColorId === +id}
                onClick={() => setPersonalColorId(+id)}
              >
                {name}
              </SelectableButton>
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
                isSelected={item === productType}
                onClick={() => setProductType(item)}
              >
                {item}
              </SelectableButton>
            ))}
          </div>
        </div>
      </div>
      <div css={submitButtonStyle}>
        <Button size="md" fullWidth onClick={submitProduct}>
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
  position: relative;
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
