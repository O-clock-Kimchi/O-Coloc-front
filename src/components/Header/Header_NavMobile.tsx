import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';

import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

interface NavMobileProps {
  isConnected: boolean;
}

function NavMobile({ isConnected }: NavMobileProps) {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Button>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className=" w-[100vw] sm:w-[400px] text-3xl">
          <SheetHeader>Menu</SheetHeader>
          <Separator className=" mt-5" />
          {!isConnected ? (
            <nav className="flex flex-col gap-5 py-6 items-center sm:items-start">
              <a href="#faq-menu">FAQs</a>
              <Separator />
              <a href="#faq-menu">À propos de nous</a>
              <Separator />
              <a href="#faq-menu">Contact</a>
              <Separator />
              <NavLink to="/inscription">Créer une coloc</NavLink>
              <Separator />
            </nav>
          ) : (
            <div className="vertical gap-8">
              <nav className="flex flex-col gap-5 py-6 items-center sm:items-start">
                <NavLink to="/mon-profil">Mon profil</NavLink>
                <Separator />
                <NavLink to="/">Gérer ma coloc</NavLink>
                <Separator />
                <NavLink to="/">Dashboard</NavLink>
                <Separator />
                <NavLink to="/inscription">Rejoindre une coloc</NavLink>
                <Separator />
              </nav>

              <Button className=" p-7">Se déconnecter</Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default NavMobile;
