import type { Meta, StoryObj } from '@storybook/react';
import AccordionList from './AccordionList';

const meta = {
  title: 'Common/UI/Accordion',
  component: AccordionList,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof AccordionList>;

export default meta;
type Story = StoryObj<typeof AccordionList>;

export const Default: Story = {};
