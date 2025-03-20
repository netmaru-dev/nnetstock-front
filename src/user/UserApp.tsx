import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';

const queryClient = new QueryClient();

const UserApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </QueryClientProvider>
  );
};

export default UserApp;
