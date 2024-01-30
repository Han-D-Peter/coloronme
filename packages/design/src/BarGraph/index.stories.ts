import type { Meta, StoryObj } from '@storybook/react';

import BarGraph from './index';

const meta = {
  title: 'Example/BarGraph',
  component: BarGraph,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof BarGraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: 300,
    height: 200,
    data: [
      {
        label: 'Best_SW_LG',
        value: 'Best_SW_LG',
        count: 10,
      },
      {
        label: 'Best_SC_MT',
        value: 'Best_SC_MT',
        count: 30,
      },
      {
        label: 'Best_FW_DP',
        value: 'Best_FW_DP',
        count: 50,
      },
      {
        label: 'Best_WC_DP',
        value: 'Best_WC_DP',
        count: 20,
      },
    ],
  },
};
