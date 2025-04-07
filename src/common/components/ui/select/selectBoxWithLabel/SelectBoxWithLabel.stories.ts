import type { Meta, StoryObj } from '@storybook/react';
import SelectBoxWithLabel from './SelectBoxWithLabel';

const meta = {
  title: 'Common/UI/Select/SelectBoxWithLabel',
  component: SelectBoxWithLabel,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof SelectBoxWithLabel>;

export default meta;
type Story = StoryObj<typeof SelectBoxWithLabel>;

export const Default: Story = {
  args: {
    label: 'SelectBoxWithLabel',
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ],
    value: '1',
    handleValueChange: () => {},
  },
};
