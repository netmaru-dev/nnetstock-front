import { Button } from '@/components/ui/button';

interface AccountStatusItemProps {
  icon: React.ReactNode;
  status: string;
  handleAccountComplete: () => void;
}

const AccountStatusItem = ({ icon, status, handleAccountComplete }: AccountStatusItemProps) => {
  return (
    <div className='flex items-center gap-2'>
      {icon}
      <span>{status}</span>
      {status === '미정산' && (
        <Button className='ml-5' onClick={handleAccountComplete}>
          정산 완료
        </Button>
      )}
    </div>
  );
};

export default AccountStatusItem;
