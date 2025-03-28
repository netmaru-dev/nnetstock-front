import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowUpDown } from 'lucide-react';
import PaginationBox from '@/common/components/ui/pagination/Pagination';
// import { Pagination } from '@/components/ui/pagination';

interface Column<T> {
  key: keyof T | string;
  header: string;
  width?: number;
  sortable?: boolean;
  render?: (item: T) => React.ReactNode;
}

interface MasterTableProps<T> {
  columns: Column<T>[];
  data: T[];
  totalCount: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  selectable?: boolean;
  selectedItems?: T[];
  onSelectionChange?: (items: T[]) => void;
  onSort?: (key: keyof T | string, direction: 'asc' | 'desc') => void;
}

const MasterTable = <T extends { id: number }>({
  columns,
  data,
  totalCount,
  currentPage,
  pageSize,
  onPageChange,
  selectable = false,
  selectedItems = [],
  onSelectionChange,
  onSort,
}: MasterTableProps<T>) => {
  const [sortKey, setSortKey] = useState<keyof T | string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: keyof T | string) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
    onSort?.(key, sortDirection);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      onSelectionChange?.(data);
    } else {
      onSelectionChange?.([]);
    }
  };

  const handleSelectItem = (item: T) => {
    const isSelected = selectedItems.some(selected => selected.id === item.id);
    if (isSelected) {
      onSelectionChange?.(selectedItems.filter(selected => selected.id !== item.id));
    } else {
      onSelectionChange?.([...selectedItems, item]);
    }
  };

  const handleItemDetail = (item: T) => {
    console.log(item);
  };

  return (
    <div className='flex flex-col gap-10'>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              {selectable && (
                <TableHead className='w-[50px]'>
                  <Checkbox
                    checked={selectedItems.length === data.length}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
              )}
              {columns.map(column => (
                <TableHead
                  key={String(column.key)}
                  style={{ width: column.width ? `${column.width}px` : 'auto' }}
                  className={` ${column.sortable ? 'cursor-pointer select-none' : ''}`}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className='flex items-center gap-2'>
                    {column.header}
                    {column.sortable && (
                      <ArrowUpDown
                        className={`h-4 w-4 ${
                          sortKey === column.key ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      />
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map(item => (
                <TableRow key={item.id} onClick={() => handleItemDetail(item)}>
                  {selectable && (
                    <TableCell>
                      <Checkbox
                        checked={selectedItems.some(selected => selected.id === item.id)}
                        onCheckedChange={() => handleSelectItem(item)}
                      />
                    </TableCell>
                  )}
                  {columns.map(column => (
                    <TableCell key={String(column.key)}>
                      {column.render ? column.render(item) : String(item[column.key as keyof T])}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={selectable ? columns.length + 1 : columns.length}>
                  데이터가 없습니다.
                </TableCell>
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

export default MasterTable;
