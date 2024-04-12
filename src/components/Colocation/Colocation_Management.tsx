import { useState } from 'react';

import {
  CirclePlus,
  RefreshCcw,
  DoorOpen,
  SquarePenIcon,
  Check,
} from 'lucide-react';

import { Button } from '../ui/button';
import { Card, CardContent, CardTitle, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

import FlatmatesListElement from './Colocation_FlatmatesListElement';
import AddFlatmateModal from './Colocation_AddFlatmateModal';
import { useAppSelector } from '../../hooks/redux';

function ColocationManagement() {
  const nameColoc = useAppSelector((state) => state.colocReducer.nameColoc);
  const secretCode = useAppSelector((state) => state.colocReducer.colocCode);
  const [isUpdatingNameColoc, setIsUpdatingNameColoc] =
    useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleField = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsUpdatingNameColoc(!isUpdatingNameColoc);
  };

  return (
    <main className="px-6 flex grow">
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="flex flex-col p-6 space-y-9 ">
          <div>
            <h1>Gestion de la coloc : {nameColoc}</h1>
            <form className="horizontal gap-3">
              {!isUpdatingNameColoc ? (
                <>
                  <Input
                    id="text"
                    type="text"
                    placeholder={nameColoc}
                    disabled
                    className=" placeholder-jet-900 flex-auto"
                  />
                  <Button onClick={handleField}>
                    <SquarePenIcon size={15} />
                  </Button>
                </>
              ) : (
                <>
                  <Input
                    id="text"
                    type="text"
                    value={nameColoc}
                    className=" placeholder-jet-900 flex-auto"
                  />
                  <Button type="submit">
                    <Check size={15} />
                  </Button>
                </>
              )}
            </form>
          </div>
          <div className="secret-code-container justify-center flex flex-col items-center w-4/5 h-2/4 mx-auto space-y-6">
            <p className="flex text-3xl text-eden-800">
              Code secret de la coloc
            </p>
            <p className="code flex text-2xl tracking-widest">{secretCode}</p>
            <div className="button-container flex">
              <Button className="flex space-x-3 w-auto " variant="ghost">
                <RefreshCcw />
                <p>Générer un nouveau code</p>
              </Button>
            </div>
          </div>

          <div className="button-container flex w-4/5 h-2/4 mx-auto justify-center items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="flex space-x-3 w-auto bg-cardinal-600 hover:bg-cardinal-400"
                  variant="default"
                  onClick={() => setIsModalOpen(false)}
                >
                  <DoorOpen />
                  <p>Quitter la colocation</p>
                </Button>
              </DialogTrigger>
              <DialogContent className="flex flex-col border-none bg-jet-100">
                <DialogHeader>
                  <DialogTitle>
                    Voulez-vous vraiment quitter la colocation ?
                  </DialogTitle>
                  <DialogDescription>
                    En quittant la colocation, vous ne pourrez plus accéder à
                    certaines fonctionnalités. Pour confirmer votre action,
                    saisissez{' '}
                    <span className="confirmation-word text-cardinal-600">
                      CONFIRMER
                    </span>{' '}
                    dans le champ ci-dessous
                  </DialogDescription>
                </DialogHeader>
                <form className="flex flex-col space-y-6">
                  <Input
                    type="text"
                    placeholder=""
                    className="w-full flex self-center"
                    required
                  />
                  <div className="button-container flex w-full justify-center">
                    <Button
                      className="flex space-x-3 w-40 bg-cardinal-600 hover:bg-cardinal-400 self-center"
                      variant="default"
                    >
                      <p>Confirmer</p>
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex flex-col box-right space-y-6 place-items-center">
          <Card className="flex flex-col w-4/5 mx-auto  h-3/5">
            <CardHeader>
              <CardTitle className="text-center text-3xl">
                Dans ma coloc&rsquo;
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8 max-h-full overflow-auto">
              <div className="flatmates-list flex flex-col space-y-6 h-full overflow-scroll p-3">
                <FlatmatesListElement />
                <FlatmatesListElement />
                <FlatmatesListElement />
                <FlatmatesListElement />
                <FlatmatesListElement />
                <FlatmatesListElement />
              </div>
            </CardContent>
          </Card>
          <Separator className="w-[90%] mx-auto" />
          {isModalOpen ? (
            <AddFlatmateModal
              onClose={() => setIsModalOpen(false)}
              secretCode={secretCode}
            />
          ) : (
            <div className="button-container w-4/5 mx-auto">
              <Button
                className="flex space-x-3 "
                variant="ghost"
                onClick={() => setIsModalOpen(true)}
              >
                <CirclePlus />
                <p>Ajouter un.e colocataire</p>
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default ColocationManagement;
