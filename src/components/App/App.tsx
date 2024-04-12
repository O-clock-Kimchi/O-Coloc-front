import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logout } from '../../store/action/actions';
import ScreenSize from '../DevComponent/ScreenSize';

function App() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.userReducer.user.userId);
  const navigate = useNavigate();
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);
  // Logout User after one hour
  useEffect(() => {
    let sessionTimeOut: string | number | NodeJS.Timeout | undefined;

    const SESSION_DURATION = 1000 * 60 * 60; // 1 heure in milliseconds

    if (isLogged && userId) {
      // Start session timer
      sessionTimeOut = setTimeout(() => {
        dispatch(logout(userId));
        navigate('/connexion', { replace: true });
      }, SESSION_DURATION);

      // Clear the timeout when the component unmounts or when isLogged changes
      return () => {
        clearTimeout(sessionTimeOut);
      };
    }

    return undefined;
  }, [dispatch, isLogged, navigate, userId]);

  return (
    <div className=" container mx-auto  min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <ScreenSize />
      <Footer />
    </div>
  );
}

export default App;
