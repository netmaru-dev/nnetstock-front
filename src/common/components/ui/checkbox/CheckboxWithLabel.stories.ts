import type { Meta, StoryObj } from '@storybook/react';
import CheckboxWithLabel from './CheckboxWithLabel';

const meta = {
  title: 'Common/UI/CheckboxWithLabel',
  component: CheckboxWithLabel,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof CheckboxWithLabel>;

export default meta;
type Story = StoryObj<typeof CheckboxWithLabel>;

export const Default: Story = {
  args: {
    id: 'check',
    label: '클릭하세요.',
  },
};
