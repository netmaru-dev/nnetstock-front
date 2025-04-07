import SelectBox from '../selectBox/SelectBox';
import Label from '@/common/components/ui/label/Label';

interface SelectBoxWithLabelProps {
  label: string;
  labelSize?: 'large' | 'medium' | 'small';
  options: { value: string; label: string }[];
  value: string;
  handleValueChange: (value: string) => void;
  className?: string;
}

const SelectBoxWithLabel = ({
  label,
  labelSize = 'medium',
  options,
  value,
  handleValueChange,
  className,
}: SelectBoxWithLabelProps) => {
  return (
    <div className='flex items-center pb-4'>
      <div className={`flex min-w-[100px] ${className}`}>
        <Label text={label} size={labelSize} />
      </div>
      <div className='flex-1'>
        <SelectBox
          value={value}
          className='w-full max-w-lg'
          handleValueChange={handleValueChange}
          options={options}
        />
      </div>
    </div>
  );
};

export default SelectBoxWithLabel;
