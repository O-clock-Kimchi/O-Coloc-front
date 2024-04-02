import { useState } from 'react';

import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

import CreationForm from './Colocation_CreationForm';
import JoinForm from './Colocation_JoinForm';

function Colocation() {
  const [isCreationFormOpen, setIsCreationFormOpen] = useState(false);
  const [isJoinFormOpen, setIsJoinFormOpen] = useState(false);

  return (
    <main className="flex flex-col px-6 grow h-full">
      <h2 className="text-center text-4xl">Ma colocation</h2>
      <p className="text-center text-lg">
        Vous ne faites actuellement partie d&rsquo;aucune colocation.
      </p>
      <div className="grid grid-cols-2 grid-rows-1 gap-8 grow">
        <div className="flex flex-col justify-center">
          {isCreationFormOpen ? (
            <CreationForm />
          ) : (
            <Card className="flex flex-col mx-auto max-w-sm h-64 w-full justify-center">
              <CardHeader>
                <CardTitle className="text-2xl">Créer une colocation</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  type="submit"
                  className="w-full"
                  onClick={() => setIsCreationFormOpen(true)}
                >
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
              <Card className="flex flex-col mx-auto max-w-sm h-64 w-full justify-center">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Rejoindre une colocation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    type="submit"
                    className="w-full"
                    onClick={() => setIsJoinFormOpen(true)}
                  >
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
