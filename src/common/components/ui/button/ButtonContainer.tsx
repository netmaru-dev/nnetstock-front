import { Button } from '@/components/ui/button';

interface ButtonContainerProps {
  handleSave: () => void;
  handleCancel: () => void;
  isSaveDisabled?: boolean;
}

const ButtonContainer = ({
  handleSave,
  handleCancel,
  isSaveDisabled = false,
}: ButtonContainerProps) => {
  return (
    <div className='mt-6 flex justify-center gap-5'>
      <Button onClick={handleSave} disabled={isSaveDisabled} size='big'>
        저장
      </Button>
      <Button variant='secondary' onClick={handleCancel} size='big'>
        취소
      </Button>
    </div>
  );
};

export default ButtonContainer;
