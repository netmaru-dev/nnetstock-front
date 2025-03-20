import { Routes, Route } from 'react-router-dom';
import CreatorApp from '../creator/CreatorApp';

const CreatorRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<CreatorApp />}>
        <Route index element={<h1>creator main</h1>} />
        {/* <Route path='' element={} /> */}
      </Route>
    </Routes>
  );
};

export default CreatorRoutes;
