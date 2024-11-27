import type { Meta, StoryObj } from '@storybook/react';

import Heatmap from './index';

const meta = {
  title: 'Example/Heatmap',
  component: Heatmap,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Heatmap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    min: 0,
    max: 100,
    width: 300,
    height: 200,
    data: [
      { id: 'unique', data: [{ x: 'Best_SW_LG', y: 19 }] },
      { id: 'unique', data: [{ x: 'Best_SW_LG', y: 19 }] },
      { id: 'unique', data: [{ x: 'Best_SW_LG', y: 19 }] },
      { id: 'unique', data: [{ x: 'Best_SW_LG', y: 19 }] },
    ],
  },
};
