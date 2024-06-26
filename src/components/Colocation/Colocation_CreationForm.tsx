import { useState } from 'react';
import { Navigate } from 'react-router-dom';

// import UI components
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { toast } from '../ui/use-toast';
import { Toaster } from '../ui/toaster';

// import custom elements
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createColoc } from '../../store/actions/colocActions';

function CreationForm() {
  const dispatch = useAppDispatch();
  const colocId = useAppSelector((state) => state.userReducer.user.colocId);
  const isCreated = useAppSelector((state) => state.colocReducer.isCreated);
  const [nameColoc, setNameColoc] = useState<string>('');
  const errorMessage = useAppSelector(
    (state) => state.colocReducer.errorMessage
  );

  const handleCreate = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(createColoc({ name: nameColoc }));
    toast({
      description: 'Une erreur est survenue!',
      className: 'bg-tainoi-800',
    });
  };

  if (isCreated && colocId) {
    return <Navigate to={`/dashboard/${colocId}`} replace />;
  }

  return (
    <Card className="flex flex-col mx-auto max-w-sm h-64 w-full justify-center bg-jet-50">
      <CardHeader>
        <CardTitle className="text-2xl">Créer une colocation</CardTitle>
        <CardDescription>Saisissez le nom de votre colocation</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleCreate}>
          <div className="grid gap-2">
            <Label htmlFor="colocation-name" />
            <Input
              id="coloc-name"
              type="text"
              placeholder="Ma super colocation"
              value={nameColoc}
              onChange={(e) => setNameColoc(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Créer ma colocation
          </Button>
        </form>
      </CardContent>
      {errorMessage && <Toaster />}
    </Card>
  );
}

export default CreationForm;
