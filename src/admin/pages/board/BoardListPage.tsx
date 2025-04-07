import StepPaginatedTable from '@/admin/components/common/table/StepPaginatedTable';
import { MEMBER_GRADE, MEMBER_GRADE_LABEL, STATUS_LABEL } from '@/admin/constants/common';
import { STATUS } from '@/admin/constants/common';
import { BoardTableType } from '@/admin/types/TableType';
import SelectBox from '@/common/components/ui/select/selectBox/SelectBox';
import TitleTextItem from '@/common/components/ui/textItem/TitleTextItem';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import AddBoardModal from './components/AddBoardModal';

const boardData: BoardTableType[] = [
  {
    no: 1,
    title: '공지사항',
    boardId: 'notice',
    writeAccess: '관리자',
    readAccess: '전체',
    status: '사용함',
  },
  {
    no: 2,
    title: '자유게시판',
    boardId: 'free',
    writeAccess: '전체',
    readAccess: '전체',
    status: '사용함',
  },
  {
    no: 3,
    title: '작가 게시판',
    boardId: 'creator',
    writeAccess: '작가회원',
    readAccess: '전체',
    status: '사용함',
  },
  {
    no: 4,
    title: '임직원 게시판',
    boardId: 'employee',
    writeAccess: 'netmaru 임직원',
    readAccess: 'netmaru 임직원',
    status: '사용함',
  },
  {
    no: 5,
    title: '이벤트',
    boardId: 'event',
    writeAccess: '관리자',
    readAccess: '전체',
    status: '사용안함',
  },
];

const BoardListPage = () => {
  const [tableData, setTableData] = useState<BoardTableType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTableData(boardData);
  }, []);

  // 페이지 상태 변경 핸들러
  const handleValueChange = (val: string, rowIndex: number, boardId: string) => {
    const newData = [...tableData];
    newData[rowIndex].status = STATUS_LABEL[val];
    setTableData(newData);

    console.log(boardId);

    // updatePageStatus.mutate(
    //   {
    //     pageId: pageId,
    //     status: Number(val),
    //   },
    //   {
    //     onSuccess: () => {
    //       openModal('안내', '페이지 상태 변경이 완료되었습니다.');
    //     },
    //     onError: () => {
    //       openModal('안내', '페이지 상태 변경 중 오류가 발생했습니다.');
    //       // 에러 발생 시 이전 상태로 되돌리기
    //       const prevData = [...tableData];
    //       prevData[rowIndex].status =
    //         STATUS_LABEL[val === STATUS.ACTIVE ? STATUS.INACTIVE : STATUS.ACTIVE];
    //       setTableData(prevData);
    //     },
    //   }
    // );
  };

  // 테이블 컬럼 정의
  const Columns: ColumnDef<BoardTableType>[] = [
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
    },
    {
      header: '게시판명',
      accessorKey: 'title',
      size: 400,
    },
    {
      header: '게시판 ID',
      accessorKey: 'boardId',
      size: 300,
    },
    {
      header: '작성 권한',
      accessorKey: 'writeAccess',
      size: 100,
      cell: ({ row }) => {
        const value = row.getValue('writeAccess') as string;
        const rowIndex = row.index;
        return (
          <SelectBox
            value={value}
            handleValueChange={val => handleValueChange(val, rowIndex, row.original.boardId)}
            options={[
              { value: MEMBER_GRADE.NORMAL, label: MEMBER_GRADE_LABEL[MEMBER_GRADE.NORMAL] },
              { value: MEMBER_GRADE.CREATOR, label: MEMBER_GRADE_LABEL[MEMBER_GRADE.CREATOR] },
              { value: MEMBER_GRADE.INACTIVE, label: MEMBER_GRADE_LABEL[MEMBER_GRADE.INACTIVE] },
              { value: MEMBER_GRADE.EMPLOYEE, label: MEMBER_GRADE_LABEL[MEMBER_GRADE.EMPLOYEE] },
              { value: MEMBER_GRADE.ADMIN, label: MEMBER_GRADE_LABEL[MEMBER_GRADE.ADMIN] },
            ]}
            placeholder='선택'
          />
        );
      },
    },
    {
      header: '읽기 권한',
      accessorKey: 'readAccess',
      size: 100,
      cell: ({ row }) => {
        const value = row.getValue('readAccess') as string;
        const rowIndex = row.index;
        return (
          <SelectBox
            value={value}
            handleValueChange={val => handleValueChange(val, rowIndex, row.original.boardId)}
            options={[
              { value: MEMBER_GRADE.NORMAL, label: MEMBER_GRADE_LABEL[MEMBER_GRADE.NORMAL] },
              { value: MEMBER_GRADE.CREATOR, label: MEMBER_GRADE_LABEL[MEMBER_GRADE.CREATOR] },
              { value: MEMBER_GRADE.INACTIVE, label: MEMBER_GRADE_LABEL[MEMBER_GRADE.INACTIVE] },
              { value: MEMBER_GRADE.EMPLOYEE, label: MEMBER_GRADE_LABEL[MEMBER_GRADE.EMPLOYEE] },
              { value: MEMBER_GRADE.ADMIN, label: MEMBER_GRADE_LABEL[MEMBER_GRADE.ADMIN] },
            ]}
            placeholder='선택'
          />
        );
      },
    },
    {
      header: '상태',
      accessorKey: 'status',
      size: 100,
      cell: ({ row }) => {
        const value = row.getValue('status') as string;
        const rowIndex = row.index;
        return (
          <SelectBox
            value={value}
            handleValueChange={val => handleValueChange(val, rowIndex, row.original.boardId)}
            options={[
              { value: STATUS.INACTIVE, label: STATUS_LABEL[STATUS.INACTIVE] },
              { value: STATUS.ACTIVE, label: STATUS_LABEL[STATUS.ACTIVE] },
            ]}
            placeholder='선택'
          />
        );
      },
    },
  ];

  return (
    <div className='flex flex-col gap-10'>
      <TitleTextItem label='게시판 관리 - 현재 사용중인 게시판' />
      <div className='flex flex-col gap-5'>
        <div className='flex justify-end'>
          <AddBoardModal
            triggerText='게시판 추가'
            open={isModalOpen}
            onOpenChange={setIsModalOpen}
            handleSave={() => {}}
          />
        </div>
        <StepPaginatedTable columns={Columns} data={tableData} />
      </div>
    </div>
  );
};

export default BoardListPage;
