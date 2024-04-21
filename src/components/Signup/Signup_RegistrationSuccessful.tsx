import { NavLink } from 'react-router-dom';

// import UI components
import { Button } from '../ui/button';

function RegistrationSuccessful() {
  return (
    <div className="flex flex-col space-y-9">
      <div className="text-container flex flex-col space-y-3">
        <p className="flex self-center ">Votre compte a bien été créé !</p>
        <p className="flex self-center ">
          Vous pouvez maintenant vous connecter.
        </p>
      </div>
      <NavLink to="/connexion" className="flex justify-center">
        <Button className="flex p-6 w-100 md:w-auto" variant="secondary">
          Me connecter
        </Button>
      </NavLink>
    </div>
  );
}

export default RegistrationSuccessful;
