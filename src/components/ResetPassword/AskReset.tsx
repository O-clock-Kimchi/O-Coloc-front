import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';

// import UI components
import { Button } from '../ui/button';
import { Input } from '../ui/input';

// import custom elements
import askResetPassword from '../../store/actions/newPasswordActions';

function AskReset() {
  const dispatch = useAppDispatch();
  const [emailReset, setEmailReset] = useState<string>('');

  const handleResetPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    dispatch(askResetPassword({ email: emailReset }));
  };
  return (
    <>
      <p className="flex 404-message text-4xl text-eden-800">
        Demande de réinitialisation
        <br />
        de mot de passe
      </p>
      <p className="flex error-message text-md w-full">
        Pour demander la réinitialisation de votre mot de passe, saisissez
        l&rsquo;adresse email que vous avez renseignée lors de votre inscription
        sur CoHabit.
      </p>
      <form
        className="password-reset-form flex space-x-6"
        onSubmit={handleResetPassword}
      >
        <Input
          type="email"
          placeholder="email@example.com"
          value={emailReset}
          onChange={(e) => setEmailReset(e.target.value)}
          className="w-2/5 md:w-auto flex self-center"
          required
        />
        <div className="button-container flex justify-center">
          <Button
            className="flex p-6 w-100 md:w-auto"
            variant="secondary"
            type="submit"
          >
            Envoyer
          </Button>
        </div>
      </form>
      <div className="flex box-right">
        <img
          src="/LayingDoodle.svg"
          alt="meditating doodle"
          className="justify-self-center self-center"
        />
      </div>
    </>
  );
}

export default AskReset;
