import { NavLink } from 'react-router-dom';

// import UI components
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { Button } from '../ui/button';

// import custom elements
import { useAppSelector } from '../../hooks/redux';

function NavDesktop() {
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);
  const colocId = useAppSelector((state) => state.userReducer.user.colocId);

  return (
    <NavigationMenu className="dark:text-jet-50">
      <NavigationMenuList>
        {!isLogged ? (
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
                <NavLink to={`/dashboard/${colocId}`}>Dashboard</NavLink>
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
