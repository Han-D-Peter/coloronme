import type { Meta, StoryObj } from '@storybook/react';

import ColorSelect from './index';

const meta = {
  title: 'Example/ColorSelect',
  component: ColorSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColorSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
