import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toast } from '../ui/use-toast';
import { Toaster } from '../ui/toaster';
import { getColoc } from '../../store/action/actions';

function Dashboard() {
  const dispatch = useAppDispatch();
  const { colocId } = useParams();
  const hasColoc = useAppSelector((state) => state.userReducer.user.colocId);
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);
  const nameColoc = useAppSelector((state) => state.colocReducer.nameColoc);
  const isLoading = useAppSelector((state) => state.colocReducer.isLoading);

  useEffect(() => {
    if (colocId) {
      const parsedColocId = parseInt(colocId, 10);
      dispatch(getColoc(parsedColocId));
      console.log('working', typeof parsedColocId);
      console.log('second coloc id', typeof hasColoc);
    }
  }, [colocId, dispatch, hasColoc]);

  if (isLogged && !colocId) {
    return <Navigate to="/acces-coloc" replace />;
  }

  if (isLoading) {
    return <h1>Je charge là...</h1>;
  }

  return <h1>Dashboard de {nameColoc}</h1>;
}

export default Dashboard;
