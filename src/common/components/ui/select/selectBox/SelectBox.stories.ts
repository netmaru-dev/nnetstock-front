import type { Meta, StoryObj } from '@storybook/react';
import SelectBox from './SelectBox';

const meta = {
  title: 'Common/UI/Select/SelectBox',
  component: SelectBox,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof SelectBox>;

export const Default: Story = {
  args: {
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ],
  },
};
