import type { Meta, StoryObj } from '@storybook/react';
import InputWithButton from './InputWithButton';

const meta = {
  title: 'Common/UI/InputWithButton',
  component: InputWithButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    buttonText: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<typeof InputWithButton>;

export default meta;
type Story = StoryObj<typeof InputWithButton>;

export const Default: Story = {
  args: {
    buttonText: '검색',
    placeholder: '아이디 또는 이름으로 검색하세요.',
  },
};
