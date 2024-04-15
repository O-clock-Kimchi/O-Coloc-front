import { Button } from '../ui/button';
import { Input } from '../ui/input';

function AskResetPassword() {
  return (
    <>
      <p className="flex 404-message text-4xl text-eden-800">
        Demande de réinitialisation
        <br />
        de mot de passe
      </p>
      <p className="flex error-message text-md w-full">
        Vous aviez un peu la tête ailleurs ? Vous pouvez enregistrer votre
        nouveau mot de passe ici.
      </p>
      <form className="password-reset-form md:flex-row vertical gap-4">
        <Input
          type="text"
          placeholder="Nouveau mot de passe"
          className=" w-2/4 md:w-auto flex self-center"
          required
        />
        <Input
          type="text"
          placeholder="Mot de passe de confirmation"
          className="w-2/4 md:w-auto flex self-center"
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

export default AskResetPassword;
