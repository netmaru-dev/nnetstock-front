import { useState } from 'react';
import MenuItem from '@/common/components/ui/menuItem/MenuItem';
import { MENU_ITEMS } from '@/admin/constants/menu';
import { useNavigate } from 'react-router-dom';

const MenuList = () => {
  const [activeIdx, setActiveIdx] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    setActiveIdx(path);
    navigate(path);
  };

  return (
    <nav className='flex items-center justify-center'>
      <ul className='flex select-none gap-10'>
        {MENU_ITEMS.map(item => (
          <MenuItem
            key={item.path}
            size='medium'
            label={item.label}
            isActive={activeIdx === item.path}
            onClick={() => handleClick(item.path)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MenuList;
