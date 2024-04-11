import ColocationManagementWidget from './Dashboard_ColocManagementWidget';
import TodoListWidget from './Dashboard_TodoListWidget';
import MyProfileWidget from './Dashboard_MyProfileWidget';

function Dashboard() {
  const hasColoc = useAppSelector((state) => state.userReducer.colocId);
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);

  if (isLogged && !hasColoc) {
    return <Navigate to="/acces-coloc" replace />;
  }
  return (
    <main className="px-6 flex flex-col p-12 space-y-6 rounded-xl  h-full grow bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] ">
      <h2 className=" title text-3xl text-center">
        Bienvenue sur le dashboard de la coloc&rsquo; Kimchi&nbsp;!{' '}
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
