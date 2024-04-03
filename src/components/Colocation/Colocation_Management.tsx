import { useState } from 'react';

import { CirclePlus, RefreshCcw, DoorOpen } from 'lucide-react';

import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
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

import AddFlatmateModal from './Colocation_AddFlatmateModal';

function ColocationManagement() {
  const secretCode = parseInt('12345678', 10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="px-6 flex grow">
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="flex flex-col p-6 space-y-9 ">
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
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-12 w-12 sm:flex">
                    <AvatarImage src="https://picsum.photos/200" alt="Avatar" />
                    <AvatarFallback>NC</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-lg font-small leading-none">
                      Moi (Noëllie)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Membre depuis le 01.04.2024
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-12 w-12 sm:flex">
                    <AvatarImage src="https://picsum.photos/200" alt="Avatar" />
                    <AvatarFallback>FR</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-lg font-small leading-none">Florian</p>
                    <p className="text-sm text-muted-foreground">
                      Membre depuis le 01.04.2024
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-12 w-12 sm:flex">
                    <AvatarImage src="https://picsum.photos/200" alt="Avatar" />
                    <AvatarFallback>CB</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-lg font-small leading-none">Caitlyne</p>
                    <p className="text-sm text-muted-foreground">
                      Membre depuis le 01.04.2024
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-12 w-12 sm:flex">
                    <AvatarImage src="https://picsum.photos/200" alt="Avatar" />
                    <AvatarFallback>AA</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-lg font-small leading-none">Aude</p>
                    <p className="text-sm text-muted-foreground">
                      Membre depuis le 01.04.2024
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-12 w-12 sm:flex">
                    <AvatarImage src="https://picsum.photos/200" alt="Avatar" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-lg font-small leading-none">Mickaël</p>
                    <p className="text-sm text-muted-foreground">
                      Membre depuis le 01.04.2024
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-12 w-12 sm:flex">
                    <AvatarImage src="https://picsum.photos/200" alt="Avatar" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-lg font-small leading-none">Mickaël</p>
                    <p className="text-sm text-muted-foreground">
                      Membre depuis le 01.04.2024
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-12 w-12 sm:flex">
                    <AvatarImage src="https://picsum.photos/200" alt="Avatar" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-lg font-small leading-none">Mickaël</p>
                    <p className="text-sm text-muted-foreground">
                      Membre depuis le 01.04.2024
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-12 w-12 sm:flex">
                    <AvatarImage src="https://picsum.photos/200" alt="Avatar" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-lg font-small leading-none">Mickaël</p>
                    <p className="text-sm text-muted-foreground">
                      Membre depuis le 01.04.2024
                    </p>
                  </div>
                </div>
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
