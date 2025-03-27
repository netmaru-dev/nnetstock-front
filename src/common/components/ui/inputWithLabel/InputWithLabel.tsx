import Label from '@/common/components/ui/label/Label';
import { Input } from '@/components/ui/input';
import { GoDotFill } from 'react-icons/go';
import { ChangeEvent } from 'react';

interface InputWithLabelProps {
  text: string;
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel = ({ text, id, placeholder, value, onChange }: InputWithLabelProps) => {
  return (
    <div className='flex items-center gap-[2.35rem] pb-4'>
      <Label htmlFor={id} text={text} size='large' icon={<GoDotFill />} />
      <div className='flex-1'>
        <Input
          id={id}
          size='lg'
          className='w-full max-w-lg'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputWithLabel;
