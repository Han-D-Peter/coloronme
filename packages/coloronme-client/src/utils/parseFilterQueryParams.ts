import { FilterQueryParams, ParsedFilterQueryParams } from '../components/Products';
import { ensureArray } from './ensureArray';

export const parseFilterQueryParams = (query: FilterQueryParams): ParsedFilterQueryParams => {
  const { keyword, personalColor, category, sort } = query;

  return {
    keyword,
    personalColor: ensureArray(personalColor),
    category: ensureArray(category),
    sort,
  };
};
