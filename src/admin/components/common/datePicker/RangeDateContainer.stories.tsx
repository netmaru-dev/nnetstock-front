import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RangeDateContainer from '@/common/components/datePicker/RangeDateContainer';

const meta = {
  title: 'Admin/Common/DatePicker/RangeDateContainer',
  component: RangeDateContainer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'RangeDateContainer 컴포넌트는 버튼을 통해서 날짜 범위를 선택할 수 있는 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof RangeDateContainer>;

export default meta;
type Story = StoryObj<typeof RangeDateContainer>;

const RangeDateContainerDemo = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date(2024, 0, 1));
  const [endDate, setEndDate] = useState<Date | undefined>(new Date(2024, 11, 31));

  const handleSelect = (start?: Date, end?: Date) => {
    setStartDate(start);
    setEndDate(end);
  };

  return <RangeDateContainer startDate={startDate} endDate={endDate} onSelect={handleSelect} />;
};

export const Default: Story = {
  render: () => <RangeDateContainerDemo />,
};
