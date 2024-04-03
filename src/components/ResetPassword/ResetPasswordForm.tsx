import { Input } from '../ui/input';
import { Button } from '../ui/button';

function ResetPasswordForm() {
  return (
    <main className="px-6 flex grow">
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center space-y-9">
          <p className="flex 404-message text-4xl text-eden-800">
            Demande de réinitialisation
            <br />
            de mot de passe
          </p>
          <p className="flex error-message text-md w-full">
            Pour demander la réinitialisation de votre mot de passe, saisissez
            l&rsquo;adresse email que vous avez renseignée lors de votre
            inscription sur CoHabit.
          </p>
          <form className="password-reset-form flex space-x-6">
            <Input
              type="email"
              placeholder="email@example.com"
              className="w-2/5 md:w-auto flex self-center"
              required
            />
            <div className="button-container flex justify-center">
              <Button className="flex p-6 w-100 md:w-auto" variant="secondary">
                Envoyer
              </Button>
            </div>
          </form>
        </div>
        <div className="flex box-right">
          <img
            src="/LayingDoodle.svg"
            alt="meditating doodle"
            className="justify-self-center self-center"
          />
        </div>
      </div>
    </main>
  );
}

export default ResetPasswordForm;
