import type { Meta, StoryObj } from '@storybook/react';
import ModeList from './ModeList';

const meta = {
  title: 'Admin/Common/Menu/ModeList',
  component: ModeList,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof ModeList>;

export default meta;
type Story = StoryObj<typeof ModeList>;

export const Default: Story = {};
