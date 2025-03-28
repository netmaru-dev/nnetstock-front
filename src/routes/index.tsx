import { createBrowserRouter } from 'react-router-dom';
import CreatorApp from '@/creator/CreatorApp';
import PrivateRouter from './PrivateRouter';
import DashBoardPage from '@/admin/pages/home/DashboardPage';
import SiteManagePage from '@/admin/pages/site/SiteManagePage';
import PageManagePage from '@/admin/pages/site/PageManagePage';
import MainPage from '@/user/pages/main/MainPage';
import UserApp from '@/user/UserApp';
import AdminApp from '@/admin/AdminApp';
import StockManagePage from '@/admin/pages/stock/StockManagePage';
import SalesStatusPage from '@/admin/pages/sales/SalesStatusPage';
import SettlementPage from '@/admin/pages/settlement/SettlementPage';
import MemberManagePage from '@/admin/pages/member/MemberManagePage';
import BoardPage from '@/admin/pages/board/BoardPage';
import PageNewPage from '@/admin/pages/site/PageNewPage';
import PageEditPage from '@/admin/pages/site/PageEditPage';
import MemberDetailPage from '@/admin/pages/member/MemberDetailPage';

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
            path: 'home',
            element: <DashBoardPage />,
          },
          {
            path: 'stock',
            element: <StockManagePage />,
          },
          {
            path: 'sales',
            element: <SalesStatusPage />,
          },
          {
            path: 'settlement',
            element: <SettlementPage />,
          },
          {
            path: 'member',
            children: [
              {
                index: true,
                element: <MemberManagePage />,
              },
              {
                path: 'list',
                element: <MemberManagePage />,
              },
              {
                path: 'detail',
                element: <MemberDetailPage />,
              },
            ],
          },
          {
            path: 'board',
            element: <BoardPage />,
          },
          {
            path: 'site',
            children: [
              {
                index: true,
                element: <PageManagePage />,
              },
              {
                path: 'site-manage',
                element: <SiteManagePage />,
              },
              {
                path: 'page-manage',
                children: [
                  { index: true, element: <PageManagePage /> },
                  { path: 'new', element: <PageNewPage /> },
                  { path: ':pageId/edit', element: <PageEditPage /> },
                ],
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
