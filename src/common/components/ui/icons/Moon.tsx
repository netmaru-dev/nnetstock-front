import { BsMoonStars } from 'react-icons/bs';

interface MoonProps {
  isActive?: boolean;
}

const Moon = ({ isActive }: MoonProps) => {
  return (
    <BsMoonStars
      className={`flex items-center justify-center ${isActive ? 'text-main' : 'text-white'} hover:text-main`}
    />
  );
};

export default Moon;
