import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { Sketch } from '@uiw/react-color';
import { useColor } from 'color-thief-react';

import { Text, color, Question, Button, PlusOutline } from '@design';

import { useGetUser } from '@/src/query/user/user.queries';
import { useBooleanState } from '@/src/hooks/useBooleanState';
import { CATEGORY, PERSONAL_COLOR_MAPPING } from '@/src/constants/constants';
import { usePostProduct, useProductOGInfo } from '@/src/query/product/product.queries';
import ToolTip from '../../Common/ToolTip';
import ProductImage from '../Component/ProductImage';
import PlatformNotice from './Component/PlatformNotice';
import SelectableButton from './Component/SelectableButton';
import SelectColorButton from '../Component/SelectColorButton';
import CenteredLayout from '../../Common/Layout/CenteredLayout';
import LabeledInputButton from '../Component/LabeledInputButton';
//https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-colorful/file/README.md

type ProductType = '아우터' | '상의' | '하의' | '원피스/세트' | '주얼리' | '패션소품';
const productTypes: ProductType[] = ['아우터', '상의', '하의', '원피스/세트', '주얼리', '패션소품'];

const ProductRegisterPage = () => {
  const router = useRouter();

  const { data } = useGetUser();
  const { mutate: productOGMutate, data: ogData } = useProductOGInfo();
  const { mutate: postProductMutate } = usePostProduct();
  const { data: colorData } = useColor(ogData?.image ?? '', 'hex', { crossOrigin: 'Anonymous' });

  const [isShownColorPicker, onOpenColorPicker, onClose, onToggleColorPicker] = useBooleanState(false);

  const [sellLink, setSellLink] = useState('https://zigzag.kr/catalog/products/131358195');
  const [personalColorId, setPersonalColorId] = useState(0);
  const [productType, setProductType] = useState<ProductType>();
  const [productName, setProductName] = useState('');
  const [platform, setPlatform] = useState('');

  const [validateUrl, setValidateUrl] = useState(false);
  const [urlWarnText, setUrlWarnText] = useState('');
  const [productNameText, setProductNameText] = useState('');
  const [platformWarnText, setPlatformWarnText] = useState('');
  const [productTypeWarnText, setProductTypeWarnText] = useState('');

  const changeSellLink = (url: string) => {
    setSellLink(url);
    setValidateUrl(false);
  };

  const submitSellLink = () => {
    setUrlWarnText('');

    if (!sellLink) {
      return setUrlWarnText('*판매 링크를 입력해주세요.');
    }

    productOGMutate(
      { url: sellLink },
      {
        onSuccess: () => {
          setValidateUrl(true);
        },
        onError(error) {
          setValidateUrl(false);
          if (error?.response?.status === 500) {
            return setUrlWarnText('*유효하지 않은 링크입니다.');
          }
          if (error?.response?.status === 404) {
            return setUrlWarnText('*유효하지 않은 링크입니다.');
          }
          if (error?.response?.status === 403) {
            return setUrlWarnText('*안전하지 않은 링크입니다.');
          }
          if (error?.response?.status === 409) {
            return setUrlWarnText('*이미 등록된 상품입니다.');
          }
        },
      },
    );
  };

  const findCategoryKeyByValue = (value: string) => {
    const entries = Object.entries(CATEGORY);
    for (let [key, val] of entries) {
      if (val === value) {
        return key;
      }
    }
    return null;
  };

  const validateProduct = () => {
    if (!productName) {
      setProductNameText('*상품명을 입력해주세요.');
    } else {
      setProductNameText('');
    }

    if (!platform) {
      setPlatformWarnText('*판매처를 입력해주세요.');
    } else {
      setPlatformWarnText('');
    }

    if (!productType) {
      setProductTypeWarnText('*상품 유형을 선택해주세요.');
    } else {
      setProductTypeWarnText('');
    }

    if (!sellLink) {
      setUrlWarnText('*판매 링크를 입력해주세요.');
    } else {
      setUrlWarnText('');
    }
  };

  const submitProduct = () => {
    validateProduct();

    if (!productName || !platform || !productType || !sellLink || urlWarnText || !ogData) return;

    if (!validateUrl) {
      return setUrlWarnText('*판매 링크가 수정되었습니다. 다시 확인해주세요.');
    }

    const keyForCategory = findCategoryKeyByValue(productType) || '';

    postProductMutate(
      {
        name: productName,
        color: [`${colorData}`],
        platform: [platform],
        sellUrl: sellLink,
        imageUrl: ogData.image,
        personalColor: personalColorId,
        category: keyForCategory,
      },
      {
        onSuccess: () => {
          router.push('/products');
        },
      },
    );
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
      <ProductImage image={ogData?.image} showBackButton />

      <div css={formStyle}>
        <LabeledInputButton
          value={sellLink}
          onChange={(e) => changeSellLink(e.target.value)}
          buttonText="확인"
          fullWidth
          onClick={submitSellLink}
          errorMessage={urlWarnText}
        >
          <Text as="title" size="sm" weight="bold">
            판매 링크
          </Text>
        </LabeledInputButton>

        <div css={inputContainerStyle}>
          <Text as="title" size="sm" weight="bold">
            상품명
          </Text>
          <input css={inputStyle} value={productName} onChange={(e) => setProductName(e.target.value)} />
          <Text as="caption" size="md" style={warnTextStyle}>
            {productNameText}
          </Text>
        </div>

        <div css={inputContainerStyle}>
          <div css={platformTextStyle}>
            <Text as="title" size="sm" weight="bold">
              판매처
            </Text>
            <ToolTip content={<PlatformNotice />}>
              <Question width="15" height="15" color="#A4A4A4" />
            </ToolTip>
          </div>

          <input css={inputStyle} value={platform} onChange={(e) => setPlatform(e.target.value)} />
          <Text as="caption" size="md" style={warnTextStyle}>
            {platformWarnText}
          </Text>
        </div>
        <div css={innerContentGapStyle}>
          <Text as="title" size="sm" weight="bold">
            상품 컬러
          </Text>
          <div css={colorBoxContainer}>
            {isShownColorPicker && (
              <div css={colorPickerStyle}>
                <Sketch editableDisable={false} color="#83aee6" presetColors={['#b2a291', '#28292b']} />
              </div>
            )}
            <SelectColorButton color={color.gray.gray010} onClick={onToggleColorPicker}>
              <PlusOutline width="20" height="20" color={color.gray.gray040} />
            </SelectColorButton>
            {colorData && <SelectColorButton color={colorData} />}
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
          <Text as="caption" size="md" style={warnTextStyle}>
            {productTypeWarnText}
          </Text>
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
  gap: 12px;
  padding: 0 5%;
  margin-top: 5%;
`;

const platformTextStyle = css`
  display: flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
`;

const inputContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

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

const colorPickerStyle = css`
  position: absolute;
  z-index: 100;
  left: 70px;
`;

const innerContentGapStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

const colorBoxContainer = css`
  position: relative;
  display: flex;
  gap: 10px;
`;

const captionStyle = css`
  color: ${color.gray.gray040};
`;

const warnTextStyle = css`
  color: ${color.red.red100};
  height: 12px;
`;

const colorButtonContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

const submitButtonStyle = css`
  padding: 6% 8%;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default ProductRegisterPage;
