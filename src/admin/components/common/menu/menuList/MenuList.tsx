import { useState } from 'react';
import MenuItem from '@/common/components/ui/menuItem/MenuItem';

const MenuList = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <nav className='flex select-none items-center gap-8'>
      {/* TODO 상수화 */}
      {['홈', '스톡 관리', '판매 현황', '정산 관리', '회원 관리', '게시판', '사이트 관리'].map(
        (item, idx) => (
          <MenuItem
            key={idx}
            size='large'
            label={item}
            isActive={activeIdx === idx}
            onClick={() => setActiveIdx(idx)}
          />
        )
      )}
    </nav>
  );
};

export default MenuList;
