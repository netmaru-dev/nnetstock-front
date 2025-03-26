import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouterProps {
  children?: ReactElement;
  role?: string;
}

const useAuth = () => {
  return true;
};

const useUserRole = () => {
  return 'admin';
};

const PrivateRouter = ({ role, children }: PrivateRouterProps) => {
  const isLoggedIn = useAuth();
  const userRole = useUserRole();

  if (role && !isLoggedIn) {
    return <Navigate to='/login' />;
  }

  if (role && userRole !== role) {
    return <Navigate to='/' />;
  }

  return <>{children}</>;
};

export default PrivateRouter;
