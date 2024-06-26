import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

// import UI components
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
import { toast } from '../ui/use-toast';
import { Label } from '../ui/label';
import { Toaster } from '../ui/toaster';

// import custom components
import FlatmatesListElement from './Colocation_FlatmatesListElement';
import AddFlatmateModal from './Colocation_AddFlatmateModal';

// import custom elements
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeName,
  generateNewCode,
  leaveColoc,
  updateNameColoc,
} from '../../store/actions/colocActions';

function ColocationManagement() {
  const dispatch = useAppDispatch();
  const isUpdated = useAppSelector((state) => state.colocReducer.isUpdated);
  const colocId = useAppSelector((state) => state.colocReducer.coloc.colocId);
  const nameColoc = useAppSelector(
    (state) => state.colocReducer.coloc.nameColoc
  );
  const secretCode = useAppSelector(
    (state) => state.colocReducer.coloc.colocCode
  );
  const isLeaving = useAppSelector((state) => state.colocReducer.isLeaving);
  const successMessage = useAppSelector(
    (state) => state.colocReducer.successMessage
  );
  const errorMessage = useAppSelector(
    (state) => state.colocReducer.errorMessage
  );
  const [isUpdatingNameColoc, setIsUpdatingNameColoc] =
    useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmLeave, setConfirmLeave] = useState('');
  const flatmatesList = useAppSelector(
    (state) => state.colocReducer.flatmatesList
  );
  const isLoading = useAppSelector((state) => state.colocReducer.isLoading);
  const currentUserId = useAppSelector(
    (state) => state.userReducer.user.userId
  );

  const toggleName = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setIsUpdatingNameColoc(!isUpdatingNameColoc);
  };

  const handleNewName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    dispatch(changeName({ name: newName }));
  };

  const handleSubmitName = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (colocId) {
      dispatch(updateNameColoc({ colocId, name: nameColoc }));

      setIsUpdatingNameColoc(false);
    } else {
      throw new Error('Une erreur est survenue');
    }
  };

  useEffect(() => {
    if (successMessage) {
      toast({
        description: successMessage,
        className: 'bg-jet-50 text-eden-800',
        duration: 1000,
      });
    }
  }, [successMessage]);

  const handleNewCode = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (colocId) {
      dispatch(generateNewCode(colocId));
      toast({
        description: 'Mise à jour réussie',
        className: 'bg-jet-50 text-eden-800',
        duration: 1000,
      });
    }
  };

  // Handle User to leave coloc

  const handleUserToLeave = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (confirmLeave !== 'CONFIRMER') {
      return;
    }

    if (colocId) {
      dispatch(leaveColoc(colocId));
    }
  };

  if (isLeaving) {
    return <Navigate to="/acces-coloc" replace />;
  }
  return (
    <main className="px-6 flex flex-col p-12 space-y-6 rounded-xl h-screen grow dark:text-jet-50 bg-[url('/Backgrounds/layered-waves.svg')] bg-cover bg-no-repeat bg-center">
      <h2 className=" title text-3xl text-center">Ma coloc&rsquo;</h2>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="flex flex-col p-6 space-y-9 ">
          <div>
            <p className="text-lg">Nom de la coloc&rsquo;&nbsp;: {nameColoc}</p>
            <form
              className="horizontal gap-3 relative"
              onSubmit={handleSubmitName}
              autoComplete="off"
            >
              <Label htmlFor="name" />
              {!isUpdatingNameColoc ? (
                <>
                  {errorMessage && (
                    <p className="text-cardinal-600 text-xs absolute top-11 left-3">
                      {errorMessage}
                    </p>
                  )}
                  <Input
                    id="name"
                    type="text"
                    placeholder={nameColoc}
                    disabled
                    className=" placeholder-jet-900 flex-auto bg-jet-50"
                  />
                  <Button onClick={toggleName}>
                    <SquarePenIcon size={15} />
                  </Button>
                </>
              ) : (
                <>
                  <Input
                    id="name"
                    type="text"
                    value={nameColoc}
                    onChange={handleNewName}
                    className=" placeholder-jet-900 flex-auto bg-jet-50"
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
              Code secret de la coloc&rsquo;
            </p>
            <p className="code flex text-2xl tracking-widest">{secretCode}</p>
            <div className="button-container flex">
              <Button
                className="flex space-x-3 w-auto "
                variant="ghost"
                onClick={handleNewCode}
              >
                <RefreshCcw />
                <p>Générer un nouveau code</p>
              </Button>
            </div>
          </div>

          <div className="button-container flex w-4/5 h-2/4 mx-auto justify-center items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="flex space-x-3 w-auto bg-cardinal-600 hover:bg-cardinal-400   dark:bg-cardinal-800 dark:hover:bg-cardinal-600 dark:text-jet-50 self-center"
                  variant="default"
                  onClick={() => setIsModalOpen(false)}
                >
                  <DoorOpen />
                  <p>Quitter la colocation</p>
                </Button>
              </DialogTrigger>
              <DialogContent className="flex flex-col border-none bg-jet-50 border-jet-200 dark:bg-jet-500 dark:text-jet-50">
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
                    dans le champ ci-dessous.
                  </DialogDescription>
                </DialogHeader>
                <form
                  className="flex flex-col space-y-6"
                  onSubmit={handleUserToLeave}
                >
                  <Label htmlFor="confirm" />
                  <Input
                    id="confirm"
                    type="text"
                    placeholder=""
                    className="w-full flex self-center"
                    required
                    value={confirmLeave}
                    onChange={(e) => setConfirmLeave(e.target.value)}
                  />
                  <div className="button-container flex w-full justify-center">
                    <Button
                      className="flex space-x-3 w-40 bg-cardinal-600 hover:bg-cardinal-400  dark:bg-cardinal-800 dark:hover:bg-cardinal-600 dark:text-jet-50 self-center"
                      variant="default"
                      type="submit"
                    >
                      <p>Confirmer</p>
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex flex-col box-right space-y-6 place-items-center ">
          <Card className="flex flex-col w-4/5 mx-auto  h-3/5 bg-jet-50 dark:bg-jet-700">
            <CardHeader>
              <CardTitle className="text-center text-3xl">
                Dans ma coloc&rsquo;
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8 max-h-full overflow-auto">
              <div className="flatmates-list flex flex-col space-y-6 h-full overflow-scroll p-3">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  flatmatesList.map((flatmate) => (
                    <FlatmatesListElement
                      key={flatmate.user_id}
                      flatmate={flatmate}
                      isCurrentUser={flatmate.user_id === currentUserId}
                    />
                  ))
                )}
              </div>
            </CardContent>
          </Card>
          <Separator className="w-[90%] mx-auto" />
          {isModalOpen ? (
            <AddFlatmateModal onClose={() => setIsModalOpen(false)} />
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
      {isUpdated && <Toaster />}
    </main>
  );
}

export default ColocationManagement;
