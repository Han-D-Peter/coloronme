import type { Meta, StoryObj } from '@storybook/react';

import Tabs from './index';

const WrappedTabs = () => {
  return (
    <div style={{ width: '500px' }}>
      <Tabs />
    </div>
  );
};

const meta = {
  title: 'Example/Tabs',
  component: WrappedTabs,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
