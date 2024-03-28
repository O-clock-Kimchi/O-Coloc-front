import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';

function App() {
  return (
    <div className=" md:container md:mx-auto  border-2">
      <header className="App-header">
        <h1 className=" text-red-500 text-5xl">Hello World!</h1>
        <Button>
          TESTEZ MOI <ArrowRightIcon />
        </Button>
        <Button variant="outline" size="lg">
          ENCORE 1
        </Button>
        <Button variant="secondary">ENCORE</Button>
      </header>
    </div>
  );
}

export default App;
