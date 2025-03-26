import { createBrowserRouter } from 'react-router-dom';
import CreatorApp from '@/creator/CreatorApp';
import PrivateRouter from './PrivateRouter';
import DashBoardPage from '@/admin/pages/dashboard/DashboardPage';
import SiteManagePage from '@/admin/pages/site/SiteManagePage';
import PageManagePage from '@/admin/pages/site/PageManagePage';
import MainPage from '@/user/pages/main/MainPage';
import UserApp from '@/user/UserApp';
import AdminApp from '@/admin/AdminApp';

// TODO 불필요하면 삭제
// const RootLayout = () => {
//   return (
//     <>
//       <Outlet />
//     </>
//   );
// };

export const router = createBrowserRouter([
  {
    path: '/',
    // element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <UserApp />,
        children: [
          {
            index: true,
            element: <MainPage />,
          },
          {
            path: 'cart',
            element: <PrivateRouter>{/* <CartPage /> */}</PrivateRouter>,
          },
        ],
      },
      {
        path: 'admin',
        element: (
          <PrivateRouter role='admin'>
            <AdminApp />
          </PrivateRouter>
        ),
        children: [
          {
            index: true,
            element: <DashBoardPage />,
          },
          {
            path: 'site-manage',
            children: [
              {
                index: true,
                element: <SiteManagePage />,
              },
              {
                path: 'site',
                element: <SiteManagePage />,
              },
              {
                path: 'page',
                element: <PageManagePage />,
              },
            ],
          },
        ],
      },
      {
        path: 'creator',
        element: (
          <PrivateRouter role='creator'>
            <CreatorApp />
          </PrivateRouter>
        ),
        children: [
          {
            index: true,
            element: <h1>creator main</h1>,
          },
        ],
      },
    ],
  },
]);
