// import UI components
import { ChevronDown, SquareArrowRight } from 'lucide-react';
import { NavLink, Navigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

// import custom components
import ModeToggle from '../_ThemeProvider/ToggleTheme';

// import custom elements
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logout } from '../../store/actions/userActions';
import getFormattedFallback from '../../utils/getFormattedFallback';

function NavConnected() {
  const userFirstname = useAppSelector(
    (state) => state.userReducer.user.firstname
  );
  const colocId = useAppSelector((state) => state.userReducer.user.colocId);
  const color = useAppSelector((state) => state.userReducer.user.color);
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isLogged) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex gap-4 items-center dark:text-jet-50">
      <p>
        Bonjour,{' '}
        <span className=" text-tainoi-200 capitalize">{userFirstname}</span>
      </p>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" className="p-2 dark:bg-jet-300">
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" text-center vertical items-center gap-2 dark:bg-jet-500">
          <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
          <DropdownMenuItem>
            {colocId ? (
              <NavLink to="/gestion-coloc">Gérer ma coloc&rsquo;</NavLink>
            ) : (
              <NavLink to="/acces-coloc">Créer ma coloc&rsquo;</NavLink>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <NavLink to="/mon-profil">Mon profil</NavLink>
          </DropdownMenuItem>
          {colocId && (
            <DropdownMenuItem>
              <NavLink to={`/dashboard/${colocId}`}>Dashboard</NavLink>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>
            <Button className=" bg-tainoi-200" onClick={handleLogout}>
              <SquareArrowRight className=" pr-2" />
              Se déconnecter
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ModeToggle />
      <Avatar
        className="flex sm:flex align rounded-3xl
                  justify-center items-center"
      >
        <AvatarImage src="" />
        <AvatarFallback className="text-xs" style={{ backgroundColor: color }}>
          {getFormattedFallback(userFirstname)}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

export default NavConnected;
