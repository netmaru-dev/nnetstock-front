import { useState } from 'react';
import MenuItem from '@/common/components/ui/menuItem/MenuItem';

const MENU_ITEMS = [
  { id: 'home', label: '홈' },
  { id: 'stock', label: '스톡 관리' },
  { id: 'sales', label: '판매 현황' },
  { id: 'settlement', label: '정산 관리' },
  { id: 'members', label: '회원 관리' },
  { id: 'board', label: '게시판' },
  { id: 'site', label: '사이트 관리' },
];

const MenuList = () => {
  const [activeIdx, setActiveIdx] = useState<string | null>(null);

  return (
    <nav className='flex items-center justify-center'>
      <ul className='flex select-none gap-10'>
        {MENU_ITEMS.map(item => (
          <MenuItem
            key={item.id}
            size='large'
            label={item.label}
            isActive={activeIdx === item.id}
            onClick={() => setActiveIdx(item.id)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MenuList;
