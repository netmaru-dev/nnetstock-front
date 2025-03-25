import MenuItem from '@/common/components/ui/menuItem/MenuItem';
import { useState } from 'react';

const SIDE_MENU_ITEMS = [
  { id: 'site', label: '사이트 관리' },
  { id: 'page', label: '페이지 관리' },
];

const SideMenuList = () => {
  const [activeIdx, setActiveIdx] = useState<string | null>(null);

  return (
    <ul className='flex select-none flex-col gap-8'>
      {SIDE_MENU_ITEMS.map(item => (
        <MenuItem
          key={item.id}
          size='medium'
          label={item.label}
          isActive={activeIdx === item.id}
          onClick={() => setActiveIdx(item.id)}
        />
      ))}
    </ul>
  );
};

export default SideMenuList;
