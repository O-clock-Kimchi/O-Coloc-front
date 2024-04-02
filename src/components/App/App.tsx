import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className=" container mx-auto  min-h-screen flex flex-col">
      <Header />

      <main className="px-6 grow">
        <HomePage />
      </main>

      <Footer />
    </div>
  );
}

export default App;
