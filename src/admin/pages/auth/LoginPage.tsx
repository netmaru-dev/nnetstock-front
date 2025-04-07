// import { useUserStore } from '@/admin/stores/userStore';

import TitleTextItem from '@/common/components/ui/textItem/TitleTextItem';
// const LoginPage = () => {
//   const { setUserId } = useUserStore();

//   const handleLogin = async (credentials: LoginCredentials) => {
//     try {
//       const response = await authService.login(credentials);
//       if (response.success) {
//         setUserId(response.data.userId);
//         navigate('/admin/dashboard');
//       }
//     } catch (error) {
//       console.error('로그인 실패:', error);
//     }
//   };
// };

const LoginPage = () => {
  return (
    <div className='flex flex-col gap-10'>
      <TitleTextItem label='로그인' />
      <div className='flex flex-col gap-5'></div>
    </div>
  );
};

export default LoginPage;
