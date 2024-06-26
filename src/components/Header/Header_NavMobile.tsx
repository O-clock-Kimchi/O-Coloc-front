// import UI components
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

// import custom elements
import { useAppSelector } from '../../hooks/redux';

function NavMobile() {
  const colocId = useAppSelector((state) => state.userReducer.user.colocId);
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Button>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className=" w-[100vw] sm:w-[400px] text-3xl dark:text-jet-50">
          <SheetHeader>Menu</SheetHeader>
          <Separator className=" mt-5" />
          {!isLogged ? (
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
                <NavLink to="/">Ma coloc</NavLink>
                <Separator />
                <NavLink to={`/dashboard/${colocId}`}>Dashboard</NavLink>
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
