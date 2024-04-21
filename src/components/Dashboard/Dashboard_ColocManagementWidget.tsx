import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

// import UI components
import { DoorOpen, X, Copy, KeyRound } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Toaster } from '../ui/toaster';
import { useToast } from '../ui/use-toast';

// import custom components
import FlatmatesListElement from './Dashboard_FlatmatesListElement';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { leaveColoc } from '../../store/action/actions';

function ColocationManagementWidget() {
  const dispatch = useAppDispatch();
  const secretCode = useAppSelector(
    (state) => state.colocReducer.coloc.colocCode
  );
  const [codeIsCopied, setCodeIsCopied] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isLeaving = useAppSelector((state) => state.colocReducer.isLeaving);
  const isLoading = useAppSelector((state) => state.colocReducer.isLoading);
  const currentUserId = useAppSelector(
    (state) => state.userReducer.user.userId
  );
  // To handle the confirm value

  const [confirmLeave, setConfirmLeave] = useState<string>('');
  const flatmatesList = useAppSelector(
    (state) => state.colocReducer.flatmatesList
  );

  const { colocId } = useParams();

  const { toast } = useToast();

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const onCopyCode = () => {
    setCodeIsCopied(true);
    setTimeout(() => setCodeIsCopied(false), 3000);
  };

  const handleUserLeaveColoc = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (confirmLeave !== 'CONFIRMER') {
      return;
    }

    if (colocId) {
      const parsedColocId = parseInt(colocId, 10);
      dispatch(leaveColoc(parsedColocId));
    }
  };

  if (isLeaving) {
    return <Navigate to="/acces-coloc" replace />;
  }
  return (
    <Card className="coloc-management flex flex-col w-full mx-auto h-full max-h-full bg-jet-50 dark:bg-jet-700">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Colocation</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-full ">
        <div className="flex flex-col h-3/6 overflow-y-auto bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="list flex flex-col max-h-[95%] overflow-y-scroll space-y-3 p-3 ">
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
        </div>
        <div className="drawer-container flex flex-col h-[25%] justify-center ">
          {isDrawerOpen ? (
            <div
              className={`${
                isDrawerOpen ? 'animate-slide' : ''
              } drawer flex flex-col p-2 space-y-3 bg-jet-100 rounded-r-lg drop-shadow-lg animate-slide dark:bg-jet-400`}
            >
              <div className="drawer-title flex space-x-4">
                <p>
                  Pour ajouter un.e colocataire, transmettez-lui le code secret
                  de la colocation.
                </p>
                <Button className="p-2" variant="ghost" onClick={closeDrawer}>
                  <X size={22} />
                </Button>
              </div>
              <div className="copy-to-clipboard-container flex space-x- items-center">
                <Input
                  type="text"
                  value={secretCode}
                  id="code"
                  className="flex w-3/5 h-8 rounded-sm"
                  disabled
                />
                <CopyToClipboard text={secretCode} onCopy={onCopyCode}>
                  <Button
                    className=""
                    variant="ghost"
                    onClick={() => {
                      toast({
                        description: 'Copié dans le presse-papiers !',
                        className: 'bg-jet-50 text-eden-800',
                      });
                    }}
                  >
                    <Copy size={22} />
                  </Button>
                </CopyToClipboard>
              </div>
            </div>
          ) : (
            <Button
              className="h-20 w-10 p-0 rounded-none rounded-r-lg transition-all duration-300 ease-in-out hover:w-12 dark:bg-jet-300"
              onClick={openDrawer}
            >
              <KeyRound className="animate-ping" />
            </Button>
          )}
        </div>
        <div className="flex h-[25%]  justify-end">
          <img src="../../../public/GroovySittingDoodle.svg" alt="" />
        </div>
        <div className="flex items-end justify-center h-[10%]">
          <Dialog>
            <DialogTrigger asChild>
              <div className="button-container flex flex-col  w-full justify-end  items-center">
                <Button
                  className="flex space-x-3 w-auto bg-cardinal-600 hover:bg-cardinal-400 dark:bg-cardinal-800 dark:hover:bg-cardinal-600 dark:text-jet-50"
                  variant="default"
                >
                  <DoorOpen />
                  <p>Quitter la colocation</p>
                </Button>
              </div>
            </DialogTrigger>
            <DialogContent className="flex flex-col border-none bg-jet-100 dark:bg-jet-500 dark:text-jet-50">
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
              <form
                className="flex flex-col space-y-6"
                onSubmit={handleUserLeaveColoc}
              >
                <Input
                  type="text"
                  placeholder=""
                  value={confirmLeave}
                  onChange={(e) => setConfirmLeave(e.target.value)}
                  className="w-full flex self-center"
                  required
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
        {codeIsCopied && <Toaster />}
      </CardContent>
    </Card>
  );
}

export default ColocationManagementWidget;
