import type { Meta, StoryObj } from '@storybook/react';
import Pagenation from './Pagenation';

const meta = {
  title: 'Common/UI/Pagenation',
  component: Pagenation,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof Pagenation>;

export default meta;
type Story = StoryObj<typeof Pagenation>;

export const Default: Story = {};
