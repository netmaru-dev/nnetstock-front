import { Routes, Route } from 'react-router-dom';
import AdminApp from '../admin/AdminApp';
import SiteManagePage from '@/admin/pages/site/SiteManagePage';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AdminApp />}>
        <Route index element={<h1>admin main</h1>} />
        <Route path='/site' element={<SiteManagePage />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
