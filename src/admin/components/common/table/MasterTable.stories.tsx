import type { Meta, StoryObj } from '@storybook/react';
import MasterTable from './MasterTable';
import { ColumnDef } from '@tanstack/react-table';
import { SitePageTableType } from '@/common/types/TableType';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

const exampleData: SitePageTableType[] = [
  { id: 1, pageName: '라이선스 소개', lastEditDate: '2025-03-06', status: true },
  { id: 2, pageName: '청소년 보호정책', lastEditDate: '2025-03-06', status: false },
  { id: 3, pageName: '이용 약관', lastEditDate: '2025-03-06', status: true },
];

// 상태 변경용 래퍼 컴포넌트
const StoryWrapper = () => {
  const [tableData, setTableData] = useState<SitePageTableType[]>(exampleData);

  const handleStatusChange = (rowIndex: number, newStatus: boolean) => {
    const newData = [...tableData];
    newData[rowIndex].status = newStatus;
    setTableData(newData);
  };

  const columns: ColumnDef<SitePageTableType>[] = [
    {
      accessorKey: 'id',
      header: ({ column }) => (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          No.
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      ),
      size: 100,
      cell: ({ row }) => <div>{row.getValue('id')}</div>,
    },
    {
      accessorKey: 'pageName',
      header: '페이지명',
      size: 300,
      cell: ({ row }) => <div>{row.getValue('pageName')}</div>,
    },
    {
      accessorKey: 'lastEditDate',
      header: '최종 작성일',
      size: 200,
      cell: ({ row }) => <div>{row.getValue('lastEditDate')}</div>,
    },
    {
      accessorKey: 'status',
      header: '상태',
      size: 150,
      cell: ({ row }) => {
        const value = row.getValue('status') as boolean;
        const rowIndex = row.index;

        return (
          <Select
            value={value ? 'true' : 'false'}
            onValueChange={val => handleStatusChange(rowIndex, val === 'true')}
          >
            <SelectTrigger>
              <SelectValue placeholder='선택' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='true'>사용함</SelectItem>
              <SelectItem value='false'>미사용</SelectItem>
            </SelectContent>
          </Select>
        );
      },
    },
    {
      accessorKey: 'edit',
      header: '관리',
      size: 100,
      cell: () => (
        <Button variant='outline' size='lg'>
          수정
        </Button>
      ),
    },
  ];

  return <MasterTable columns={columns} data={tableData} filter='pageName' />;
};

const meta: Meta<typeof MasterTable<SitePageTableType, unknown>> = {
  title: 'Admin/Common/Table/MasterTable',
  component: MasterTable,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MasterTable<SitePageTableType, unknown>>;

export const Default: Story = {
  render: () => <StoryWrapper />,
};
