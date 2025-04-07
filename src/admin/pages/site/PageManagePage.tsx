import StepPaginatedTable from '@/admin/components/common/table/StepPaginatedTable';
import { SitePageTableType } from '@/admin/types/TableType';
import { ArrowUpDown } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import TitleTextItem from '@/common/components/ui/textItem/TitleTextItem';
import SelectBox from '@/common/components/ui/select/selectBox/SelectBox';
import { STATUS, STATUS_LABEL } from '@/admin/constants/common';
import { usePages, useUpdatePageStatus } from '@/admin/hooks/queries/useSiteQueries';
import Loading from '@/common/components/ui/loading/Loading';
import { useModalStore } from '@/admin/stores/modalStore';

const PageManagePage = () => {
  const navigate = useNavigate();
  const { openModal } = useModalStore();
  const [tableData, setTableData] = useState<SitePageTableType[]>([]);
  const { data: pages, isLoading, isError, error } = usePages();
  const updatePageStatus = useUpdatePageStatus();

  // 페이지 목록 조회
  useEffect(() => {
    if (isError) {
      openModal('안내', '페이지 목록 조회 중 오류가 발생했습니다.');
      console.error('페이지 목록 조회 오류:', error);
      return;
    }

    if (pages) {
      const formattedData = pages.map(page => ({
        no: page.no,
        pageId: page.id,
        title: page.title,
        lastDate: page.lastDate,
        status: STATUS_LABEL[page.status],
      }));
      setTableData(formattedData);
    }
    if (isError) {
      openModal('안내', '페이지 목록 조회 중 오류가 발생했습니다.');
    }
  }, [pages, isError, error, openModal]);

  // 페이지 상태 변경 핸들러
  const handleValueChange = (val: string, rowIndex: number, pageId: string) => {
    const newData = [...tableData];
    newData[rowIndex].status = STATUS_LABEL[val];
    setTableData(newData);

    updatePageStatus.mutate(
      {
        pageId: pageId,
        status: Number(val),
      },
      {
        onSuccess: () => {
          openModal('안내', '페이지 상태 변경이 완료되었습니다.');
        },
        onError: () => {
          openModal('안내', '페이지 상태 변경 중 오류가 발생했습니다.');
          // 에러 발생 시 이전 상태로 되돌리기
          const prevData = [...tableData];
          prevData[rowIndex].status =
            STATUS_LABEL[val === STATUS.ACTIVE ? STATUS.INACTIVE : STATUS.ACTIVE];
          setTableData(prevData);
        },
      }
    );
  };

  // 테이블 컬럼 정의
  const Columns: ColumnDef<SitePageTableType>[] = [
    {
      accessorKey: 'no',
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
      // cell: ({ row }) => <div className=''>{row.getValue('no')}</div>,
    },
    {
      accessorKey: 'title',
      header: '페이지명',
      size: 500,
      // cell: ({ row }) => <div className=''>{row.getValue('title')}</div>,
    },
    {
      accessorKey: 'lastDate',
      header: '최종 작성일',
      // cell: ({ row }) => <div>{row.getValue('lastDate')}</div>,
    },
    {
      accessorKey: 'status',
      header: '상태',
      size: 100,
      cell: ({ row }) => {
        const value = row.getValue('status') as string;
        const rowIndex = row.index;
        return (
          <SelectBox
            value={value}
            handleValueChange={val => handleValueChange(val, rowIndex, row.original.pageId)}
            options={[
              { value: STATUS.INACTIVE, label: STATUS_LABEL[STATUS.INACTIVE] },
              { value: STATUS.ACTIVE, label: STATUS_LABEL[STATUS.ACTIVE] },
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
            onClick={() => navigate(`/admin/site/page-manage/edit/${row.original.pageId}`)}
          >
            수정
          </Button>
        );
      },
    },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='flex flex-col gap-10'>
      <TitleTextItem label='페이지 관리' />
      <div className='flex flex-col gap-5'>
        <div className='flex justify-end'>
          <Button onClick={() => navigate('/admin/site/page-manage/new')} size='lg'>
            새 페이지
          </Button>
        </div>
        <StepPaginatedTable columns={Columns} data={tableData} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default PageManagePage;
