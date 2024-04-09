import { NavLink, Navigate } from 'react-router-dom';
import { FormEvent, useState, useEffect } from 'react';

// Element UI de Shadcn
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Toaster } from '../ui/toaster';
import { useToast } from '../ui/use-toast';

// Function de redux pour utiliser action et state
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { login } from '../../store/action/actions';

function Login() {
  // Pour envoyer mail et password au back
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);
  const colocID = useAppSelector((state) => state.userReducer.colocId);
  const [email, setEmail] = useState<string>('sian@ocoloc.com');
  const [password, setPassword] = useState<string>('Sian123456');

  const dispatch = useAppDispatch();
  const { toast } = useToast();

  useEffect(() => {
    if (isLogged) {
      toast({
        description: 'Connexion réussie',
        className: 'bg-jet-50 text-eden-800',
      });
    }
  }, [isLogged, toast]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  // TODO: régler problème de toast avec navigate

  if (isLogged) {
    return <Navigate to={colocID ? '/dashboard' : '/acces-coloc'} replace />;
  }

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
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail (obligatoire)"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mot de passe</Label>
                <NavLink
                  to="/reinitialisation"
                  className="ml-auto inline-block text-sm underline"
                >
                  Mot de passe oublié ?
                </NavLink>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="8 caractères minimum"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </form>
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
      {isLogged && <Toaster />}
    </div>
  );
}

export default Login;
