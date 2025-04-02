import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PaginationBox from '@/common/components/ui/pagination/Pagination';

interface Column<T> {
  key: keyof T | string;
  header: string;
  width?: number;
  sortable?: boolean;
  render?: (item: T) => React.ReactNode;
}

interface AccordionTableProps<T> {
  columns: Column<T>[];
  data: T[];
  children?: React.ReactNode;
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const AccordionTable = <T extends { id: number }>({
  columns,
  data,
  children,
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}: AccordionTableProps<T>) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className='flex flex-col gap-10'>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[50px]' />
              {columns.map(column => (
                <TableHead
                  key={String(column.key)}
                  style={{ width: column.width ? `${column.width}px` : 'auto' }}
                >
                  <span>{column.header}</span>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <>
                  <TableRow
                    key={item.id}
                    onClick={() => toggleItem(index)}
                    className='cursor-pointer hover:bg-muted/50'
                  >
                    <TableCell className='text-center justify-items-center'>
                      {openItem === index ? (
                        <ChevronUp className='w-4 h-4' />
                      ) : (
                        <ChevronDown className='w-4 h-4' />
                      )}
                    </TableCell>
                    {columns.map(column => (
                      <TableCell key={String(column.key)}>
                        {column.render ? column.render(item) : String(item[column.key as keyof T])}
                      </TableCell>
                    ))}
                  </TableRow>
                  {openItem === index && (
                    <TableRow key={`content-${index}`}>
                      <TableCell colSpan={columns.length + 1}>{children}</TableCell>
                    </TableRow>
                  )}
                </>
              ))
            ) : (
              <TableRow className='text-center'>
                <TableCell colSpan={columns.length + 1}>데이터가 없습니다.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <PaginationBox
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default AccordionTable;
