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
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logout } from '../../store/action/actions';

// display first two letters of username with capital letter
const getFormattedFallback = (string: string) => {
  const firstLetter = string.charAt(0).toUpperCase();
  const secondLetter = string.charAt(1);
  return firstLetter + secondLetter;
};

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
    <div className="flex gap-4 items-center">
      <p>
        Bonjour,{' '}
        <span className=" text-tainoi-200 capitalize">{userFirstname}</span>
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
