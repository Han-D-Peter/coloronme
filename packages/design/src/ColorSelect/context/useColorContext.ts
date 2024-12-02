import { createContext, useContext } from 'react';
import { ColorLibrary } from '../types';

export const ColorLibraryContext = createContext<ColorLibrary | null>(null);
export function useColorContext() {
  return useContext(ColorLibraryContext) as ColorLibrary | null;
}
