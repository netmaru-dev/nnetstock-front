import { Button } from '@/components/ui/button';

interface ButtonContainerProps {
  onSave: () => void;
  onCancel: () => void;
  isSaveDisabled?: boolean;
}

const ButtonContainer = ({ onSave, onCancel, isSaveDisabled = false }: ButtonContainerProps) => {
  return (
    <div className='mt-6 flex justify-center gap-5'>
      <Button onClick={onSave} disabled={isSaveDisabled} size='big'>
        저장
      </Button>
      <Button variant='secondary' onClick={onCancel} size='big'>
        취소
      </Button>
    </div>
  );
};

export default ButtonContainer;
