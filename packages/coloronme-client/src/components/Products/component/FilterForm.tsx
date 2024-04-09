import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { Button, Text } from '@design';

import { CATEGORY_ENTRIES, PERSONAL_COLOR_ENTRIES } from '@/src/constants/constants';
import { Category } from '@/src/query/product/product.model';
import SelectableButton from '../../Product/Register/Component/SelectableButton';
import BottomSheet from '../../Common/BottomSheet';
import Space from '../../Common/Space';
import { ParsedFilterQueryParams } from '..';

type Props = {
  isOpen: boolean;
  initialValues: ParsedFilterQueryParams;
  onSubmit: (values: ParsedFilterQueryParams) => void;
};

const FilterForm = ({ isOpen, initialValues, onSubmit }: Props) => {
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const changePersonalColor = (id: string) => {
    if (!values || !values.personalColor) return;

    if (values.personalColor?.includes(id)) {
      setValues({ ...values, personalColor: values.personalColor.filter((value) => value !== id) });
    } else {
      setValues({ ...values, personalColor: [...values.personalColor, id] });
    }
  };

  const changeCategory = (category: Category) => {
    if (!values || !values.category) return;

    if (values.category?.includes(category)) {
      setValues({ ...values, category: values.category.filter((value) => value !== category) });
    } else {
      setValues({ ...values, category: [...values.category, category] });
    }
  };

  const submitForm = () => {
    onSubmit(values);
  };

  return (
    <BottomSheet isOpen={isOpen} close={submitForm}>
      <form
        css={filterMenuStyle}
        onSubmit={(event) => {
          event.preventDefault();
          submitForm();
        }}
      >
        <Text as="title" size="sm" weight="bold">
          퍼스널컬러
        </Text>
        <div css={colorButtonContainerStyle}>
          {PERSONAL_COLOR_ENTRIES.map(([id, { code, name }]) => (
            <SelectableButton
              key={id}
              id={id}
              isSelected={values?.personalColor?.includes(id) || false}
              onClick={() => changePersonalColor(id)}
            >
              {name}
            </SelectableButton>
          ))}
        </div>
        <Space height={10} />
        <Text as="title" size="sm" weight="bold">
          상품 유형
        </Text>
        <div css={colorButtonContainerStyle}>
          {CATEGORY_ENTRIES.map(([key, value], index) => (
            <SelectableButton
              key={index}
              id={index.toString()}
              isSelected={values?.category?.includes(key) || false}
              onClick={() => changeCategory(key)}
            >
              {value}
            </SelectableButton>
          ))}
        </div>
        <Space height={10} />
        <Button size="md" fullWidth type="submit">
          확인
        </Button>
      </form>
    </BottomSheet>
  );
};

const colorButtonContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 14px 10px;
`;

const filterMenuStyle = css`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  gap: 10px;
`;

export default FilterForm;
