import { Meta, StoryObj } from '@storybook/react';
import SeasonPicker from '.';

const meta = {
  title: 'Example/SeasonPicker',
  component: SeasonPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SeasonPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
