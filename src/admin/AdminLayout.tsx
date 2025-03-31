import BaseModal from '@/common/components/modal/BaseModal';
import Header from './components/layouts/Header';
import SideMenu from './components/layouts/SideMenu';
import { Outlet } from 'react-router-dom';
import { useModalStore } from './stores/modalStore';

const AdminLayout = () => {
  const { description } = useModalStore();

  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main>
        <SideMenu />
        <section>
          <Outlet />
          <BaseModal description={description} />
        </section>
      </main>
    </div>
  );
};

export default AdminLayout;
