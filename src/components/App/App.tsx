import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className=" container mx-auto  min-h-screen flex flex-col">
      <Header />

      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
