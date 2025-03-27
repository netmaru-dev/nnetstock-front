import MasterTable from '@/admin/components/common/table/MasterTable';
import { SitePageTableType } from '@/admin/types/TableType';
import { ArrowUpDown } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import TitleTextItem from '@/common/components/ui/textItem/TitleTextItem';
import SelectBox from '@/common/components/ui/select/SelectBox';

// TODO 서버에서 데이터 가져오기
const exampleData: SitePageTableType[] = [
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

const PageManagePage = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState<SitePageTableType[]>(exampleData);

  // 상태 변경 핸들러
  const handleStatusChange = (rowIndex: number, newStatus: boolean) => {
    const newData = [...tableData];
    newData[rowIndex].status = newStatus;
    setTableData(newData);
  };

  // 컬럼 정의
  const Columns: ColumnDef<SitePageTableType>[] = [
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
      size: 500,
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
          <SelectBox
            value={value ? 'true' : 'false'}
            handleValueChange={val => handleStatusChange(rowIndex, val === 'true')}
            options={[
              { value: 'true', label: '사용함' },
              { value: 'false', label: '미사용' },
            ]}
            placeholder='선택'
          />
        );
      },
    },
    {
      accessorKey: 'edit',
      header: '관리',
      size: 100,
      cell: ({ row }) => {
        return (
          <Button
            variant='outline'
            size='lg'
            onClick={() => navigate(`/admin/site/page-manage/${row.original.id}/edit`)}
          >
            수정
          </Button>
        );
      },
    },
  ];

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex justify-between'>
        <TitleTextItem label='페이지 관리' />
        <Button onClick={() => navigate('/admin/site/page-manage/new')} size='big'>
          새 페이지
        </Button>
      </div>
      <div className='flex flex-col'>
        <MasterTable columns={Columns} data={exampleData} filter={'pageName'} />
      </div>
    </div>
  );
};

export default PageManagePage;
