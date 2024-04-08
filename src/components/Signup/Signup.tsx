import { useState, FormEvent } from 'react';

import { Avatar } from '@radix-ui/react-avatar';
import { NavLink } from 'react-router-dom';

import { RefreshCcw } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

function Signup() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleRegisterFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-_+=]{8,}$/
      )
    ) {
      setPasswordError(
        'Le mot de passe doit comporter au moins 8 caractères, 1 majuscule, 1 minuscule et 1 chiffre.'
      );
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError('Les deux mots de passe ne correspondent pas !');
    }
    // TO DO
    // useDispatch(register)
  };

  const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (e: FormEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value);
    setConfirmPasswordError('');
  };

  const handleCopyPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

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
          <form className="grid gap-4" onSubmit={handleRegisterFormSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="firstname">Prénom</Label>
              <Input
                id="firstname"
                type="text"
                placeholder="Florian"
                required
              />
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
                value={password}
                onChange={handlePasswordChange}
                required
              />
              {passwordError && (
                <p className="text-cardinal-600 text-xs">{passwordError}</p>
              )}
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
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                onCopy={handleCopyPaste}
                onPaste={handleCopyPaste}
                required
              />
            </div>
            {confirmPasswordError && (
              <p className="text-cardinal-600 text-xs">
                {confirmPasswordError}
              </p>
            )}
            <div className="grid gap-2">
              <Label>Couleur d&rsquo;avatar</Label>
              <div className="flex items-center space-x-3">
                <Avatar className="h-9 w-9 sm:flex align bg-jet-900 rounded-3xl" />
                <p className="text-sm">Color</p>
                <Button className="flex self-end" variant="ghost">
                  <RefreshCcw />
                </Button>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Vous avez déjà un compte ?{' '}
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
