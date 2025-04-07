import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SelectBoxProps {
  value: string;
  handleValueChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
}

const SelectBox = ({
  value,
  handleValueChange,
  options,
  placeholder = '선택',
  className,
}: SelectBoxProps) => {
  return (
    <Select value={value} onValueChange={handleValueChange}>
      <SelectTrigger className={`h-10 w-full min-w-[100px] ${className}`}>
        <SelectValue placeholder={placeholder}>{value}</SelectValue>
      </SelectTrigger>
      <SelectContent className={className}>
        {options.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectBox;
