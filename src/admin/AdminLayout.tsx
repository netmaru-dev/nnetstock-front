import Header from './components/layouts/Header';
import SideMenu from './components/layouts/SideMenu';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <main>
        <SideMenu />
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AdminLayout;
