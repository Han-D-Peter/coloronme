import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Button/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
      fullWidth: {
        type: 'boolean',
        defaultValue: false,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Button',
  },
};
