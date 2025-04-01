import Label from '@/common/components/ui/label/Label';
import { Input } from '@/components/ui/input';
import { GoDotFill } from 'react-icons/go';
import { ChangeEvent } from 'react';

interface InputWithLabelProps {
  label: string;
  labelSize?: 'large' | 'medium' | 'small';
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: boolean;
  className?: string;
  disabled?: boolean;
}

const InputWithLabel = ({
  label,
  labelSize = 'medium',
  id,
  placeholder,
  value,
  onChange,
  icon = true,
  className,
  disabled,
}: InputWithLabelProps) => {
  return (
    <div className='flex items-center pb-4'>
      <div className={`flex min-w-[160px] ${className}`}>
        <Label htmlFor={id} text={label} size={labelSize} icon={icon && <GoDotFill />} />
      </div>
      <div className='flex-1'>
        <Input
          id={id}
          size='lg'
          className='w-full max-w-lg'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default InputWithLabel;
