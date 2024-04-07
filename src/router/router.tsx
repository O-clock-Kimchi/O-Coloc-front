import { createBrowserRouter } from 'react-router-dom';

import App from '../components/App/App';
import HomePage from '../components/HomePage/HomePage';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import NotFoundPage from '../components/NotFoundPage.tsx/NotFoundPage';
import ResetPasswordForm from '../components/ResetPassword/ResetPasswordForm';
import Colocation from '../components/Colocation/Colocation';
import Profil from '../components/Profil/Profil';
import Dashboard from '../components/Dashboard/Dashboard';
import PrivatesRoutes from '../components/PrivateRoutes/PrivatesRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/connexion', element: <Login /> },
      { path: '/inscription', element: <Signup /> },
      {
        element: <PrivatesRoutes />,
        children: [
          { path: '/dashboard', element: <Dashboard /> },
          { path: '/reinitialisation', element: <ResetPasswordForm /> },
          { path: '/acces-coloc', element: <Colocation /> },
          { path: '/mon-profil', element: <Profil /> },
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
  },
]);

export default router;
