import RangeDateContainer from '@/common/components/datePicker/RangeDateContainer';
import CheckboxWithLabel from '@/common/components/ui/checkbox/CheckboxWithLabel';
import InputWithButton from '@/common/components/ui/input/inputWithButton/InputWithButton';
// import Loading from '@/common/components/ui/loading/Loading';
import TitleTextItem from '@/common/components/ui/textItem/TitleTextItem';
// import { Button } from '@/components/ui/button';
// import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { AccountTableType } from '@/admin/types/TableType';
import AccordionTable from '@/admin/components/common/table/AccordionTable';
import AccountContents from './components/AccountContents';
import { PAGE_NUM, PAGE_SIZE } from '@/admin/constants/common';

const columns = [
  {
    key: 'name',
    header: '작가',
  },
  {
    key: 'userId',
    header: 'ID',
  },
  {
    key: 'accountDate',
    header: '정산 예정일',
    // sortable: true,
  },
  {
    key: 'account',
    header: '정산 금액',
  },
  {
    key: 'status',
    header: '진행상태',
  },
];

const mockData: AccountTableType[] = [
  {
    id: 1,
    name: '김작가',
    userId: 'artist123',
    accountDate: '2024-01-15',
    account: 150000,
    status: '정산 대기',
  },
  {
    id: 2,
    name: '이작가',
    userId: 'artist456',
    accountDate: '2024-01-20',
    account: 250000,
    status: '정산 완료',
  },
  {
    id: 3,
    name: '박작가',
    userId: 'artist789',
    accountDate: '2024-01-25',
    account: 350000,
    status: '정산 대기',
  },
  {
    id: 4,
    name: '최작가',
    userId: 'artist101',
    accountDate: '2024-01-30',
    account: 450000,
    status: '정산 완료',
  },
  {
    id: 5,
    name: '정작가',
    userId: 'artist202',
    accountDate: '2024-02-05',
    account: 550000,
    status: '정산 대기',
  },
  {
    id: 6,
    name: '한작가',
    userId: 'artist303',
    accountDate: '2024-02-10',
    account: 650000,
    status: '정산 완료',
  },
  {
    id: 7,
    name: '조작가',
    userId: 'artist404',
    accountDate: '2024-02-15',
    account: 750000,
    status: '정산 대기',
  },
  {
    id: 8,
    name: '윤작가',
    userId: 'artist505',
    accountDate: '2024-02-20',
    account: 850000,
    status: '정산 완료',
  },
  {
    id: 9,
    name: '임작가',
    userId: 'artist606',
    accountDate: '2024-02-25',
    account: 950000,
    status: '정산 대기',
  },
  {
    id: 10,
    name: '강작가',
    userId: 'artist707',
    accountDate: '2024-03-01',
    account: 1050000,
    status: '정산 완료',
  },
  {
    id: 11,
    name: '신작가',
    userId: 'artist808',
    accountDate: '2024-03-05',
    account: 1150000,
    status: '정산 대기',
  },
  {
    id: 12,
    name: '오작가',
    userId: 'artist909',
    accountDate: '2024-03-10',
    account: 1250000,
    status: '정산 완료',
  },
];

const AccountListPage = () => {
  /* useState */
  const [tableData, setTableData] = useState<AccountTableType[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [currentPage, setCurrentPage] = useState(PAGE_NUM);

  console.log(searchInput);

  useEffect(() => {
    const fetchSettlements = async () => {
      setTableData(mockData);
      setTotalCount(mockData.length);
    };

    fetchSettlements();
  }, [startDate, endDate]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    console.log('search');
  };

  const handleDateSelect = (startDate?: Date, endDate?: Date) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <div className='flex flex-col gap-10'>
      <TitleTextItem label='정산 내역' />
      <div className='flex flex-col gap-5'>
        {/* 검색 영역 */}
        <div className='flex flex-col gap-5'>
          <RangeDateContainer startDate={startDate} endDate={endDate} onSelect={handleDateSelect} />
          <div className='flex justify-between w-full gap-5'>
            <InputWithButton
              buttonText='검색'
              handleClick={handleSearch}
              placeholder='작가 아이디 또는 이름으로 검색하세요.'
              handleChange={setSearchInput}
            />
            <CheckboxWithLabel id='notAccount' label='미정산 내역만 보기' />
          </div>
        </div>
        {/* 테이블 영역 */}
        {/* {isLoading ? (
          <Loading />
        ) : ( */}
        <AccordionTable
          columns={columns}
          data={tableData}
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={PAGE_SIZE}
          onPageChange={handlePageChange}
        >
          {/* 아코디언 컨텐츠 컴포넌트 영역 */}
          <AccountContents
            totalSales={1000000}
            creatorDividend={100000}
            tax={10000}
            account={1000000}
            status='미정산'
            handleAccountComplete={() => {
              console.log('정산 완료');
            }}
          />
        </AccordionTable>
        {/* )} */}
      </div>
    </div>
  );
};

export default AccountListPage;
