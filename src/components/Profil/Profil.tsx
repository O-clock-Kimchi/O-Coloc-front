import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useAppSelector } from '../../hooks/redux';

function Profil() {
  const firstname = useAppSelector((state) => state.userReducer.firstname);
  const email = useAppSelector((state) => state.userReducer.email);

  return (
    <div className="h-screen">
      <h1 className=" text-center p-4 mb-10 text-2xl bg-jet-100 rounded">
        Mon profil
      </h1>

      <div className="grid content-center sm:grid-cols-2 grid-rows-1 gap-10">
        <div className="flex flex-col gap-5 items-center text-center sm:items-start sm:text-left">
          <div>
            <Label htmlFor="prenom" className=" text-xl">
              Prénom
            </Label>
            <Input
              id="prenom"
              type="text"
              placeholder={firstname}
              disabled
              className=" placeholder-jet-900 w-fit"
            />
          </div>

          <div>
            <Label htmlFor="prenom" className=" text-xl">
              Mail
            </Label>
            <Input
              id="prenom"
              type="email"
              placeholder={email}
              disabled
              className=" placeholder-jet-900 w-fit"
            />
          </div>

          <div>
            <Button>
              <NavLink to="/reinitialisation">
                Réinitialiser votre mot de passe
              </NavLink>
            </Button>
          </div>
        </div>

        <div className=" hidden sm:block">
          <img src="/SitReadingDoodle.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Profil;
