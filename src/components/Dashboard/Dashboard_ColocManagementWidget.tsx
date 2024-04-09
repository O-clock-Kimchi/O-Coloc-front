import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { CirclePlus, DoorOpen } from 'lucide-react';
import AddFlatmateModal from './Dashboard_AddFlatmateModal';
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

import FlatmatesListElement from './Dashboard_FlatmatesListElement';

function ColocationManagementWidget() {
  const secretCode = parseInt('12345678', 10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Card className="flex flex-col w-full mx-auto h-full bg-jet-100">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Colocation</CardTitle>
      </CardHeader>
      <CardContent className=" grid grid-cols-1 grid-rows-2 gap-4 h-full bg-cardinal-400 max-h-full">
        <div className="flex flex-col bg-tainoi-300 overflow-auto ">
          <div className="flex flex-col max-h-full bg-jet-400 overflow-scroll">
            <FlatmatesListElement />
            <FlatmatesListElement />
            <FlatmatesListElement />
            <FlatmatesListElement />
            <FlatmatesListElement />
            <FlatmatesListElement />
            <FlatmatesListElement />
            <FlatmatesListElement />
            <FlatmatesListElement />
          </div>
        </div>
        <div className="actions-container flex flex-col row-start-2 bg-jet-400 h-full ">
          <div className="grid grid-cols-1 grid-rows-2 gap-4 bg-cardinal-200 h-2/4">
            {isModalOpen ? (
              <AddFlatmateModal
                onClose={() => setIsModalOpen(false)}
                secretCode={secretCode}
              />
            ) : (
              <div className="button-container w-full mx-auto">
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
          <div className="flex row-start-2 bg-tainoi-200 h-2/4 items-end  justify-center">
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
      </CardContent>
    </Card>
  );
}

export default ColocationManagementWidget;
