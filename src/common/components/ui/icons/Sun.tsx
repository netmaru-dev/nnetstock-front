import { RxSun } from 'react-icons/rx';

interface SunProps {
  isActive?: boolean;
}

const Sun = ({ isActive }: SunProps) => {
  return (
    <RxSun
      className={`flex items-center justify-center ${isActive ? 'text-primary' : 'text-white'} hover:text-primary`}
    />
  );
};

export default Sun;
