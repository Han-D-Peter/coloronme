import { useRef } from 'react';
import { css } from '@emotion/react';

import { FilterIconFill, OptionTag, RemovableTag, Text } from '@design';

import { CATEGORY, PERSONAL_COLOR_MAPPING, PRODUCT_SORT_ENTRIES, PRODUCT_SORT_ORDER } from '@/src/constants/constants';
import { useOnClickOutside } from '@/src/hooks/useOnClickOutside';
import { useBooleanState } from '@/src/hooks/useBooleanState';
import { Category } from '@/src/query/product/product.model';
import Tab from '../../Common/Tab';
import SortTabContent from './SortTabContent';

type Props = {
  onOpen: () => void;
  updateQuery: (params: Record<string, string | string[]>) => void;
  personalColor?: string[];
  category?: Category[];
  sort?: string;
};

const FilterOptions = ({ onOpen, updateQuery, personalColor, category, sort }: Props) => {
  const tabContainerRef = useRef<HTMLDivElement | null>(null);
  const [isTabVisible, _, onCloseTab, onToggleTab] = useBooleanState(false);
  useOnClickOutside(tabContainerRef, onCloseTab);

  const removePersonalColorId = (id: string | number) => {
    if (!personalColor) return;

    const filteredPersonalColors = personalColor?.filter((item) => item !== id.toString());
    updateQuery({ personalColor: filteredPersonalColors });
  };

  const removeCategory = (id: string | number) => {
    if (!category) return;

    const filteredCategories = category?.filter((item) => item !== id.toString());
    updateQuery({ category: filteredCategories as Category[] });
  };

  const changeSort = (newSort: string) => {
    updateQuery({ sort: newSort });
  };

  return (
    <div css={innerContainer}>
      <div css={filterContainer}>
        <div css={optionTagContainer}>
          <OptionTag selected={personalColor && personalColor.length > 0} onClick={onOpen}>
            퍼스널 컬러
            <span css={optionTagSelectedStyle}>{personalColor?.length ? `${personalColor?.length}` : ''}</span>
          </OptionTag>
          <OptionTag selected={category && category.length > 0} onClick={onOpen}>
            상품 유형
            <span css={optionTagSelectedStyle}>{category?.length ? `${category?.length}` : ''}</span>
          </OptionTag>
        </div>

        <div ref={tabContainerRef} onClick={onToggleTab} css={sortTabContainer}>
          <div css={sortTabTextStyle}>
            <FilterIconFill width="15" height="15" color="#000000" />
            <Text as="body" size="md" weight="bold">
              {sort ? PRODUCT_SORT_ORDER[sort] : PRODUCT_SORT_ORDER['newest']}
            </Text>
          </div>

          <Tab isOpen={isTabVisible} onClose={onToggleTab} style={tabStyle}>
            <SortTabContent sortOptions={PRODUCT_SORT_ENTRIES} onClick={changeSort} />
          </Tab>
        </div>
      </div>
      <div css={removableTagContainer}>
        {personalColor?.map((id) => (
          <RemovableTag key={id} id={id} onClick={() => removePersonalColorId(id)}>
            {PERSONAL_COLOR_MAPPING[+id]?.name}
          </RemovableTag>
        ))}
        {category?.map((cat) => (
          <RemovableTag key={cat} id={cat} onClick={() => removeCategory(cat)}>
            {CATEGORY[cat]}
          </RemovableTag>
        ))}
      </div>
    </div>
  );
};

const innerContainer = css`
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  margin-bottom: 4%;
  gap: 10px;
`;

const tabStyle = css`
  top: 22px;
  right: -10px;
`;

const filterContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const optionTagContainer = css`
  display: flex;
  gap: 10px;
`;

const optionTagSelectedStyle = css`
  min-width: 10px;
  display: inline-block;
  text-align: right;
`;

const removableTagContainer = css`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const sortTabContainer = css`
  position: relative;
`;

const sortTabTextStyle = css`
  display: flex;
  cursor: pointer;
`;

export default FilterOptions;
