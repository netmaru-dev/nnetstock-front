import type { Meta, StoryObj } from '@storybook/react';
import MenuList from './MenuList';

const meta = {
  title: 'Admin/Common/Menu/MenuList',
  component: MenuList,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof MenuList>;

export const Default: Story = {};
