import { FormEvent, useEffect, useState } from 'react';
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
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
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
} from '../../store/action/actions';
import { Avatar, AvatarFallback } from '../ui/avatar';
import randomHexColor from '../../utils/randomHex';
import { useToast } from '../ui/use-toast';
import { Toaster } from '../ui/toaster';

function Profil() {
  const dispatch = useAppDispatch();

  // Utils function to generate random color
  const randomColor = randomHexColor();

  // To add a toast for success

  const { toast } = useToast();

  // State from redux

  const firstname = useAppSelector((state) => state.userReducer.firstname);
  const email = useAppSelector((state) => state.userReducer.email);
  const color = useAppSelector((state) => state.userReducer.color);
  const userId = useAppSelector((state) => state.userReducer.userId);
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
          userId,
          updateDataUser: {
            firstname,
            email,
            color,
          },
        })
      );

      // Close edit mode for all fields
      setIsUpdatingFirstname(false);
      setIsUpdatingEmail(false);

      toast({
        description: 'Mise à jour réussie',
        className: 'bg-jet-50 text-eden-800',
        duration: 1000,
      });
    } else {
      throw new Error('Une erreur est survenue');
    }
  };

  // To delete the account for the DB

  const handleDestroy = () => {
    if (userId) {
      dispatch(destroyUser(userId));
    }
  };

  return (
    <div className="h-screen py-4 mb-4 px-6">
      <h1 className=" text-center p-4 mb-10 text-2xl bg-jet-100 rounded">
        Mon profil
      </h1>

      <div className="grid content-center sm:grid-cols-2 grid-rows-1 gap-10">
        <div className="flex flex-col gap-5 items-center text-center sm:text-left justify-center">
          <Card className="w-[350px] border border-jet-100 p-5">
            <CardHeader>
              <CardTitle>Votre profil</CardTitle>
              <CardDescription>
                Vous pouvez mettre à jour votre profil ou le consulter.
              </CardDescription>
            </CardHeader>
            <CardContent className="vertical gap-5">
              <div>
                <Label htmlFor="prenom" className=" text-xl">
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
                        id="prenom"
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
                        id="prenom"
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
                <Button
                  variant="urgent"
                  className="w-full"
                  onClick={handleDestroy}
                >
                  <UserRoundX size={15} className=" mr-2" />
                  <p>Supprimer mon compte</p>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className=" hidden sm:block self-center">
          <img src="/SitReadingDoodle.svg" alt="" />
        </div>
      </div>
      {isUpdated && <Toaster />}
    </div>
  );
}

export default Profil;
