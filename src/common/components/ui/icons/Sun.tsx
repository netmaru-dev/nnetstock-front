import { RxSun } from 'react-icons/rx';

interface SunProps {
  isActive?: boolean;
}

const Sun = ({ isActive }: SunProps) => {
  return (
    <RxSun
      className={`flex items-center justify-center ${isActive ? 'text-main' : 'text-white'} hover:text-main`}
    />
  );
};

export default Sun;
