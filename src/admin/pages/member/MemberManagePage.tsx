import MasterTable from '@/admin/components/common/table/MasterTable';
import TitleTextItem from '@/common/components/ui/textItem/TitleTextItem';
import { UserTableType } from '@/admin/types/TableType';
import SelectBox from '@/common/components/ui/select/selectBox/SelectBox';
import InputWithButton from '@/common/components/ui/input/inputWithButton/InputWithButton';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { MdPublishedWithChanges } from 'react-icons/md';
import Loading from '@/common/components/ui/loading/Loading';
import AddMemberModal from '@/admin/pages/member/components/AddMemberModal';
import { MEMBER_GRADE } from '@/admin/constants/member';
import { useModalStore } from '@/admin/stores/modalStore';
import { PAGE_NUM, PAGE_SIZE } from '@/admin/constants/common';

const MOCKUP_DATA: Pick<
  UserTableType,
  'id' | 'name' | 'userId' | 'email' | 'grade' | 'joinDate'
>[] = [
  {
    id: 1,
    name: '홍길동',
    userId: 'hong',
    email: 'hong@example.com',
    grade: '일반 회원',
    joinDate: '2025-01-01',
  },
  {
    id: 2,
    name: '김철수',
    userId: 'kim',
    email: 'kim@example.com',
    grade: '작가 회원',
    joinDate: '2025-01-01',
  },
  {
    id: 3,
    name: '이영희',
    userId: 'lee',
    email: 'lee@example.com',
    grade: '관리자',
    joinDate: '2025-01-01',
  },
  {
    id: 4,
    name: '이영희',
    userId: 'lee',
    email: 'lee@example.com',
    grade: '관리자',
    joinDate: '2025-01-01',
  },
  {
    id: 5,
    name: '이영희',
    userId: 'lee',
    email: 'lee@example.com',
    grade: '관리자',
    joinDate: '2025-01-01',
  },
  {
    id: 6,
    name: '이영희',
    userId: 'lee',
    email: 'lee@example.com',
    grade: '관리자',
    joinDate: '2025-01-01',
  },
  {
    id: 7,
    name: '이영희',
    userId: 'lee',
    email: 'lee@example.com',
    grade: '관리자',
    joinDate: '2025-01-01',
  },
  {
    id: 8,
    name: '이영희',
    userId: 'lee',
    email: 'lee@example.com',
    grade: '관리자',
    joinDate: '2025-01-01',
  },
  {
    id: 9,
    name: '이영희',
    userId: 'lee',
    email: 'lee@example.com',
    grade: '관리자',
    joinDate: '2025-01-01',
  },
  {
    id: 10,
    name: '이영희',
    userId: 'lee',
    email: 'lee@example.com',
    grade: '관리자',
    joinDate: '2025-01-01',
  },
  {
    id: 11,
    name: '이영희',
    userId: 'lee',
    email: 'lee@example.com',
    grade: '관리자',
    joinDate: '2025-01-01',
  },
  {
    id: 12,
    name: '이영희',
    userId: 'lee',
    email: 'lee@example.com',
    grade: '관리자',
    joinDate: '2025-01-01',
  },
];

// TODO 테이블 컬럼 별도 정의 필요
const columns = [
  {
    key: 'id',
    header: 'No.',
    // sortable: true,
    width: 200,
  },
  {
    key: 'name',
    header: '이름',
    // sortable: true,
  },
  {
    key: 'userId',
    header: '아이디',
  },
  {
    key: 'email',
    header: '메일주소',
  },
  {
    key: 'grade',
    header: '등급',
  },
  {
    key: 'joinDate',
    header: '가입일',
    // sortable: true,
  },
];

