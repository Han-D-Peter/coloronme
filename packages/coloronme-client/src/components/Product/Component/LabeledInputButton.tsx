import { css } from '@emotion/react';
import { color, InputWithButton, Text } from '@design';
import { InputProps } from '../../../../../design/src/InputWithButton';

interface LabeledInputButtonProps extends InputProps {
  errorMessage?: string;
}

const LabeledInputButton = ({
  children,
  buttonText,
  onClick,
  fullWidth = false,
  errorMessage,
  disabled,
  ...props
}: LabeledInputButtonProps) => {
  return (
    <div css={innerContentStyle}>
      {children}
      <InputWithButton buttonText={buttonText} disabled={disabled} onClick={onClick} fullWidth={fullWidth} {...props} />
      <Text as="caption" size="md" style={warnTextStyle}>
        {errorMessage ?? ''}
      </Text>
    </div>
  );
};

const innerContentStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const warnTextStyle = css`
  color: ${color.red.red100};
  height: 10px;
`;

export default LabeledInputButton;
