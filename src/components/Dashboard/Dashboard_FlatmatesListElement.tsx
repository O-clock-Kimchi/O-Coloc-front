import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

import { IFlatmate, IUser } from '../../@types/coloc';
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
      <Avatar
        className="flex sm:flex align rounded-3xl
                  justify-center items-center"
      >
        <AvatarImage src="" />
        <AvatarFallback
          className="text-xs"
          style={{ backgroundColor: flatmate.color }}
        >
          {getFormattedFallback(flatmate.firstname)}
        </AvatarFallback>
      </Avatar>
      <div className="grid gap-1">
        <p className="text-lg font-small leading-none">{displayName}</p>
        {/* <p className="text-sm text-muted-foreground">Joined on DD.MM.YYYY</p> */}
      </div>
    </div>
  );
}

export default FlatmatesListElement;
