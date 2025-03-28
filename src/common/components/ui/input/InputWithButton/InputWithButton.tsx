import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface InputWithButtonProps {
  buttonText: string;
  placeholder?: string;
  handleClick: () => void;
  handleChange?: (value: string) => void;
}

export function InputWithButton({
  buttonText,
  placeholder,
  handleClick,
  handleChange,
}: InputWithButtonProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const submitButton = e.currentTarget.nextElementSibling as HTMLButtonElement;
      submitButton?.click();
    }
  };

  return (
    <div className='flex min-w-[500px] items-center space-x-2'>
      <Input
        type='email'
        size='lg'
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        onChange={e => handleChange?.(e.target.value)}
      />
      <Button type='submit' size='lg' onClick={handleClick}>
        {buttonText}
      </Button>
    </div>
  );
}

export default InputWithButton;
