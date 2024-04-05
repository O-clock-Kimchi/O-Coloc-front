import { Navigate, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useAppSelector } from '../../hooks/redux';

function App() {
  return (
    <div className=" container mx-auto  min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
