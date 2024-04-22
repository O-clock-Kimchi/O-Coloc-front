import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

// import custom components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ReconnectPage from '../ReconnectPage/ReconnectPage';
import { ThemeProvider } from '../_ThemeProvider/theme-provider';

function App() {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('accessToken');
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);
  const navigate = useNavigate();
  const [reconnect, setReconnect] = useState<boolean>(false);

  // Decode function find here : "https://stackoverflow.com/questions/72584332/how-to-convert-token-jwt-to-object-in-reactjs"
  // At expiration time, logout the user and redirect on the login page

  useEffect(() => {
    if (isLogged && token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = decodedToken.exp * 1000;
      const currentTime = Date.now();

      if (currentTime < expirationTime) {
        // To trigger the logout just before the token expire
        const timeout = expirationTime - currentTime - 30000;
        const logoutTimer = setTimeout(() => {
          setReconnect(true);
        }, timeout);

        // To clear the time afterwards
        return () => clearTimeout(logoutTimer);
      }
    }

    return undefined;
  }, [dispatch, isLogged, navigate, token, setReconnect]);

  // Logout User after one hour

  return (
    <div className=" container mx-auto  min-h-screen flex flex-col dark:bg-jet-950">
      <ThemeProvider>
        <Header />
        {reconnect ? <ReconnectPage setReconnect={setReconnect} /> : <Outlet />}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
