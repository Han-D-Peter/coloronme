import { useState } from 'react';
import { css } from '@emotion/react';

import { SearchInput } from '@design';

type Props = {
  initialValue?: string;
  updateQuery: (params: { keyword?: string }) => void;
};

const SearchForm = ({ initialValue, updateQuery }: Props) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const searchSubmit = () => {
    updateQuery({ keyword: searchValue });
  };

  return (
    <div css={innerContainer}>
      <SearchInput
        placeholder="검색어를 입력해주세요"
        fullWidth
        defaultValue={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        onSubmit={(event) => {
          event.preventDefault();
          searchSubmit();
        }}
      />
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

export default SearchForm;
