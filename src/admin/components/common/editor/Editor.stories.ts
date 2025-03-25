import type { Meta, StoryObj } from '@storybook/react';
import Editor from './Editor';

const meta = {
  title: 'Admin/Common/Editor/Editor',
  component: Editor,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof Editor>;

export const Default: Story = {};
