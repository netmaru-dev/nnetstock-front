import Sun from '@/common/components/ui/icons/Sun';
import Moon from '@/common/components/ui/icons/Moon';
import { useState } from 'react';

const ModeList = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className='flex items-center gap-6 text-2xl'>
      <button onClick={handleToggle} className='cursor-pointer'>
        <Sun isActive={!isDarkMode} />
      </button>
      <button onClick={handleToggle} className='cursor-pointer'>
        <Moon isActive={isDarkMode} />
      </button>
    </div>
  );
};

export default ModeList;
