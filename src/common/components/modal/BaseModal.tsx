import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface InputModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  // triggerText: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const BaseModal = ({
  open,
  onOpenChange,
  // triggerText,
  title,
  description,
  children,
}: InputModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* <DialogTrigger asChild>
        <Button size='lg'>{triggerText}</Button>
      </DialogTrigger> */}
      <DialogContent className='sm:max-w-[300px]'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default BaseModal;
