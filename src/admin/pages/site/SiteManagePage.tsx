import MasterTable from '@/admin/components/common/table/MasterTable';
import { SiteTableType } from '@/common/types/TableType';
import { ArrowUpDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import TextItem from '@/common/components/ui/textItem/TextItem';

// TODO 서버에서 데이터 가져오기
const exampleData: SiteTableType[] = [
  { id: 1, pageName: '라이선스 소개', lastEditDate: '2025-03-06', status: true },
  { id: 2, pageName: '청소년 보호정책', lastEditDate: '2025-03-06', status: true },
  { id: 3, pageName: '이용 약관', lastEditDate: '2025-03-06', status: true },
  { id: 4, pageName: '이용 약관', lastEditDate: '2025-03-06', status: true },
  { id: 5, pageName: '이용 약관', lastEditDate: '2025-03-06', status: true },
  { id: 6, pageName: '이용 약관', lastEditDate: '2025-03-06', status: true },
  { id: 7, pageName: '이용 약관', lastEditDate: '2025-03-06', status: true },
  { id: 8, pageName: '이용 약관', lastEditDate: '2025-03-06', status: true },
  { id: 9, pageName: '이용 약관', lastEditDate: '2025-03-06', status: true },
  { id: 10, pageName: '이용 약관', lastEditDate: '2025-03-06', status: true },
  { id: 11, pageName: '이용 약관', lastEditDate: '2025-03-06', status: true },
  { id: 12, pageName: '이용 약관', lastEditDate: '2025-03-06', status: true },
  { id: 13, pageName: '이용 약관', lastEditDate: '2025-03-06', status: true },
  { id: 14, pageName: '이용 약관', lastEditDate: '2025-03-06', status: true },
  { id: 15, pageName: '이용 약관', lastEditDate: '2025-03-06', status: true },
];

const SiteManagePage = () => {
  const handleNewPage = () => {
    console.log('new Page');
  };

  const [tableData, setTableData] = useState<SiteTableType[]>(exampleData);

  // 상태 변경 핸들러
  const handleStatusChange = (rowIndex: number, newStatus: boolean) => {
    const newData = [...tableData];
    newData[rowIndex].status = newStatus;
    setTableData(newData);
  };

  // 컬럼 정의
  const Columns: ColumnDef<SiteTableType>[] = [
    {
      accessorKey: 'id',
      enableResizing: true,
      size: 100,
      header: ({ column }) => {
        return (
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            No.
            <ArrowUpDown className='ml-2 h-4 w-4' />
          </Button>
        );
      },
      cell: ({ row }) => <div className=''>{row.getValue('id')}</div>,
    },
    {
      accessorKey: 'pageName',
      header: '페이지명',
      size: 300,
      // cell: ({ row }) => <span className='w-[500px]'>{row.getValue('pageName')}</span>,
      cell: ({ row }) => <div className=''>{row.getValue('pageName')}</div>,
    },
    {
      accessorKey: 'lastEditDate',
      header: '최종 작성일',
      cell: ({ row }) => <div>{row.getValue('lastEditDate')}</div>,
    },
    {
      accessorKey: 'status',
      header: '상태',
      size: 100,
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
      cell: () => {
        return (
          <Button variant='outline' size='lg'>
            수정
          </Button>
        );
      },
    },
  ];

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex justify-between'>
        <TextItem size='title' label='페이지 관리' />
        <Button onClick={handleNewPage} size='lg'>
          새 페이지
        </Button>
      </div>
      <div className='flex flex-col'>
        <MasterTable columns={Columns} data={exampleData} filter={'pageName'} />
      </div>
    </div>
  );
};

export default SiteManagePage;
