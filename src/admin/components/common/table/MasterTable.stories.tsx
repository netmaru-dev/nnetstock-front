import type { Meta, StoryObj } from '@storybook/react';
import MasterTable from './MasterTable';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  createdAt: string;
  lastLogin: string;
  loginCount: number;
}

const meta: Meta<typeof MasterTable> = {
  title: 'Admin/Common/Table/MasterTable',
  component: MasterTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MasterTable<User>>;

// 샘플 데이터
const sampleData: User[] = [
  {
    id: 1,
    name: '홍길동',
    email: 'hong@example.com',
    role: '관리자',
    status: 'active',
    createdAt: '2024-03-20',
    lastLogin: '2024-03-21 14:30',
    loginCount: 156,
  },
  {
    id: 2,
    name: '김철수',
    email: 'kim@example.com',
    role: '사용자',
    status: 'inactive',
    createdAt: '2024-03-19',
    lastLogin: '2024-03-20 09:15',
    loginCount: 45,
  },
  {
    id: 3,
    name: '이영희',
    email: 'lee@example.com',
    role: '사용자',
    status: 'active',
    createdAt: '2024-03-18',
    lastLogin: '2024-03-21 15:45',
    loginCount: 89,
  },
];

// 기본 컬럼 정의
const columns = [
  {
    key: 'name',
    header: '이름',
    sortable: true,
  },
  {
    key: 'email',
    header: '이메일',
  },
  {
    key: 'role',
    header: '역할',
  },
  {
    key: 'status',
    header: '상태',
  },
  {
    key: 'createdAt',
    header: '생성일',
    sortable: true,
  },
];

// 정렬 가능한 테이블을 위한 래퍼 컴포넌트
const SortableTableWrapper = () => {
  const [data, setData] = useState(sampleData);

  const handleSort = (key: keyof User | string, direction: 'asc' | 'desc') => {
    const sortedData = [...data].sort((a, b) => {
      const aValue = a[key as keyof User];
      const bValue = b[key as keyof User];

      if (direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setData(sortedData);
  };

  return (
    <MasterTable
      columns={columns}
      data={data}
      totalCount={100}
      currentPage={1}
      pageSize={10}
      onPageChange={page => console.log('Page changed:', page)}
      onSort={handleSort}
    />
  );
};

// 기본 테이블
export const Default: Story = {
  args: {
    columns,
    data: sampleData,
    totalCount: 100,
    currentPage: 1,
    pageSize: 10,
    onPageChange: page => console.log('Page changed:', page),
  },
};

// 체크박스 선택 가능한 테이블
export const Selectable: Story = {
  args: {
    ...Default.args,
    selectable: true,
    selectedItems: [],
    onSelectionChange: items => console.log('Selected items:', items),
  },
};

// 정렬 가능한 테이블
export const Sortable: Story = {
  render: () => <SortableTableWrapper />,
};

// 빈 데이터 테이블
export const Empty: Story = {
  args: {
    ...Default.args,
    data: [],
  },
};

// 커스텀 렌더링 테이블
export const CustomRendering: Story = {
  args: {
    ...Default.args,
    columns: [
      {
        key: 'name',
        header: '이름',
        sortable: true,
        render: (item: User) => (
          <div className='flex items-center gap-2'>
            <div className='text-blue-600 bg-blue-100 flex h-8 w-8 items-center justify-center rounded-full font-semibold'>
              {item.name[0]}
            </div>
            <div className='flex flex-col'>
              <span className='font-medium'>{item.name}</span>
              <span className='text-sm text-gray-500'>{item.email}</span>
            </div>
          </div>
        ),
      },
      {
        key: 'role',
        header: '역할',
        render: (item: User) => (
          <Badge variant={item.role === '관리자' ? 'default' : 'secondary'}>{item.role}</Badge>
        ),
      },
      {
        key: 'status',
        header: '상태',
        render: (item: User) => (
          <div className='flex items-center gap-2'>
            <div
              className={`h-2 w-2 rounded-full ${
                item.status === 'active' ? 'bg-green-500' : 'bg-red-500'
              }`}
            />
            <span
              className={`text-sm ${item.status === 'active' ? 'text-green-600' : 'text-red-600'}`}
            >
              {item.status === 'active' ? '활성' : '비활성'}
            </span>
          </div>
        ),
      },
      {
        key: 'lastLogin',
        header: '최근 로그인',
        render: (item: User) => (
          <div className='flex flex-col'>
            <span>{item.lastLogin}</span>
            <span className='text-sm text-gray-500'>총 {item.loginCount}회 로그인</span>
          </div>
        ),
      },
      {
        key: 'actions',
        header: '관리',
        render: () => (
          <div className='flex gap-2'>
            <Button variant='outline' size='sm'>
              수정
            </Button>
            <Button variant='destructive' size='sm'>
              삭제
            </Button>
          </div>
        ),
      },
    ],
  },
};

// 고정 너비 컬럼 테이블
export const FixedWidth: Story = {
  args: {
    ...Default.args,
    columns: columns.map((col, index) => ({
      ...col,
      width: index === 0 ? 150 : index === 1 ? 200 : 120,
    })),
  },
};
