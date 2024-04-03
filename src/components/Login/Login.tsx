import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

import { Input } from '../ui/input';
import { Label } from '../ui/label';

function Login() {
  return (
    <div className="w-full h-screen lg:grid lg:max-h-screen lg:grid-cols-2 xl:max-h-[800px] mb-4 px-6">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Se connecter</h1>
            <p className="text-balance text-muted-foreground">
              Entrez votre e-mail pour vous connecter dès maintenant.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="E-mail (obligatoire)"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mot de passe</Label>
                <NavLink
                  to="/reinitilisation"
                  className="ml-auto inline-block text-sm underline"
                >
                  Mot de passe oublié ?
                </NavLink>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="8 caractères minimum"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Vous n&apos;avez pas de compte?{' '}
            <NavLink to="/inscription" className="underline">
              Inscrivez-vous
            </NavLink>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block place-content-center">
        <img
          src="/pexels-coloc-login-cohabit.jpg"
          alt=""
          width="1920"
          height="1080"
          className=" max-h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

export default Login;