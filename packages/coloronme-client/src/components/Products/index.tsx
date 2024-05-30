import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { useUpdateQueryParameters } from '@/src/hooks/useUpdateQueryParameters';
import { parseFilterQueryParams } from '@/src/utils/parseFilterQueryParams';
import { useInfiniteProducts } from '@/src/query/product/product.queries';
import { useBooleanState } from '@/src/hooks/useBooleanState';
import { Category } from '@/src/query/product/product.model';
import useIntersect from '@/src/hooks/useIntersect';
import MainHeader from '../Home/components/MainHeader';
import ProductList from './component/ProductList';
import DefaultLayout from '../Common/Layout/DefaultLayout';
import FilterOptions from './component/FilterOptions';
import FilterForm from './component/FilterForm';
import SearchForm from './component/SearchForm';
import RegisterButton from './component/RegisterButton';
import EmptyProduct from './component/EmptyProduct';

export type FilterQueryParams = {
  keyword?: string;
  personalColor?: string | string[];
  category?: Category | Category[];
  sort?: string;
};

export type ParsedFilterQueryParams = {
  keyword?: string;
  personalColor?: string[];
  category?: Category[];
  sort?: string;
};

const ProductsPage = () => {
  const router = useRouter();
  const { query } = router;

  const filterQueryParams: ParsedFilterQueryParams = parseFilterQueryParams(query);
  const { keyword, personalColor, category, sort } = filterQueryParams;

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } = useInfiniteProducts(query);

  const targetRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const [isBottomSheetShown, onBottomSheetOpen, onBottomSheetClose] = useBooleanState(false);

  const updateQueryParameters = useUpdateQueryParameters();

  const filterSubmit = (filter: FilterQueryParams) => {
    onBottomSheetClose();
    updateQueryParameters(filter);
  };

  return (
    <DefaultLayout
      header={<MainHeader isToggleActive={false} />}
      floatingSection={<RegisterButton />}
      isLoading={isLoading}
    >
      <div css={mainContainer}>
        <SearchForm initialValue={keyword} updateQuery={updateQueryParameters} />

        <FilterOptions
          onOpen={onBottomSheetOpen}
          updateQuery={updateQueryParameters}
          personalColor={personalColor}
          category={category}
          sort={sort}
        />

        <div css={mainContainer}>
          {isLoading ? (
            <></>
          ) : data?.pages && data?.pages[0]?.pagination.totalProducts !== 0 ? (
            <ProductList data={data?.pages} targetRef={targetRef} />
          ) : (
            <EmptyProduct />
          )}
        </div>
      </div>

      {isBottomSheetShown && (
        <FilterForm initialValues={filterQueryParams} isOpen={isBottomSheetShown} onSubmit={filterSubmit} />
      )}
    </DefaultLayout>
  );
};

const mainContainer = css`
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  :-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default ProductsPage;
