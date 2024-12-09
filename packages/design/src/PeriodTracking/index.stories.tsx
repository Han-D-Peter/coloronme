import { Meta, StoryObj } from '@storybook/react';
import PeriodTracking from '.';

const meta = {
  title: 'Example/PeriodTracking',
  component: PeriodTracking,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PeriodTracking>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    height: 400,
    width: '100%',
    values: [
      { title: '3월', value: 16 },
      { title: '4월', value: 14 },
      { title: '5월', value: 21 },
      { title: '6월', value: 25 },
      { title: '7월', value: 29 },
      { title: '8월', value: 30 },
    ],
  },
};
