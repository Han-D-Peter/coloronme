import { css } from '@emotion/react';
import { gradation } from '../../../../../design/src/constants';

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const RoundButton = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} css={registerButtonStyle}>
      {children}
    </button>
  );
};

const registerButtonStyle = css`
  width: 52px;
  height: 52px;
  border-radius: 100%;
  background: ${gradation.sm};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default RoundButton;
