import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta = {
  title: 'Text/Text',
  component: Text,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    as: 'title',
    size: 'md',
    children: '텍스트 컴포넌트 입니다.',
  },
};

export const Body: Story = {
  args: {
    as: 'body',
    size: 'md',
    children: '텍스트 컴포넌트 입니다.',
  },
};
