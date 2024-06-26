import { FormEvent, useState } from 'react';

// import UI components
import {
  Check,
  UserRoundX,
  PipetteIcon,
  SquarePenIcon,
  RotateCcw,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  changeField,
  destroyUser,
  updateUser,
} from '../../store/actions/userActions';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { useToast } from '../ui/use-toast';
import { Toaster } from '../ui/toaster';

// import custom elements
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import randomHexColor from '../../utils/randomHex';

function Profil() {
  const dispatch = useAppDispatch();

  // To confirm delete user

  const [confirmDelete, setConfirmDelete] = useState('');

  // Utils function to generate random color
  const randomColor = randomHexColor();

  // To add a toast for success

  const { toast } = useToast();

  // State from redux

  const firstname = useAppSelector((state) => state.userReducer.user.firstname);
  const email = useAppSelector((state) => state.userReducer.user.email);
  const color = useAppSelector((state) => state.userReducer.user.color);
  const userId = useAppSelector((state) => state.userReducer.user.userId);
  const isUpdated = useAppSelector((state) => state.userReducer.isUpdated);

  // To switch for each button and not all the button at once
  const [isUpdatingFirstname, setIsUpdatingFirstname] =
    useState<boolean>(false);
  const [isUpdatingEmail, setIsUpdatingEmail] = useState<boolean>(false);

  const handleUpdate = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    fieldname: 'firstname' | 'email' | 'color'
  ) => {
    event.preventDefault();
    switch (fieldname) {
      case 'firstname':
        setIsUpdatingFirstname(!isUpdatingFirstname);
        break;
      case 'email':
        setIsUpdatingEmail(!isUpdatingEmail);
        break;
      default:
        throw new Error(`Invalid fieldname: ${fieldname}`);
    }
  };

  // To handle change field with redux

  const handleChangeField = (
    name: 'email' | 'firstname' | 'color',
    value: string
  ) => {
    dispatch(changeField({ value, name }));
  };

  // To valide change field with submit

  const handleFormUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId) {
      dispatch(
        updateUser({
          firstname,
          email,
          color,
        })
      );

      // Close edit mode for all fields
      setIsUpdatingFirstname(false);
      setIsUpdatingEmail(false);

      toast({
        description: 'Mise à jour réussie !',
        className: 'bg-jet-50 text-eden-800',
        duration: 1000,
      });
    } else {
      throw new Error('Une erreur est survenue');
    }
  };

  // To delete the account for the DB

  const handleDestroy = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (confirmDelete !== 'SQITCH') {
      return;
    }

    if (userId) {
      dispatch(destroyUser());
    }
  };

  return (
    <div className="h-screen py-4 mb-4 px-6  dark:text-jet-50 bg-[url('/Backgrounds/layered-waves.svg')] bg-cover bg-no-repeat bg-center">
      <h2 className=" text-center p-4 mb-10 text-3xl">Mon profil</h2>
      <div className="grid content-center sm:grid-cols-2 grid-rows-1 gap-10">
        <div className="flex flex-col gap-5 items-center text-center sm:text-left justify-center">
          <Card className="w-[350px] border border-jet-100 p-5 bg-jet-50 dark:bg-jet-700">
            <CardHeader>
              <CardTitle>Votre profil</CardTitle>
              <CardDescription>
                Vous pouvez mettre à jour votre profil ou le consulter.
              </CardDescription>
            </CardHeader>
            <CardContent className="vertical gap-5 ">
              <div>
                <Label htmlFor="firstname" className=" text-xl">
                  Prénom
                </Label>
                <form
                  className="horizontal gap-2"
                  onSubmit={handleFormUpdate}
                  autoComplete="off"
                >
                  {!isUpdatingFirstname ? (
                    <>
                      <Input
                        id="firstname"
                        type="text"
                        placeholder={firstname}
                        disabled
                        className=" placeholder-jet-900 flex-auto"
                      />
                      <Button onClick={(e) => handleUpdate(e, 'firstname')}>
                        <SquarePenIcon size={15} />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Input
                        id="firstname"
                        type="text"
                        value={firstname}
                        onChange={(e) =>
                          handleChangeField('firstname', e.target.value)
                        }
                        className=" placeholder-jet-900 flex-auto border border-tainoi-800"
                      />
                      <Button type="submit">
                        <Check size={15} />
                      </Button>
                    </>
                  )}
                </form>
              </div>

              <div>
                <Label htmlFor="email" className=" text-xl">
                  Mail
                </Label>
                <form
                  className="horizontal gap-3"
                  onSubmit={handleFormUpdate}
                  autoComplete="off"
                >
                  {!isUpdatingEmail ? (
                    <>
                      <Input
                        id="email"
                        type="email"
                        placeholder={email}
                        disabled
                        className=" placeholder-jet-900 flex-auto"
                      />
                      <Button onClick={(e) => handleUpdate(e, 'email')}>
                        <SquarePenIcon size={15} />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) =>
                          handleChangeField('email', e.target.value)
                        }
                        className=" placeholder-jet-900 flex-auto border border-tainoi-900"
                      />
                      <Button type="submit">
                        <Check size={15} />
                      </Button>
                    </>
                  )}
                </form>
              </div>

              <div>
                <Label htmlFor="color" className=" text-xl">
                  Couleur
                </Label>
                <form
                  className="horizontal gap-3"
                  onSubmit={handleFormUpdate}
                  autoComplete="off"
                >
                  <Avatar>
                    <AvatarFallback
                      style={{
                        backgroundColor: color,
                      }}
                    />
                  </Avatar>
                  <Input
                    id="color"
                    type="text"
                    value={color}
                    disabled
                    className=" placeholder-jet-900 flex-auto"
                  />
                  <Button
                    type="submit"
                    onClick={() => handleChangeField('color', randomColor)}
                  >
                    <PipetteIcon size={15} />
                  </Button>
                </form>
              </div>

              <div className=" mt-5">
                <Button variant="secondary" className="w-full">
                  <RotateCcw size={15} className=" mr-2" />
                  <NavLink to="/reinitialisation">
                    Réinitialiser mon mot de passe
                  </NavLink>
                </Button>
              </div>
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="urgent" className="w-full">
                      <UserRoundX size={15} className=" mr-2" />
                      <p>Supprimer mon compte</p>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="flex flex-col border-none bg-jet-100">
                    <DialogHeader>
                      <DialogTitle>
                        Voulez-vous vraiment supprimer votre compte ?
                      </DialogTitle>
                      <DialogDescription>
                        En supprimant votre compte, vous ne pourrez plus accéder
                        au site et vos données seront supprimées. Pour confirmer
                        votre action saissiez{' '}
                        <span className=" text-tainoi-800">SQITCH</span> dans le
                        champ ci-dessous.
                      </DialogDescription>
                    </DialogHeader>
                    <form className="flex flex-col space-y-6">
                      <Input
                        type="text"
                        placeholder=""
                        value={confirmDelete}
                        onChange={(e) => setConfirmDelete(e.target.value)}
                        className="w-full flex self-center"
                        required
                      />
                      <div className="button-container flex w-full justify-center">
                        <Button
                          className="flex space-x-3 w-40"
                          variant="urgent"
                          onClick={handleDestroy}
                        >
                          <p>Confirmer</p>
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className=" hidden sm:block self-center">
          <img
            src="/SitReadingDoodle.svg"
            alt="Doodle showing a man sitting on a chair and reading"
            className="dark:fill-jet-50"
          />
        </div>
      </div>
      {isUpdated && <Toaster />}
    </div>
  );
}

export default Profil;
