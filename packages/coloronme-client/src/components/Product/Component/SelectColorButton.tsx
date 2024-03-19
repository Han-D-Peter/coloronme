import { css } from '@emotion/react';

type Props = {
  children?: React.ReactNode;
  color: string;
};

const SelectColorButton = ({ children, color }: Props) => {
  return (
    <button
      css={css`
        ${colorAddButton}
        background-color: ${color};
      `}
    >
      {children}
    </button>
  );
};

const colorAddButton = css`
  width: 65px;
  height: 65px;
  border-radius: 100%;
`;

export default SelectColorButton;
