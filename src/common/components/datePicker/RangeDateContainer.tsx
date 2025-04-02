import { subDays, subMonths } from 'date-fns';
import RangeDatePicker from '@/common/components/datePicker/RangeDatePicker';
import { Button } from '@/components/ui/button';

interface RangeDateContainerProps {
  startDate?: Date;
  endDate?: Date;
  onSelect: (startDate?: Date, endDate?: Date) => void;
}

const RangeDateContainer = ({ startDate, endDate, onSelect }: RangeDateContainerProps) => {
  const handleQuickSelect = (period: 'week' | 'month' | '3months' | 'all') => {
    const today = new Date();
    let newStartDate: Date | undefined;

    switch (period) {
      case 'week':
        newStartDate = subDays(today, 7);
        break;
      case 'month':
        newStartDate = subMonths(today, 1);
        break;
      case '3months':
        newStartDate = subMonths(today, 3);
        break;
      case 'all':
        newStartDate = undefined;
        break;
    }

    onSelect(newStartDate, today);
  };

  return (
    <div className='flex w-full gap-3'>
      <RangeDatePicker startDate={startDate} endDate={endDate} onSelect={onSelect} />
      <div className='flex gap-3'>
        <Button variant='ghost' onClick={() => handleQuickSelect('week')}>
          1주일
        </Button>
        <Button variant='ghost' onClick={() => handleQuickSelect('month')}>
          1개월
        </Button>
        <Button variant='ghost' onClick={() => handleQuickSelect('3months')}>
          3개월
        </Button>
        <Button variant='ghost' onClick={() => handleQuickSelect('all')}>
          전체
        </Button>
      </div>
    </div>
  );
};

export default RangeDateContainer;
