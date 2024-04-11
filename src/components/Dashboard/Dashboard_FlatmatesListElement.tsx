import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function FlatmatesListElement() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="hidden h-12 w-12 sm:flex">
        <AvatarImage src="https://picsum.photos/200" alt="Avatar" />
        <AvatarFallback>NC</AvatarFallback>
      </Avatar>
      <div className="grid gap-1">
        <p className="text-lg font-small leading-none">Moi (Noëllie)</p>
        <p className="text-sm text-muted-foreground">
          Membre depuis le 01.04.2024
        </p>
      </div>
    </div>
  );
}

export default FlatmatesListElement;
