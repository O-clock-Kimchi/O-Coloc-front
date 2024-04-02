import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

import { Button } from '../ui/button';

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
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="#"
              >
                Accueil
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="#faq-menu"
              >
                FAQ
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="#about-menu"
              >
                À propos de nous
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="#contact-menu"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Button variant="outline">Se connecter</Button>
    </header>
  );
}

export default Header;
