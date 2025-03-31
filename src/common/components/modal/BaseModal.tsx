import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useModalStore } from '@/admin/stores/modalStore';

interface BaseModalProps {
  description: string;
}

const BaseModal = ({ description }: BaseModalProps) => {
  const { open, title, closeModal } = useModalStore();

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className='py-10 sm:max-w-[350px]'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className='text-center whitespace-pre-line'>{description}</div>
      </DialogContent>
    </Dialog>
  );
};

export default BaseModal;
