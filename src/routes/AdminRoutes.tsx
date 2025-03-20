import { Routes, Route } from 'react-router-dom';
import AdminApp from '../admin/AdminApp';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AdminApp />}>
        <Route index element={<h1>admin main</h1>} />
        {/* <Route path='' element={} /> */}
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
