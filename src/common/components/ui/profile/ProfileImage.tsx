import defaultPerson from '@/common/assets/images/default-person.jpg';

const ProfileImage = () => {
  return (
    <div className='size-10 overflow-hidden rounded-full'>
      <img className='h-full w-full' src={defaultPerson} alt='profileImage' />
    </div>
  );
};

export default ProfileImage;
