import { css } from '@emotion/react';
import { color } from '../../constants';
import useDropdown from '../hooks/useDropdown';

interface DropdownElementProps {
  children: string;
}

export default function DropdownElement({ children }: DropdownElementProps) {
  const { selectedValue, changeHandler, closeContainer } = useDropdown();
  const elementStyle = css`
    height: 34px;
    width: 100%;
    display: flex;
    padding: 17px;
    background-color: ${selectedValue === children ? `${color.gray.gray020}` : '#fff'};
    border: none;
    display: flex;
    align-items: center;
    &:hover {
      background-color: ${color.gray.gray020};
    }
  `;
  return (
    <button
      onClick={() => {
        changeHandler(children);
        closeContainer();
      }}
      css={elementStyle}
    >
      {children}
    </button>
  );
}
