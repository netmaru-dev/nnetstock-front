import Logo from '@/common/components/ui/logo/Logo';
import MenuList from '../common/menu/menuList/MenuList';
import PersonalMenuList from '../common/menu/personalMenuList/PersonalMenuList';

const Header = () => {
  return (
    <header className='flex justify-between h-24 px-8 py-0 bg-bg_night'>
      <div className='flex items-center gap-16'>
        <Logo />
        <MenuList />
      </div>
      <div className='flex gap-6'>
        {/* <ModeList /> */}
        <PersonalMenuList />
      </div>
    </header>
  );
};

export default Header;
