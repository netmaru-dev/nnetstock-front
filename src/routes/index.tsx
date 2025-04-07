import { createBrowserRouter, Navigate } from 'react-router-dom';
import CreatorApp from '@/creator/CreatorApp';
import PrivateRouter from './PrivateRouter';
import DashBoardPage from '@/admin/pages/home/DashboardPage';
import SiteManagePage from '@/admin/pages/site/SiteManagePage';
import PageManagePage from '@/admin/pages/site/PageManagePage';
import MainPage from '@/user/pages/main/MainPage';
import UserApp from '@/user/UserApp';
import AdminApp from '@/admin/AdminApp';
import MemberManagePage from '@/admin/pages/member/MemberManagePage';
import PageNewPage from '@/admin/pages/site/PageNewPage';
import PageEditPage from '@/admin/pages/site/PageEditPage';
import MemberDetailPage from '@/admin/pages/member/MemberDetailPage';
import AccountListPage from '@/admin/pages/account/AccountListPage';
import BoardListPage from '@/admin/pages/board/BoardListPage';
import BoardContentsPage from '@/admin/pages/board/BoardContentsPage';
import SalesListPage from '@/admin/pages/sales/SalesListPage';
import SalesRankingPage from '@/admin/pages/sales/SalesRankingPage';
import StockPendingPage from '@/admin/pages/stock/StockPendingPage';
import StockUploadPage from '@/admin/pages/stock/StockUploadPage';
import StockReviewPage from '@/admin/pages/stock/StockReviewPage';
import StockReadyPage from '@/admin/pages/stock/StockReadyPage';
import StockSalesPage from '@/admin/pages/stock/StockSalesPage';
import StockStopPage from '@/admin/pages/stock/StockStopPage';
import StockPackagePage from '@/admin/pages/stock/StockPackagePage';
import StockNetsScenePage from '@/admin/pages/stock/StockNetsScenePage';
import LoginPage from '@/admin/pages/auth/LoginPage';
import MyPage from '@/admin/pages/auth/MyPage';

// TODO 불필요하면 삭제
// const RootLayout = () => {
//   return (
//     <>
//       <Outlet />
//     </>
//   );
// };

export const router = createBrowserRouter(
  [
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
            // <PrivateRouter role='admin'>
            <AdminApp />
            // </PrivateRouter>
          ),
          children: [
            {
              path: 'login',
              element: <LoginPage />,
            },
            {
              path: 'my-page',
              element: <MyPage />,
            },
            {
              index: true,
              element: <Navigate to='home' replace />,
            },
            {
              path: 'home',
              element: <DashBoardPage />,
            },
            {
              path: 'stock',
              children: [
                {
                  index: true,
                  element: <Navigate to='upload' replace />,
                },
                {
                  path: 'upload',
                  element: <StockUploadPage />,
                },
                {
                  path: 'pending',
                  element: <StockPendingPage />,
                },
                {
                  path: 'review',
                  element: <StockReviewPage />,
                },
                {
                  path: 'ready',
                  element: <StockReadyPage />,
                },
                {
                  path: 'sales',
                  element: <StockSalesPage />,
                },
                {
                  path: 'stop',
                  element: <StockStopPage />,
                },
                {
                  path: 'package',
                  element: <StockPackagePage />,
                },
                {
                  path: 'nets-scene',
                  element: <StockNetsScenePage />,
                },
              ],
            },
            {
              path: 'sales',
              children: [
                {
                  index: true,
                  element: <Navigate to='list' replace />,
                },
                {
                  path: 'list',
                  element: <SalesListPage />,
                },
                {
                  path: 'ranking',
                  element: <SalesRankingPage />,
                },
              ],
            },
            {
              path: 'account',
              children: [
                {
                  index: true,
                  element: <Navigate to='list' replace />,
                },
                {
                  path: 'list',
                  element: <AccountListPage />,
                },
              ],
            },
            {
              path: 'member',
              children: [
                {
                  index: true,
                  element: <Navigate to='list' replace />,
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
              children: [
                {
                  index: true,
                  element: <Navigate to='list' replace />,
                },
                {
                  path: 'list',
                  element: <BoardListPage />,
                },
                {
                  path: 'contents',
                  element: <BoardContentsPage />,
                },
              ],
            },
            {
              path: 'site',
              children: [
                {
                  index: true,
                  element: <Navigate to='page-manage' replace />,
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
                    { path: 'edit/:pageId', element: <PageEditPage /> },
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
  ],
  {
    basename: '/stock_front/',
  }
);
