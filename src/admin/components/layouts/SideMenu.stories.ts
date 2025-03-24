import type { Meta, StoryObj } from '@storybook/react';
import SideMenu from './SideMenu';

const meta = {
  title: 'Admin/Common/Layout/SideMenu',
  component: SideMenu,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof SideMenu>;

export default meta;
type Story = StoryObj<typeof SideMenu>;

export const Default: Story = {};
