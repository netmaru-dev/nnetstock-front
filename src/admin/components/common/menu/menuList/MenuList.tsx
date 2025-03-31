import { useEffect } from 'react';
import MenuItem from '@/common/components/ui/menuItem/MenuItem';
import { MENU_ITEMS } from '@/admin/constants/menu';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMenuStore } from '@/admin/stores/menuStore';

const MenuList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { activeMenuPath, setActiveMenuPath, initializeFromUrl } = useMenuStore();

  useEffect(() => {
    initializeFromUrl(location.pathname);
  }, [location.pathname, initializeFromUrl]);

  const handleClick = (path: string) => {
    setActiveMenuPath(path);
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
            isActive={activeMenuPath === item.path}
            handleClick={() => handleClick(item.path)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MenuList;
