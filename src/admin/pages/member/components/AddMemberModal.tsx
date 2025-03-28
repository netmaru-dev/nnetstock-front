import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import InputWithButton from '@/common/components/ui/input/InputWithButton/InputWithButton';
import InputWithLabel from '@/common/components/ui/input/inputWithLabel/InputWithLabel';
import { Checkbox } from '@/components/ui/checkbox';
import Label from '@/common/components/ui/label/Label';

interface AddMemberModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerText: string;
  handleSearchClick: () => void;
}

const AddMemberModal = ({
  open,
  onOpenChange,
  triggerText,
  handleSearchClick,
}: AddMemberModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button size='lg'>{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[550px]'>
        <DialogHeader className='pb-4'>
          <DialogTitle>회원 추가</DialogTitle>
          {/* <DialogDescription>
          </DialogDescription> */}
        </DialogHeader>
        <InputWithButton
          buttonText='검색'
          placeholder='이름 또는 아이디로 검색하세요.'
          handleClick={handleSearchClick}
        />
        <div>
          <InputWithLabel
            label='이름'
            labelSize='small'
            id='name'
            placeholder='이름을 입력하세요.'
            icon={false}
            className='justify-center'
          />
          <InputWithLabel
            label='아이디'
            labelSize='small'
            id='id'
            placeholder='아이디를 입력하세요.'
            icon={false}
            className='justify-center'
          />
          <InputWithLabel
            label='메일주소'
            labelSize='small'
            id='email'
            placeholder='메일주소를 입력하세요.'
            icon={false}
            className='justify-center'
          />
          <div className='flex items-center'>
            <Label
              htmlFor='author'
              text='작가 여부'
              size='small'
              className='min-w-[160px] justify-center'
            />
            <Checkbox id='author' />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit' size='big' className='w-full'>
            회원 추가
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddMemberModal;
