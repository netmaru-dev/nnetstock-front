import type { Meta, StoryObj } from '@storybook/react';
import TitleTextItem from './TitleTextItem';

const meta = {
  title: 'Common/UI/Text/TitleTextItem',
  component: TitleTextItem,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof TitleTextItem>;

export default meta;
type Story = StoryObj<typeof TitleTextItem>;

export const Default: Story = {};
