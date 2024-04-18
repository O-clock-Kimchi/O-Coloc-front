import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import ColocationManagementWidget from './Dashboard_ColocManagementWidget';
import TodoListWidget from './Dashboard_TodoListWidget';
import MyProfileWidget from './Dashboard_MyProfileWidget';
import {
  getColoc,
  getFlatmates,
  getAllTasks,
} from '../../store/action/actions';
import SkeletonDashboard from './Dashboard_Skeleton-Loading';

function Dashboard() {
  const dispatch = useAppDispatch();
  const { colocId } = useParams();
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);
  const tasksList = useAppSelector((state) => state.tasksReducer.tasksList);
  const nameColoc = useAppSelector(
    (state) => state.colocReducer.coloc.nameColoc
  );
  const isLoading = useAppSelector((state) => state.colocReducer.isLoading);

  useEffect(() => {
    if (colocId) {
      const parsedColocId = parseInt(colocId, 10);
      dispatch(getColoc(parsedColocId));
      dispatch(getFlatmates(parsedColocId));
      dispatch(getAllTasks(parsedColocId));
    }
  }, [colocId, dispatch]);

  if (isLogged && !colocId) {
    return <Navigate to="/acces-coloc" replace />;
  }
  if (isLoading || tasksList === undefined) {
    return <SkeletonDashboard />;
  }

  return (
    <main className="px-6 flex flex-col p-12 space-y-6 rounded-xl  h-full grow bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] ">
      <h2 className=" title text-3xl text-center">
        Bienvenue sur le dashboard de la coloc {nameColoc}!{' '}
      </h2>
      <div className="grid grid-rows-1 grid-cols-1 p-12 lg:p-0 lg:grid-cols-3 gap-8 w-full grow">
        <ColocationManagementWidget />
        <TodoListWidget />
        <MyProfileWidget />
      </div>
    </main>
  );
}

export default Dashboard;
