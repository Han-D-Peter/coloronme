import { color, Text } from '@design';
import { css } from '@emotion/react';
import { ReactNode } from 'react';

import FormTitle from './Title/FormTitle';

type Props = {
  title: ReactNode | string;
  errorMessage?: string;
  children: ReactNode;
};

const FormSection = ({ title, errorMessage, children }: Props) => {
  return (
    <div css={containerStyle}>
      {typeof title === 'string' ? <FormTitle>{title}</FormTitle> : title}
      {children}
      <Text as="caption" size="md" style={warnTextStyle}>
        {errorMessage}
      </Text>
    </div>
  );
};

const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const warnTextStyle = css`
  color: ${color.red.red100};
  height: 12px;
`;

export default FormSection;
