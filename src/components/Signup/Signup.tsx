import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

import { Input } from '../ui/input';
import { Label } from '../ui/label';

function Signup() {
  return (
    <div className="w-full h-screen lg:grid lg:max-h-screen lg:grid-cols-2 xl:max-h-[800px] mb-4 px-6">
      <div className="flex items-center justify-center">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">S&apos;inscrire</h1>
            <p className="text-balance text-muted-foreground">
              Inscrivez-vous maintenant pour créer ou rejoindre votre future
              colocation.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="prenom">Prénom</Label>
              <Input id="prenom" type="text" placeholder="Florian" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mot de passe</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="8 caractères minimum"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password-confirm">
                  Confirmation de mot de passe
                </Label>
              </div>
              <Input
                id="password-confirm"
                type="password"
                placeholder="Confirmation obligatoire"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Vous avez déjà un compte?{' '}
            <NavLink to="/connexion" className="underline">
              Connectez-vous
            </NavLink>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block place-items-center">
        <img
          src="/pexels-coloc-register-cohabit.jpg"
          alt=""
          width="1920"
          height="1080"
          className=" max-h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

export default Signup;
