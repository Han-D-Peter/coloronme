import { css, SerializedStyles } from '@emotion/react';

type Props = {
  children?: React.ReactNode;
  color: string;
  style?: SerializedStyles;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const SelectColorButton = ({ children, color, style, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      css={css`
        ${colorAddButton}
        ${style}
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
