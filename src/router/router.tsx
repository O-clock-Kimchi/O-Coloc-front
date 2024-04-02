import { createBrowserRouter } from 'react-router-dom';

import App from '../components/App/App';
import HomePage from '../components/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/connexion' },
      { path: '/inscription' },
      // { path: '*'},
    ],
  },
]);

export default router;
