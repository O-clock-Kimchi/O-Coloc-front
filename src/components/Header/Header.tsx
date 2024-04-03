import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

import NavDesktop from './Header_NavDesktop';
import NavMobile from './Header_NavMobile';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { ChevronDown, SquareArrowRight } from 'lucide-react';

function Header() {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  return (
    <header className="flex items-center flex-wrap justify-between py-4 mb-4 px-6 w-full">
      <div>
        <NavLink to="/">
          <img
            className="w-14 md:w-28 lg:w-40"
            src="/logo_cropped.png"
            alt="Logo de CoHabit"
          />
        </NavLink>
      </div>

      {!isConnected ? (
        <>
          <div className="hidden lg:block">
            <NavDesktop isConnected={isConnected} />
          </div>

          <div className="flex gap-4">
            <NavLink to="/connexion">
              <Button variant="outline">Se connecter</Button>
            </NavLink>

            <NavMobile isConnected={isConnected} />
          </div>
        </>
      ) : (
        <div className="flex gap-4 items-center">
          <p>
            Bonjour, <span className=" text-tainoi-200">Florian</span>
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="p-2">
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" text-center vertical items-center gap-2">
              <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
              <DropdownMenuItem>
                <NavLink to="/mon-profil">Mon profil</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to="/mon-profil">Ma coloc</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className=" bg-tainoi-200">
                  <SquareArrowRight className=" pr-2" />
                  Se déconnecter
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-[#000]"></AvatarFallback>
          </Avatar>
        </div>
      )}
    </header>
  );
}

export default Header;
