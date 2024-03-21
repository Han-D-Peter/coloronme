import { css } from '@emotion/react';
import { InputWithButton } from '@design';
import { InputProps } from '../../../../../design/src/InputWithButton';

const LabeledInputButton = ({ children, buttonText, onClick, fullWidth = false, ...props }: InputProps) => {
  return (
    <div css={innerContentStyle}>
      {children}
      <InputWithButton buttonText={buttonText} onClick={onClick} fullWidth={fullWidth} {...props} />
    </div>
  );
};

const innerContentStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default LabeledInputButton;
