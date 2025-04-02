import type { Meta, StoryObj } from '@storybook/react';
import AccordionTable from './AccordionTable';

interface AccountData {
  id: number;
  accountDate: string;
  account: number;
}

const meta = {
  title: 'Admin/Common/Table/AccordionTable',
  component: AccordionTable,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof AccordionTable>;

export default meta;
type Story = StoryObj<typeof AccordionTable>;

export const Default: Story = {
  args: {
    columns: [
      {
        key: 'accountDate',
        header: '정산 예정일',
      },
      {
        key: 'account',
        header: '정산 금액',
      },
    ],
    data: [
      {
        id: 1,
        accountDate: '2024-01-15',
        account: 150000,
      },
      {
        id: 2,
        accountDate: '2024-01-20',
        account: 250000,
      },
    ] as AccountData[],
    children: null,
    currentPage: 1,
    totalCount: 2,
    pageSize: 10,
    onPageChange: (page: number) => console.log('Page changed:', page),
  },
};
