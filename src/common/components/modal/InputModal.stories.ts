import type { Meta, StoryObj } from '@storybook/react';
import InputModal from './InputModal';

const meta = {
  title: 'Common/Modal/InputModal',
  component: InputModal,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof InputModal>;

export default meta;
type Story = StoryObj<typeof InputModal>;

export const Default: Story = {};
