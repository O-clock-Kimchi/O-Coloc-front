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
import { login } from '../../store/actions/userActions';

// import custom components
import emailFormatIsValid from '../../utils/checkEmailFormat';

function Login() {
  // Pour envoyer mail et password au back
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);
  const colocId = useAppSelector((state) => state.userReducer.user.colocId);
  const [emailError, setEmailError] = useState<null | string>('');
  const [formSubmitError, setFormSubmitError] = useState<null | string>(null);
  const [redirect, setRedirect] = useState<boolean>(false);
  const token = localStorage.getItem('accessToken');

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setEmailError(null);
    setFormSubmitError(null);
    const { name, value } = e.currentTarget;
    setLoginData({ ...loginData, [name]: value });
    if (name === 'email') {
      // check email validity...
      const isEmailFormatValid = emailFormatIsValid(value);
      if (!isEmailFormatValid) {
        // .. if password is invalid, update error
        setEmailError('Veuillez saisir une adresse email valide.');
      } else {
        setEmailError(null);
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError(null);
    setFormSubmitError(null);
    const formIsValid = emailError === null;

    // prevent form submission if not valid
    if (!formIsValid) {
      setFormSubmitError('Veuillez vérifier votre saisie.');
      return;
    }

    try {
      const response = await dispatch(login(loginData));
      if (response.payload?.status === 201) {
        setLoginData({
          email: '',
          password: '',
        });
      } else {
        setFormSubmitError('Veuillez vérifier votre saisie');
        setLoginData({
          email: '',
          password: '',
        });
        setEmailError(null);
      }
      return;
    } catch (error: any) {
      setFormSubmitError('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  // UseEffect to handle toast display if login success
  useEffect(() => {
    if (isLogged && token) {
      toast({
        description: 'Connexion réussie !',
        className: 'bg-jet-100 text-eden-600',
      });
      setTimeout(() => {
        setRedirect(true);
      }, 1000);
    }
  }, [isLogged, colocId, toast, token]);

  // Handle redirection if user has a coloc or not

  if (redirect && colocId) {
    return <Navigate to={`/dashboard/${colocId}`} replace />;
  }

  if (redirect && !colocId) {
    return <Navigate to="/acces-coloc" replace />;
  }

  return (
    <div className="w-full h-screen lg:grid lg:min-h-screen lg:grid-cols-2 xl:max-h-[800px] mb-4 px-6 dark:text-jet-50">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Se connecter</h1>
            <p className="text-balance text-muted-foreground">
              Saisissez votre e-mail
              <br />
              pour vous connecter dès maintenant.
            </p>
            {formSubmitError && (
              <p className="text-cardinal-600 text-xs">{formSubmitError}</p>
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
                placeholder="email@example.com"
                required
              />
            </div>
            {emailError && (
              <p className="text-cardinal-600 text-xs">{emailError}</p>
            )}
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
          className=" max-h-screen w-full object-cover dark:brightness-[0.8]"
        />
      </div>
      <Toaster />
    </div>
  );
}

export default Login;
