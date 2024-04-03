import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

import { Input } from '../ui/input';
import { Label } from '../ui/label';

function Profil() {
  return (
    <div className="h-screen">
      <h1 className=" text-center p-4 mb-10 text-2xl bg-jet-100 rounded">
        Mon profil
      </h1>

      <div className="grid grid-cols-2 grid-rows-1 gap-10">
        <div className="flex flex-col gap-5">
          <div>
            <Label htmlFor="prenom" className=" text-xl">
              Prénom
            </Label>
            <Input
              id="prenom"
              type="text"
              placeholder="Florian"
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
              placeholder="test@ocoloc.com"
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

        <div>
          <img src="/SitReadingDoodle.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Profil;
