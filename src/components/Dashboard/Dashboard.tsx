import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

import ColocationManagementWidget from './Dashboard_ColocManagementWidget';
import TodoListWidget from './Dashboard_TodoListWidget';
import MyProfileWidget from './Dashboard_MyProfileWidget';

function Dashboard() {
  // const hasColoc = useAppSelector((state) => state.userReducer.colocId);
  // const isLogged = useAppSelector((state) => state.userReducer.isLogged);

  // if (isLogged && !hasColoc) {
  //   return <Navigate to="/acces-coloc" replace />;
  // }
  return (
    <main className="px-6 flex flex-col p-6 bg-jet-50 space-y-6 rounded-2xl border-solid border-eden-800 border-2">
      <h2 className="title text-3xl text-center">
        Bienvenue sur le dashboard de la coloc&rsquo; Kimchi !
      </h2>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-8 w-full grow">
        <ColocationManagementWidget />
        <TodoListWidget />
        <MyProfileWidget />
      </div>
    </main>
  );
}

export default Dashboard;
