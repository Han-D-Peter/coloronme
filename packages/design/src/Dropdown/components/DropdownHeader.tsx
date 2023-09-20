import { css } from '@emotion/react';
import useDropdown from '../hooks/useDropdown';
import { color } from '../../constants/color';
import { Text } from '../../text';
import { UpwardOutline } from '../../assets/icons/UpwardOutline';

export default function DropdownHeader() {
  const { placeholder, selectedValue, toggleContainer } = useDropdown();

  const dropdownHeaderStyle = css`
    z-index: 2;
    color: ${!selectedValue ? `${color.gray.gray030}` : '#000'};
    height: 36px;
    width: 100%;
    background-color: #fff;
    border: 1px solid ${color.gray.gray020};
    border-radius: 5px 5px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <div css={[dropdownHeaderStyle]} onClick={toggleContainer}>
      <div
        css={css`
          margin-left: 17px;
        `}
      >
        <Text as="body" size="md">
          {selectedValue ? selectedValue : placeholder || ''}
        </Text>
      </div>
      <div
        css={css`
          margin-top: 6px;
          margin-right: 17px;
        `}
      >
        <UpwardOutline color={color.gray.gray030} width="24px" height="24px" />
      </div>
    </div>
  );
}
