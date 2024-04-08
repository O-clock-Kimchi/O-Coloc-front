import { FormEvent, useState } from 'react';
import { Check, PipetteIcon, SquarePenIcon } from 'lucide-react';
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
import { updateUser } from '../../store/action/actions';

function Profil() {
  const dispatch = useAppDispatch();

  const firstname = useAppSelector((state) => state.userReducer.firstname);
  const email = useAppSelector((state) => state.userReducer.email);
  const color = useAppSelector((state) => state.userReducer.color);
  const userId = useAppSelector((state) => state.userReducer.userId);

  const [isUpdatingFirstname, setIsUpdatingFirstname] =
    useState<boolean>(false);
  const [isUpdatingEmail, setIsUpdatingEmail] = useState<boolean>(false);
  const [isUpdatingColor, setIsUpdatingColor] = useState<boolean>(false);

  const [firstnameUpdated, setFirstnameUpdated] = useState<string>(firstname);
  const [emailUpdated, setEmailUpdated] = useState<string>(email);
  const [colorUpdated, setColorUpdated] = useState<string>(color);

  // To switch for each button and not all the button at once

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
      case 'color':
        setIsUpdatingColor(!isUpdatingColor);
        break;
      default:
        throw new Error(`Invalid fieldname: ${fieldname}`);
    }
  };

  const handleFormUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId) {
      dispatch(
        updateUser({
          userId,
          updateDataUser: {
            firstname: firstnameUpdated,
            email: emailUpdated,
            color: colorUpdated,
          },
        })
      );
    } else {
      throw new Error('Une erreur est survenue');
    }
  };

  return (
    <div className="h-screen py-4 mb-4 px-6">
      <h1 className=" text-center p-4 mb-10 text-2xl bg-jet-100 rounded">
        Mon profil
      </h1>

      <div className="grid content-center sm:grid-cols-2 grid-rows-1 gap-10">
        <div className="flex flex-col gap-5 items-center text-center sm:items-start sm:text-left justify-center">
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
                <form className="horizontal gap-2" onSubmit={handleFormUpdate}>
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
                        value={firstnameUpdated}
                        onChange={(e) => setFirstnameUpdated(e.target.value)}
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
                <form className="horizontal gap-3" onSubmit={handleFormUpdate}>
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
                        value={emailUpdated}
                        onChange={(e) => setEmailUpdated(e.target.value)}
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
                  Color
                </Label>
                <form className="horizontal gap-3" onSubmit={handleFormUpdate}>
                  {!isUpdatingColor ? (
                    <>
                      <Input
                        id="color"
                        type="text"
                        placeholder={color}
                        disabled
                        className=" placeholder-jet-900 flex-auto"
                      />
                      <Button onClick={(e) => handleUpdate(e, 'color')}>
                        <PipetteIcon size={15} />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Input
                        id="color"
                        type="text"
                        value={color}
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
                <Button variant="secondary" className="w-full">
                  <NavLink to="/reinitialisation">
                    Réinitialiser votre mot de passe
                  </NavLink>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className=" hidden sm:block self-center">
          <img src="/SitReadingDoodle.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Profil;
