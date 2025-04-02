import type { Meta, StoryObj } from '@storybook/react';
import RangeDatePicker from './RangeDatePicker';

const meta = {
  title: 'Common/DatePicker/RangeDatePicker',
  component: RangeDatePicker,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof RangeDatePicker>;

export default meta;
type Story = StoryObj<typeof RangeDatePicker>;

export const Default: Story = {};
