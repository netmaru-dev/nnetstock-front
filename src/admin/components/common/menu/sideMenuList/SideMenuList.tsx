import { useLocation } from 'react-router-dom';
import { SIDE_MENU_ITEMS } from '@/admin/constants/menu';
import MenuItem from '@/common/components/ui/menuItem/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useMenuStore } from '@/admin/store/menuStore';

interface SideMenuListProps {
  menuKey: string;
}

const SideMenuList = ({ menuKey }: SideMenuListProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { activeMenuPath } = useMenuStore();

  const currentSubMenuPath = location.pathname.split('/').filter(Boolean)[2] || null;
  const sideMenus = SIDE_MENU_ITEMS[menuKey] ?? [];

  const handleClick = (path: string) => {
    navigate(`${menuKey}/${path}`);
  };

  return (
    <ul className='flex select-none flex-col gap-8'>
      {sideMenus.map(item => (
        <MenuItem
          key={item.path}
          size='medium'
          label={item.label}
          isActive={activeMenuPath === menuKey && currentSubMenuPath === item.path}
          handleClick={() => handleClick(item.path)}
        />
      ))}
    </ul>
  );
};

export default SideMenuList;
