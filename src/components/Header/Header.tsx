import { Button } from '../ui/button';

import NavDesktop from './Header_NavDesktop';

function Header() {
  return (
    <header className="flex items-center flex-wrap justify-between py-4 mb-6 px-6 w-full">
      <div>
        <a href="##" title="">
          <img
            className="w-14 md:w-28 lg:w-40"
            src="/logo_cropped.png"
            alt="Logo de CoHabit"
          />
        </a>
      </div>

      <div>
        <NavDesktop />
      </div>

      <Button variant="outline">Se connecter</Button>
    </header>
  );
}

export default Header;
