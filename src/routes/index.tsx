import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';
import CreatorRoutes from './CreatorRoutes';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserRoutes />} />
        <Route path='/*' element={<UserRoutes />} />
        {/* TODO 권한 확인 */}
        <Route path='/admin/*' element={<AdminRoutes />} />
        <Route path='/creator/*' element={<CreatorRoutes />} />

        {/* 에러 페이지 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
