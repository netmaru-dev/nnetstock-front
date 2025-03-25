import { Routes, Route } from 'react-router-dom';
import AdminApp from '../admin/AdminApp';
import SiteManagePage from '@/admin/pages/site/SiteManagePage';
import PageManagePage from '@/admin/pages/site/PageManagePage';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AdminApp />}>
        <Route index element={<h1>admin main</h1>} />
        <Route path='/site' element={<SiteManagePage />} />
        <Route path='/page' element={<PageManagePage />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
