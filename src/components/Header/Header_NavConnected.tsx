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

function NavConnected() {
  const userFirstname = useAppSelector((state) => state.userReducer.firstname);
  const color = useAppSelector((state) => state.userReducer.color);
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
            <NavLink to="/mon-profil">Mon profil</NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <NavLink to="/mon-profil">Ma coloc</NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button className=" bg-tainoi-200" onClick={handleLogout}>
              <SquareArrowRight className=" pr-2" />
              Se déconnecter
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback style={{ backgroundColor: color }} />
      </Avatar>
    </div>
  );
}

export default NavConnected;
