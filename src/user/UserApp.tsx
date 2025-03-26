import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserLayout from './UserLayout';

const queryClient = new QueryClient();

const UserApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserLayout />
    </QueryClientProvider>
  );
};

export default UserApp;
