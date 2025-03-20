import { Routes, Route } from 'react-router-dom';
import UserApp from '../user/UserApp';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<UserApp />}>
        <Route index element={<h1>user main</h1>} />
        {/* <Route path='' element={} /> */}
      </Route>
    </Routes>
  );
};

export default UserRoutes;
