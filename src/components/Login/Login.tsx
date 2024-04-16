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
import PopupExpiredToken from './PopupExpiredToken';

// interface LoginFormData {
//   email: string;
//   password: string;
// }

function Login() {
  // Pour envoyer mail et password au back
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);
  const colocId = useAppSelector((state) => state.userReducer.user.colocId);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [redirect, setRedirect] = useState<boolean>(false);
  const isTokenExpired = useAppSelector(
    (state) => state.userReducer.isTokenExpired
  );

  const [loginData, setLoginData] = useState({
    email: 'sian@ocoloc.com',
    password: 'Sian123456',
  });

  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    const { name, value } = e.currentTarget;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    try {
      const response = await dispatch(login(loginData));
      console.log('Login successful:', response.payload);
      setLoginData({
        email: '',
        password: '',
      });
      return;
    } catch (error: any) {
      if (error.response) {
        setErrorMessage('Veuillez vérifier vos identifiants.');
        setLoginData({
          email: '',
          password: '',
        });
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }
  };

  // UseEffect to handle the toast if login success

  useEffect(() => {
    if (isLogged) {
      toast({
        description: 'Connexion réussie !',
        className: 'bg-jet-100',
      });
      setTimeout(() => {
        setRedirect(true);
      }, 1000);
    }
  }, [isLogged, toast]);

  // Handle redirection if user has a coloc or not

  if (redirect && colocId) {
    // dispatch(getColoc({ colocId }));

    return <Navigate to={`/dashboard/${colocId}`} replace />;
  }

  if (redirect && !colocId) {
    return <Navigate to="/acces-coloc" replace />;
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
            {errorMessage && (
              <p className="text-cardinal-600 text-xs">{errorMessage}</p>
            )}
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={loginData.email}
                onChange={handleInputChange}
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
                  Mot de passe oublié&nbsp;?
                </NavLink>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="8 caractères minimum"
                value={loginData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Vous n&apos;avez pas de compte&nbsp;?{' '}
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
      <Toaster />
      {isTokenExpired && <PopupExpiredToken />}
    </div>
  );
}

export default Login;
