import type { Meta, StoryObj } from '@storybook/react';
import ButtonContainer from './ButtonContainer';

const meta = {
  title: 'Common/UI/ButtonContainer',
  component: ButtonContainer,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof ButtonContainer>;

export default meta;
type Story = StoryObj<typeof ButtonContainer>;

export const Default: Story = {};
