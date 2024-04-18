import { useState } from 'react';

import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

import CreationForm from './Colocation_CreationForm';
import JoinForm from './Colocation_JoinForm';

function Colocation() {
  const [isCreationFormOpen, setIsCreationFormOpen] = useState(false);
  const [isJoinFormOpen, setIsJoinFormOpen] = useState(false);

  const openCreationForm = () => {
    setIsCreationFormOpen(true);
    setIsJoinFormOpen(false);
  };

  const openJoinForm = () => {
    setIsJoinFormOpen(true);
    setIsCreationFormOpen(false);
  };

  return (
    <main className="px-6 flex flex-col p-12 space-y-6 rounded-xl  h-full grow bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] ">
      <h2 className="text-center text-4xl">Ma colocation</h2>
      <p className="text-center text-lg">
        Vous ne faites actuellement partie d&rsquo;aucune colocation.
      </p>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-8 grow">
        <div className="flex flex-col justify-center">
          {isCreationFormOpen ? (
            <CreationForm />
          ) : (
            <Card className="flex flex-col mx-auto max-w-sm h-64 w-full justify-center bg-jet-50">
              <CardHeader>
                <CardTitle className="text-2xl">Créer une colocation</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={() => openCreationForm()}>
                  Je crée ma colocation
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            {isJoinFormOpen ? (
              <JoinForm />
            ) : (
              <Card className="flex flex-col mx-auto max-w-sm h-64 w-full justify-center bg-jet-50">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Rejoindre une colocation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" onClick={() => openJoinForm()}>
                    Je rejoins une colocation
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Colocation;
