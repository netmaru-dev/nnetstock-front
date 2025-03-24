import SideMenuList from '../common/menu/sideMenuList/SideMenuList';

const SideMenu = () => {
  return (
    <nav className='flex h-full w-60 items-start justify-center bg-bg_night px-8 py-10'>
      <SideMenuList />
    </nav>
  );
};

export default SideMenu;
