import { useLocation } from 'react-router-dom';
import SideMenuList from '../common/menu/sideMenuList/SideMenuList';

const SideMenu = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const topPath = pathname.split('/')[2] || 'home';

  return (
    <nav className='flex h-full w-60 items-start justify-center bg-bg_night px-8 py-16'>
      <SideMenuList menuKey={topPath} />
    </nav>
  );
};

export default SideMenu;
