import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function PrivatesRoutes() {
  const location = useLocation();
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);

  return isLogged ? (
    <Outlet />
  ) : (
    <>
      <Header />
      <Navigate to="/connexion" replace state={{ from: location }} />
      <Footer />
    </>
  );
}

export default PrivatesRoutes;
