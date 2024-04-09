import { useRouter } from 'next/router';
import { FilterQueryParams } from '../components/Products';

export const useUpdateQueryParameters = () => {
  const router = useRouter();

  const updateQuery = (updatedParams: Partial<FilterQueryParams>) => {
    const newQuery = { ...router.query, ...updatedParams };
    router.push(
      {
        pathname: router.pathname,
        query: newQuery,
      },
      undefined,
      { shallow: true },
    );
  };

  return updateQuery;
};
