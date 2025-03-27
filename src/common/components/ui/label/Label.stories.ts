import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta = {
  title: 'Common/UI/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {
    text: {
      control: 'text',
      description: '라벨에 표시될 텍스트',
      defaultValue: '라벨 텍스트',
    },
    htmlFor: {
      control: 'text',
      description: '연결된 요소의 id',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: '이름',
    htmlFor: 'name-input',
  },
};
