import { NavLink } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { Button } from '../ui/button';

interface NavDesktopProps {
  isConnected: boolean;
}

function NavDesktop({ isConnected }: NavDesktopProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {!isConnected ? (
          <>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="#"
              >
                <NavLink to="/">Accueil</NavLink>
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
          </>
        ) : (
          <>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <NavLink to="/mon-profil">Mon profil</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <NavLink to="/coloc">Gérer ma coloc</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <Button className="p-5 bg-tainoi-200">Me déconnecter</Button>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavDesktop;
