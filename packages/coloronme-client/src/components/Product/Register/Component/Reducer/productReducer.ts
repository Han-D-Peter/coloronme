import { Dispatch } from 'react';
import { Category } from '@/src/query/product/product.model';

export type Product = {
  validateUrl: boolean;
  selectColors: string[];
  recommendColors: string[];
  sellLink: string;
  personalColorId: number;
  productType: Category | null;
  productName: string;
  platform: string;
};

type Action =
  | { type: 'SET_VALIDATE_URL'; payload: boolean }
  | { type: 'SET_SELL_LINK'; payload: string }
  | { type: 'ADD_COLOR'; payload: string | string[] }
  | { type: 'RECOMMEND_COLOR'; payload: string[] }
  | { type: 'REMOVE_COLOR'; payload: string }
  | { type: 'SET_PRODUCT_NAME'; payload: string }
  | { type: 'SET_PLATFORM'; payload: string }
  | { type: 'SET_PRODUCT_TYPE'; payload: Category | null }
  | { type: 'SET_PERSONAL_COLOR_ID'; payload: number };

export type ProductDispatch = Dispatch<Action>;

export const productInitialState: Product = {
  validateUrl: false,
  selectColors: [],
  recommendColors: [],
  sellLink: '',
  personalColorId: 0,
  productType: null,
  productName: '',
  platform: '',
};

export const productReducer = (state: Product, action: Action): Product => {
  switch (action.type) {
    case 'SET_VALIDATE_URL':
      return { ...state, validateUrl: action.payload };
    case 'SET_SELL_LINK':
      return { ...state, sellLink: action.payload };
    case 'RECOMMEND_COLOR':
      return { ...state, recommendColors: action.payload };
    case 'ADD_COLOR':
      const colorsToAdd = Array.isArray(action.payload) ? action.payload : [action.payload];
      return { ...state, selectColors: [...state.selectColors, ...colorsToAdd] };
    case 'REMOVE_COLOR':
      return { ...state, selectColors: state.selectColors.filter((color) => color !== action.payload) };
    case 'SET_PRODUCT_NAME':
      return { ...state, productName: action.payload };
    case 'SET_PLATFORM':
      return { ...state, platform: action.payload };
    case 'SET_PRODUCT_TYPE':
      return { ...state, productType: action.payload };
    case 'SET_PERSONAL_COLOR_ID':
      return { ...state, personalColorId: action.payload };
    default:
      return state;
  }
};
