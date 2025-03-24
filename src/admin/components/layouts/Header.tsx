import Logo from '@/common/components/ui/logo/Logo';
import MenuList from '../common/menu/menuList/MenuList';
import ModeList from '../common/menu/modeList/ModeList';
import PersonalMenuList from '../common/menu/personalMenuList/PersonalMenuList';

const Header = () => {
  return (
    <header className='flex justify-between bg-bg_night p-8'>
      <div className='flex gap-10'>
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
