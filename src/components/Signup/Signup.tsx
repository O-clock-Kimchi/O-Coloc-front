import { useState, useEffect, FormEvent } from 'react';

import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { NavLink } from 'react-router-dom';

import { RefreshCcw } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import RegistrationSuccessful from './Signup_RegistrationSuccessful';

import randomHexColor from '../../utils/randomHex';
import { useAppDispatch } from '../../hooks/redux';
import { signup } from '../../store/action/actions';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [registrationIsSuccessful, setRgistrationIsSuccessful] = useState<
    boolean | null
  >(null);

  const [data, setData] = useState({
    firstname: '',
    email: '',
    color: randomHexColor(),
    password: '',
    confirmPassword: '',
  });

  const dispatch = useAppDispatch();

  const handleCopyPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setErrorMessage(null);
    setData({ ...data, [name]: value });
    if (name === 'password') {
      // check if value in password meets regex requirements (formerly handlePasswordChange)
      if (!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
        setPasswordError(
          'Le mot de passe doit comporter au moins 8 caractères, 1 majuscule, 1 minuscule et 1 chiffre.'
        );
      } else {
        setPasswordError('');
      }
    } else if (name === 'confirmPassword') {
      // check if value in confirmPassword === password (formerly handleConfirmPasswordChange)
      if (value !== data.password) {
        setConfirmPasswordError(
          'Les deux mots de passe ne correspondent pas !'
        );
      } else {
        setConfirmPasswordError('');
      }
    } else if (name === 'firstname') {
      setFirstName(value);
    }
  };

  const handleRefreshColor = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newColor = randomHexColor();
    setData({ ...data, color: newColor });
  };

  const handleRegisterFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    try {
      const response = await dispatch(signup(data));
      setRgistrationIsSuccessful(true);
      console.log('Signup successful:', response);
      setData({
        firstname: '',
        email: '',
        color: randomHexColor(),
        password: '',
        confirmPassword: '',
      });
      return;
    } catch (error: any) {
      if (error.response) {
        setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
        setData({
          firstname: '',
          email: '',
          color: randomHexColor(),
          password: '',
          confirmPassword: '',
        });
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }
  };

  return (
    <div className="w-full h-screen lg:grid lg:max-h-screen lg:grid-cols-2 xl:max-h-[800px] mb-4 px-6">
      <div className="flex items-center justify-center">
        {registrationIsSuccessful ? (
          <RegistrationSuccessful />
        ) : (
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">S&apos;inscrire</h1>
              <p className="text-balance text-muted-foreground">
                Inscrivez-vous maintenant pour créer ou rejoindre votre future
                colocation.
              </p>
              {errorMessage && (
                <p className="text-cardinal-600 text-xs">{errorMessage}</p>
              )}
            </div>
            <form
              className="grid gap-4"
              method="POST"
              onSubmit={handleRegisterFormSubmit}
            >
              <div className="grid gap-2">
                <Label htmlFor="firstname">Prénom</Label>
                <Input
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="John"
                  value={data.firstname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  value={data.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="color">Couleur d&rsquo;avatar</Label>
                <div className="flex items-center space-x-2 justify-between">
                  <Avatar
                    className="flex h-9 w-9 sm:flex align rounded-3xl
                  justify-center items-center"
                    style={{ backgroundColor: data.color }}
                  >
                    <AvatarFallback>
                      {data.firstname.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <Input
                    className="text-sm w-60"
                    id="color"
                    name="color"
                    type="text"
                    value={data.color}
                    disabled
                  />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button
                          className="flex self-end"
                          variant="ghost"
                          onClick={handleRefreshColor}
                        >
                          <RefreshCcw />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-jet-50 text-xs border-none">
                        Cliquez pour générer une nouvelle couleur
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Mot de passe</Label>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="8 caractères minimum"
                  value={data.password}
                  onChange={handleInputChange}
                  required
                />
                {passwordError && (
                  <p className="text-cardinal-600 text-xs">{passwordError}</p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirmPassword">
                    Confirmation de mot de passe
                  </Label>
                </div>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirmation obligatoire"
                  value={data.confirmPassword}
                  onCopy={handleCopyPaste}
                  onPaste={handleCopyPaste}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {confirmPasswordError && (
                <p className="text-cardinal-600 text-xs">
                  {confirmPasswordError}
                </p>
              )}

              <Button type="submit" className="w-full">
                S&rsquo;inscrire
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Vous avez déjà un compte ?{' '}
              <NavLink to="/connexion" className="underline">
                Connectez-vous
              </NavLink>
            </div>
          </div>
        )}
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
