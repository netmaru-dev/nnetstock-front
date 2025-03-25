import Logo from '@/common/components/ui/logo/Logo';
import MenuList from '../common/menu/menuList/MenuList';
import ModeList from '../common/menu/modeList/ModeList';
import PersonalMenuList from '../common/menu/personalMenuList/PersonalMenuList';

const Header = () => {
  return (
    // <header className='flex justify-between p-8 bg-bg_night'>
    <header className='flex h-24 justify-between bg-bg_night px-8 py-0'>
      <div className='flex items-center gap-16'>
        <Logo />
        <MenuList />
      </div>
      <div className='flex gap-6'>
        <ModeList />
        <PersonalMenuList />
      </div>
    </header>
  );
};

export default Header;
