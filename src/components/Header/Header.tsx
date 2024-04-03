import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

import NavDesktop from './Header_NavDesktop';
import NavMobile from './Header_NavMobile';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function Header() {
  const [isConnected, setIsConnected] = useState<boolean>(false);

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
        <>
          <div className="hidden lg:block">
            <NavDesktop isConnected={isConnected} />
          </div>

          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="bg-[#000]"></AvatarFallback>
            </Avatar>

            <NavMobile isConnected={isConnected} />
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
