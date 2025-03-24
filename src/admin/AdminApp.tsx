import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import Header from './components/layouts/Header';

const queryClient = new QueryClient();

const AdminApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
      <h1 className='text-primary text-2xl'>nnetstock admin route</h1>
      {/* <Footer /> */}
    </QueryClientProvider>
  );
};

export default AdminApp;
