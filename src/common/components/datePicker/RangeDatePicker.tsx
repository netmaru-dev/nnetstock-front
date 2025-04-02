import { format, isAfter, subMonths } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface RangeDatePickerProps {
  startDate?: Date;
  endDate?: Date;
  onSelect: (startDate?: Date, endDate?: Date) => void;
  className?: string;
}

const RangeDatePicker = ({ startDate, endDate, onSelect, className }: RangeDatePickerProps) => {
  const today = new Date();
  const defaultMonth = subMonths(today, 1);

  const handleSelect = (range: DateRange | undefined) => {
    onSelect(range?.from, range?.to);
  };

  const dateRange: DateRange | undefined = startDate
    ? {
        from: startDate,
        to: endDate,
      }
    : undefined;

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !startDate && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className='w-4 h-4 mr-2' />
            {startDate ? (
              endDate ? (
                <>
                  {format(startDate, 'yyyy-MM-dd')} ~ {format(endDate, 'yyyy-MM-dd')}
                </>
              ) : (
                format(startDate, 'yyyy-MM-dd')
              )
            ) : (
              <span>날짜를 선택해주세요.</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={defaultMonth}
            selected={dateRange}
            onSelect={handleSelect}
            numberOfMonths={2}
            disabled={date => isAfter(date, today)}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default RangeDatePicker;
