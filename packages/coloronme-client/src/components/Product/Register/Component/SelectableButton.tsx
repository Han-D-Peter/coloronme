import React from 'react';
import { css } from '@emotion/react';
import { Button, Text } from '@design'; // 가정한 디자인 시스템에서 가져온 컴포넌트

type Props = {
  id?: string;
  isSelected: boolean;
  onClick?: () => void;
  children: string;
};

const SelectableButton = ({ id, isSelected, children, onClick }: Props) => {
  return (
    <Button
      key={id}
      variant={isSelected ? 'primary' : 'gray'}
      radius="sm"
      size="sm"
      onClick={onClick}
      style={CustomButtonStyle}
    >
      <Text as="body" size="md" weight={isSelected ? 'bold' : 'regular'}>
        {children}
      </Text>
    </Button>
  );
};

const CustomButtonStyle = css`
  width: fit-content;
  padding: 0 12px;
`;

export default SelectableButton;
