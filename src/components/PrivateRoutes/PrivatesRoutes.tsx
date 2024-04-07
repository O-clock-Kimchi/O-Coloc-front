import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

function PrivatesRoutes() {
  const location = useLocation();
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);

  return isLogged ? (
    <Outlet />
  ) : (
    <Navigate to="/connexion" replace state={{ from: location }} />
  );
}

export default PrivatesRoutes;
