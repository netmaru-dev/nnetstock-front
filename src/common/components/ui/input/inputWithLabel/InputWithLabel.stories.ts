import type { Meta, StoryObj } from '@storybook/react';
import InputWithLabel from './InputWithLabel';

const meta = {
  title: 'Common/UI/InputWithLabel',
  component: InputWithLabel,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof InputWithLabel>;

export default meta;
type Story = StoryObj<typeof InputWithLabel>;

export const Default: Story = {};
