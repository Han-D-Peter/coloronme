import { Dispatch } from 'react';

type ErrorState = {
  urlWarnText: string;
  productNameWarnText: string;
  platformWarnText: string;
  productTypeWarnText: string;
  colorPickerErrorMessage: string;
};

type ErrorAction =
  | { type: 'SET_URL_WARN_TEXT'; payload: string }
  | { type: 'SET_PRODUCT_NAME_WARN_TEXT'; payload: string }
  | { type: 'SET_PLATFORM_WARN_TEXT'; payload: string }
  | { type: 'SET_PRODUCT_TYPE_WARN_TEXT'; payload: string }
  | { type: 'SET_COLOR_PICKER_ERROR_MESSAGE'; payload: string }
  | { type: 'RESET_WARNINGS' };

export type ErrorDispatch = Dispatch<ErrorAction>;

export const initialErrorState: ErrorState = {
  urlWarnText: '',
  productNameWarnText: '',
  platformWarnText: '',
  productTypeWarnText: '',
  colorPickerErrorMessage: '',
};

export const productErrorReducer = (state: ErrorState, action: ErrorAction): ErrorState => {
  switch (action.type) {
    case 'SET_URL_WARN_TEXT':
      return { ...state, urlWarnText: action.payload };
    case 'SET_PRODUCT_NAME_WARN_TEXT':
      return { ...state, productNameWarnText: action.payload };
    case 'SET_PLATFORM_WARN_TEXT':
      return { ...state, platformWarnText: action.payload };
    case 'SET_PRODUCT_TYPE_WARN_TEXT':
      return { ...state, productTypeWarnText: action.payload };
    case 'SET_COLOR_PICKER_ERROR_MESSAGE':
      return { ...state, colorPickerErrorMessage: action.payload };
    case 'RESET_WARNINGS':
      return { ...initialErrorState };
    default:
      return state;
  }
};
