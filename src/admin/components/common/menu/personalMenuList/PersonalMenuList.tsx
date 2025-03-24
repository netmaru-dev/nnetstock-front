import { useEffect, useState } from 'react';
import ProfileImage from '@/common/components/ui/profile/ProfileImage';
import TextItem from '@/common/components/ui/textItem/TextItem';
import MenuItem from '@/common/components/ui/menuItem/MenuItem';

const PersonalMenuList = () => {
  const [userName, setUserName] = useState<string>('');
  useEffect(() => {
    setUserName('김철수');
  }, []);

  return (
    <>
      <nav className='flex items-center gap-6 text-white'>
        <ProfileImage />
        <TextItem size='small' label={userName} className='text-white' />
        <MenuItem size='small' label='내 정보' />
        <MenuItem size='small' label='로그인' />
      </nav>
    </>
  );
};

export default PersonalMenuList;
