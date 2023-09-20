import { useContext } from 'react';
import { DropdownContext, DropdownContextValues } from '../index';

export default function useDropdown() {
  return useContext(DropdownContext) as DropdownContextValues;
}
