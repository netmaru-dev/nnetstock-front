import type { Meta, StoryObj } from '@storybook/react';
import ProfileImage from './ProfileImage';

const meta = {
  title: 'Common/UI/ProfileImage',
  component: ProfileImage,
  tags: ['autodocs'],
  parameters: {},
} satisfies Meta<typeof ProfileImage>;

export default meta;
type Story = StoryObj<typeof ProfileImage>;

export const Default: Story = {};
