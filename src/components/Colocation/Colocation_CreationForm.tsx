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

function CreationForm() {
  return (
    <Card className="flex flex-col mx-auto max-w-sm h-64 w-full justify-center">
      <CardHeader>
        <CardTitle className="text-2xl">Créer une colocation</CardTitle>
        <CardDescription>Saisissez le nom de votre colocation</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="colocation-name" />
            <Input
              id="coloc-name"
              type="text"
              placeholder="Ma super colocation"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Créer ma colocation
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CreationForm;
