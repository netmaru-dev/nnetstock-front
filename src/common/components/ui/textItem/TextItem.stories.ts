import type { Meta, StoryObj } from '@storybook/react';
import TextItem from './TextItem';

const meta = {
  title: 'Common/UI/Text/TextItem',
  component: TextItem,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    isActive: { control: 'boolean' },
    isPointer: { control: 'boolean' },
    isHover: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  parameters: {
    backgrounds: {
      // default: 'dark',
    },
  },
} satisfies Meta<typeof TextItem>;

export default meta;
type Story = StoryObj<typeof TextItem>;

export const Default: Story = {
  args: {
    label: '텍스트 항목',
    size: 'small',
  },
};

export const Menu: Story = {
  args: {
    label: '선택 항목',
    size: 'small',
    isPointer: true,
  },
};

export const Active: Story = {
  args: {
    label: '활성화된 텍스트 항목',
    size: 'medium',
    isActive: true,
    isPointer: true,
  },
};

export const Hover: Story = {
  args: {
    label: 'hover 스타일 적용 텍스트 항목',
    size: 'large',
    isHover: true,
  },
};
