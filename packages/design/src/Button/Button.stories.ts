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

export const Primary1: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Button',
  },
};

export const Primary2: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    children: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'lg',
    children: 'Button',
  },
};
