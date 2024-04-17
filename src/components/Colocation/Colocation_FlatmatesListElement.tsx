import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { IFlatmate } from '../../@types/coloc';
import getFormattedFallback from '../../utils/getFormattedFallback';

interface FlatmatesListElementProps {
  flatmate: IFlatmate;
  isCurrentUser: boolean;
}

function FlatmatesListElement({
  flatmate,
  isCurrentUser,
}: FlatmatesListElementProps) {
  const displayName = isCurrentUser
    ? `${flatmate.firstname} (moi)`
    : flatmate.firstname;
  return (
    <div className="flex items-center gap-4">
      <Avatar className="hidden h-12 w-12 sm:flex">
        <AvatarImage src="" alt="Avatar" />
        <AvatarFallback
          className="text-xs"
          style={{ backgroundColor: flatmate.color }}
        >
          {getFormattedFallback(flatmate.firstname)}
        </AvatarFallback>
      </Avatar>
      <div className="grid gap-1">
        <p className="text-lg font-small leading-none">{displayName}</p>
        <p className="text-sm text-muted-foreground">
          Membre depuis le 01.04.2024
        </p>
      </div>
    </div>
  );
}

export default FlatmatesListElement;
