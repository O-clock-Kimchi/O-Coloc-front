import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { toast } from '../ui/use-toast';
import { Toaster } from '../ui/toaster';

function Dashboard() {
  const hasColoc = useAppSelector((state) => state.userReducer.user.colocId);
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);

  if (isLogged && !hasColoc) {
    return <Navigate to="/acces-coloc" replace />;
  }

  return <h1>Dashboard</h1>;
}

export default Dashboard;
