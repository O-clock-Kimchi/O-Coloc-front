import { MoveUp } from 'lucide-react';
import { Button } from '../ui/button';

function ToTopButton() {
  return (
    <div className="flex flex-col button-container justify-center items-center bg space-y-2 w-auto">
      <Button className="flex flex-col w-15 bg-tainoi-300 hover:bg-tainoi-100">
        <MoveUp />
      </Button>
    </div>
  );
}

export default ToTopButton;
