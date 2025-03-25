import type { Meta, StoryObj } from '@storybook/react';
import SimpleTable from './SimpleTable';

const meta: Meta<typeof SimpleTable> = {
  title: 'Admin/Common/Table/SimpleTable',
  component: SimpleTable,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SimpleTable>;

export const Default: Story = {
  args: {
    title: '페이지 관리',
    columns: [
      { key: 'no', value: 'No.' },
      { key: 'pageName', value: '페이지명' },
      { key: 'lastEditDate', value: '최종 작성일' },
      { key: 'useYn', value: '사용여부' },
    ],
    data: [
      { id: 1, no: 1, pageName: '이용약관', lastEditDate: '2024-03-06', useYn: 'Y' },
      { id: 2, no: 2, pageName: '라이선스 소개', lastEditDate: '2024-03-06', useYn: 'Y' },
      { id: 3, no: 3, pageName: '청소년 보호정책', lastEditDate: '2024-03-06', useYn: 'Y' },
    ],
  },
};
