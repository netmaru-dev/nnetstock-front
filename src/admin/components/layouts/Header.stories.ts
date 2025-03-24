import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta = {
  title: 'Admin/Common/Layout/Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
