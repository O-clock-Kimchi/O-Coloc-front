import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
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
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createColoc } from '../../store/action/actions';
import { toast } from '../ui/use-toast';
import { Toaster } from '../ui/toaster';

function CreationForm() {
  const dispatch = useAppDispatch();
  const isCreated = useAppSelector((state) => state.colocReducer.isCreated);
  const [nameColoc, setNameColoc] = useState<string>('');

  const handleCreate = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    dispatch(createColoc({ name: nameColoc }));
    toast({
      description: `Votre coloc ${nameColoc} a été créée avec succès`,
      className: 'bg-jet-50 text-eden-800',
      duration: 1000,
    });
  };

  useEffect(() => {
    if (isCreated) {
      setTimeout(() => {
        <Navigate to="/dashboard" replace />;
      }, 900);
    }
  }, [isCreated]);

  return (
    <Card className="flex flex-col mx-auto max-w-sm h-64 w-full justify-center">
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
      {isCreated && <Toaster />}
    </Card>
  );
}

export default CreationForm;
