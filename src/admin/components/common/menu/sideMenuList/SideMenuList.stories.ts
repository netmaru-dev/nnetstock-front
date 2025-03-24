import type { Meta, StoryObj } from '@storybook/react';
import SideMenuList from './SideMenuList';

const meta = {
  title: 'Admin/Common/Menu/SideMenuList',
  component: SideMenuList,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof SideMenuList>;

export default meta;
type Story = StoryObj<typeof SideMenuList>;

export const Default: Story = {};
