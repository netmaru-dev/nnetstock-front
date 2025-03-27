import { SIDE_MENU_ITEMS } from '@/admin/constants/menu';
import MenuItem from '@/common/components/ui/menuItem/MenuItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SideMenuListProps {
  menuKey: string;
}

const SideMenuList = ({ menuKey }: SideMenuListProps) => {
  const [activeIdx, setActiveIdx] = useState<string | null>(null);
  const sideMenus = SIDE_MENU_ITEMS[menuKey] ?? [];

  const navigate = useNavigate();

  const handleClick = (path: string) => {
    setActiveIdx(path);
    navigate(`${menuKey}/${path}`);
  };

  return (
    <ul className='flex select-none flex-col gap-8'>
      {sideMenus.map(item => (
        <MenuItem
          key={item.path}
          size='medium'
          label={item.label}
          isActive={activeIdx === item.path}
          onClick={() => handleClick(item.path)}
        />
      ))}
    </ul>
  );
};

export default SideMenuList;
