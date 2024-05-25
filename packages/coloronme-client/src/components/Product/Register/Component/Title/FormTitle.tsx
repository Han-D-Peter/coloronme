import { Text } from '@design';

const FormTitle = ({ children }: { children: string }) => {
  return (
    <Text as="title" size="sm" weight="bold">
      {children}
    </Text>
  );
};

export default FormTitle;
