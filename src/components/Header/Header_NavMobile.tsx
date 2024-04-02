import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '../ui/sheet';

import { Button } from '../ui/button';

function NavMobile() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Button>
            <Menu />
          </Button>
        </SheetTrigger>
      </Sheet>
    </div>
  );
}

export default NavMobile;
