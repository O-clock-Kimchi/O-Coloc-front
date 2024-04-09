import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

function Dashboard() {
  const hasColoc = useAppSelector((state) => state.userReducer.colocId);
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);

  if (isLogged && !hasColoc) {
    return <Navigate to="/acces-coloc" replace />;
  }

  return <h1>Dashboard</h1>;
}

export default Dashboard;
