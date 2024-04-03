import { createBrowserRouter } from 'react-router-dom';

import App from '../components/App/App';
import HomePage from '../components/HomePage/HomePage';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import NotFoundPage from '../components/NotFoundPage.tsx/NotFoundPage';
import ResetPasswordForm from '../components/ResetPassword/ResetPasswordForm';
import Colocation from '../components/Colocation/Colocation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/connexion', element: <Login /> },
      { path: '/inscription', element: <Signup /> },
      { path: '/reinitilisation', element: <ResetPasswordForm /> },
      { path: '/acces-coloc', element: <Colocation /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default router;