const MemberManagePage = () => {
  const [currentPage, setCurrentPage] = useState(PAGE_NUM);
  const [selectedItems, setSelectedItems] = useState<UserTableType[]>([]);
  const [tableData, setTableData] = useState<UserTableType[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  const [filterGrade, setFilterGrade] = useState('');
  const [changeGrade, setChangeGrade] = useState('');

  const { openModal } = useModalStore();
  const [searchInput, setSearchInput] = useState('');

  // API 호출 함수
  const fetchMembers = async (page: number, size: number) => {
    setIsLoading(true);
    try {
      // TODO: 실제 API 호출
      // const response = await api.getMembers({ page, size });
      // setTableData(response.items);
      // setTotalCount(response.totalCount);

      // 임시로 목업 데이터 사용
      const startIndex = (page - 1) * size;
      const endIndex = startIndex + size;
      const items = MOCKUP_DATA.slice(startIndex, endIndex);
      setTableData(items as UserTableType[]);
      setTotalCount(MOCKUP_DATA.length);
    } catch (error) {
      console.error('Failed to fetch members:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 초기 데이터 로드
  useEffect(() => {
    fetchMembers(currentPage, PAGE_SIZE);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSort = (key: string, direction: 'asc' | 'desc') => {
    // TODO: API 호출 시 정렬 파라미터 추가
    console.log('Sort:', key, direction);
  };

  const handleSelectionChange = (items: UserTableType[]) => {
    setSelectedItems(items);
  };

  const handleChangeGrade = () => {
    // 선택된 회원들의 등급 변경 로직
    if (selectedItems.length === 0) {
      openModal('안내', '선택된 회원이 없습니다.');
      return;
    }

    if (!changeGrade) {
      openModal('안내', '변경할 등급을 선택해주세요.');
      return;
    }

    console.log('Selected items:', selectedItems);
    // selectedItems 배열에 있는 회원들의 등급을 changeGrade로 변경 체크
    const updatedItems = selectedItems.map(item => ({
      ...item,
      grade: changeGrade,
    }));
    console.log('Updated items:', updatedItems);
  };

  const handleSearch = () => {
    if (!filterGrade && !searchInput) {
      openModal('안내', '검색어 또는 회원등급을 선택해주세요.');
      return;
    }
  };

  return (
    <div className='flex flex-col gap-10'>
      <TitleTextItem label='회원 관리' />
      <div className='flex flex-col gap-5'>
        {/* 검색 영역 */}
        <div className='flex gap-3'>
          <SelectBox
            value={MEMBER_GRADE.find(item => item.grade === filterGrade)?.label || ''}
            handleValueChange={setFilterGrade}
            options={MEMBER_GRADE.map(item => ({ value: item.grade, label: item.label }))}
            placeholder='회원 등급 전체'
            className='w-[160px] min-w-[120px]'
          />
          <InputWithButton
            buttonText='검색'
            handleClick={handleSearch}
            placeholder='아이디 또는 이름으로 검색하세요.'
            handleChange={setSearchInput}
          />
        </div>
        {/* 버튼 영역 */}
        <div className='flex justify-between'>
          <div className='flex items-center gap-10'>
            <div>
              <Button variant='ghost' onClick={() => handleSort('joinDate', 'asc')}>
                가입일 순
              </Button>
              <Button variant='ghost' onClick={() => handleSort('joinDate', 'desc')}>
                가입일 역순
              </Button>
              <Button variant='ghost' onClick={() => handleSort('name', 'asc')}>
                이름순
              </Button>
              <Button variant='ghost' onClick={() => handleSort('name', 'desc')}>
                이름 역순
              </Button>
            </div>
            <div className='mr-20 flex items-center gap-2 whitespace-nowrap'>
              <MdPublishedWithChanges />
              선택한 회원을
              <SelectBox
                value={MEMBER_GRADE.find(item => item.grade === changeGrade)?.label || ''}
                handleValueChange={setChangeGrade}
                options={MEMBER_GRADE.map(item => ({ value: item.grade, label: item.label }))}
                placeholder='등급 변경'
                className='w-[160px] min-w-[120px]'
              />
              으로 변경
              <Button size='lg' variant='secondary' className='ml-2' onClick={handleChangeGrade}>
                확인
              </Button>
            </div>
          </div>
          <AddMemberModal
            triggerText='회원 추가'
            open={isAddMemberModalOpen}
            onOpenChange={setIsAddMemberModalOpen}
            handleSearchClick={() => {}}
          />
        </div>
        {/* 테이블 영역 */}
        {isLoading ? (
          <Loading />
        ) : (
          <MasterTable
            selectable={true}
            columns={columns}
            data={tableData}
            totalCount={totalCount}
            currentPage={currentPage}
            pageSize={PAGE_SIZE}
            onPageChange={handlePageChange}
            selectedItems={selectedItems}
            onSelectionChange={handleSelectionChange}
            onSort={handleSort}
          />
        )}
      </div>
    </div>
  );
};

export default MemberManagePage;
