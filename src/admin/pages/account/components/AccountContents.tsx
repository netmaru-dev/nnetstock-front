import { MdAttachMoney } from 'react-icons/md';
import { FaCircleCheck } from 'react-icons/fa6';
import AccountInfoItem from './AccountInfoItem';
import AccountStatusItem from './AccountStatusItem';

interface AccountContentsProps {
  // 총 판매 금액
  totalSales: number;
  // 작가 배당 금액
  creatorDividend: number;
  // 제세공과금
  tax: number;
  // 정산 금액
  account: number;
  // 정산 상태
  status: string;
  // 정산 완료 버튼 클릭 함수
  handleAccountComplete: () => void;
}

const AccountContents = ({
  totalSales,
  creatorDividend,
  tax,
  account,
  status,
  handleAccountComplete,
}: AccountContentsProps) => {
  return (
    <div className='flex flex-col gap-4 p-2'>
      <div className='flex items-center justify-evenly'>
        <AccountInfoItem
          icon={<MdAttachMoney />}
          label='총 판매 금액'
          value={`${totalSales.toLocaleString()}원`}
        />
        <AccountInfoItem
          icon={<MdAttachMoney />}
          label='작가 배당 금액'
          value={`${creatorDividend.toLocaleString()}원`}
        />
        <AccountInfoItem
          icon={<MdAttachMoney />}
          label='제세공과금'
          value={`${tax.toLocaleString()}원`}
        />
        <AccountInfoItem
          icon={<MdAttachMoney />}
          label='정산 금액'
          value={`${account.toLocaleString()}원`}
        />
      </div>
      <div className='flex items-center justify-center gap-2'>
        <AccountStatusItem
          icon={<FaCircleCheck />}
          status={status}
          handleAccountComplete={handleAccountComplete}
        />
      </div>
    </div>
  );
};

export default AccountContents;
