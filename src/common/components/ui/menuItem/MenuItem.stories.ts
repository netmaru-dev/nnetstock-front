import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from './MenuItem';

const meta = {
  title: 'Common/UI/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
      defaultValue: 'medium',
    },
    label: { control: 'text' },
    isActive: { control: 'boolean' },
  },
  parameters: {
    backgrounds: {
      // default: 'dark',
    },
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {
    label: '텍스트 항목',
    size: 'medium',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    label: '활성화된 텍스트 항목',
    size: 'medium',
    isActive: true,
  },
};
