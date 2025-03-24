import type { Meta, StoryObj } from '@storybook/react';
import PersonalMenuList from './PersonalMenuList';

const meta = {
  title: 'Admin/Common/Menu/PersonalMenuList',
  component: PersonalMenuList,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof PersonalMenuList>;

export default meta;
type Story = StoryObj<typeof PersonalMenuList>;

export const Default: Story = {};
