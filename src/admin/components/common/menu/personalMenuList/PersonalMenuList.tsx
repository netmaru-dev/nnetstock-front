import { useEffect, useState } from 'react';
import ProfileImage from '@/common/components/ui/profile/ProfileImage';
import TextItem from '@/common/components/ui/textItem/TextItem';
import MenuItem from '@/common/components/ui/menuItem/MenuItem';
import { useNavigate } from 'react-router-dom';

const PersonalMenuList = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>('');
  useEffect(() => {
    setUserName('김철수');
  }, []);

  return (
    <>
      <nav className='flex items-center gap-6 text-white'>
        <ProfileImage />
        <TextItem size='large' label={userName} className='text-white' />
        <MenuItem size='medium' label='내 정보' handleClick={() => navigate('/admin/my-page')} />
        <MenuItem size='medium' label='로그인' handleClick={() => navigate('/admin/login')} />
      </nav>
    </>
  );
};

export default PersonalMenuList;
