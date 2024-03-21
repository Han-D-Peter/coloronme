import { css } from '@emotion/react';

type Props = {
  children?: React.ReactNode;
  color: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const SelectColorButton = ({ children, color, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
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
