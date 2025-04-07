import { AUTHORITY_OPTIONS } from '@/admin/constants/common';
import InputWithLabel from '@/common/components/ui/input/inputWithLabel/InputWithLabel';
import SelectBoxWithLabel from '@/common/components/ui/select/selectBoxWithLabel/SelectBoxWithLabel';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';

interface AddBoardModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerText: string;
  handleSave: () => void;
}

const AddBoardModal = ({ open, onOpenChange, triggerText, handleSave }: AddBoardModalProps) => {
  const [writeAccess, setWriteAccess] = useState<string>('');
  const [readAccess, setReadAccess] = useState<string>('');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button size='lg'>{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[550px]'>
        <DialogHeader className='pb-4'>
          <DialogTitle>{triggerText}</DialogTitle>
        </DialogHeader>
        <div>
          <InputWithLabel
            label='게시판명'
            labelSize='small'
            id='title'
            placeholder='게시판명을 입력하세요.'
            icon={false}
          />
          <InputWithLabel
            label='게시판 아이디'
            labelSize='small'
            id='boardId'
            placeholder='입력하신 아이디가 게시판의 주소가 됩니다.'
            icon={false}
          />
          <SelectBoxWithLabel
            label='쓰기 권한'
            labelSize='small'
            options={[...AUTHORITY_OPTIONS]}
            value={
              writeAccess
                ? AUTHORITY_OPTIONS.find(option => option.value === writeAccess)?.label || ''
                : ''
            }
            handleValueChange={setWriteAccess}
          />
          <SelectBoxWithLabel
            label='읽기 권한'
            labelSize='small'
            options={[...AUTHORITY_OPTIONS]}
            value={
              readAccess
                ? AUTHORITY_OPTIONS.find(option => option.value === readAccess)?.label || ''
                : ''
            }
            handleValueChange={setReadAccess}
          />
        </div>
        <DialogFooter>
          <Button type='submit' size='full' onClick={handleSave}>
            저장
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddBoardModal;
