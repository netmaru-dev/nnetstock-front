import { Checkbox } from '@/components/ui/checkbox';

interface CheckboxWithLabelProps {
  id: string;
  label: string;
  className?: string;
}

const CheckboxWithLabel = ({ id, label, className }: CheckboxWithLabelProps) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Checkbox id={id} />
      <label
        htmlFor={id}
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
