import Header from './components/layouts/Header';
import SideMenu from './components/layouts/SideMenu';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <main className='flex flex-1'>
        <SideMenu />
        <div className='flex-1 p-10'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
