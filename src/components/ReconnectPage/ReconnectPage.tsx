import { useNavigate, useParams } from 'react-router-dom';
import { DoorClosed, DoorOpen } from 'lucide-react';
import {
  CardDescription,
  CardHeader,
  CardTitle,
  Card,
  CardFooter,
} from '../ui/card';
import { Button } from '../ui/button';
import { useAppDispatch } from '../../hooks/redux';
import { logout, refreshToken } from '../../store/action/actions';

interface ReconnectProps {
  setReconnect: React.Dispatch<React.SetStateAction<boolean>>;
}

function ReconnectPage({ setReconnect }: ReconnectProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { colocId } = useParams();

  const handleLogoutReconnect = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    dispatch(logout());

    setReconnect(false);
    navigate('/', { replace: true });
  };

  const handleReconnectAndRefresh = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(refreshToken());
    setReconnect(false);
    navigate(`/dashboard/${colocId}`);
  };

  return (
    <div className=" bg-jet-200 min-h-screen absolute min-w-full bg-opacity-80 vertical items-center justify-center">
      <Card className=" bg-jet-50">
        <CardHeader className=" text-center">
          <CardTitle>Vous avez été déconnecté</CardTitle>
          <CardDescription>
            Pour vous reconnecter, merci de confirmer votre choix ou
            d&apos;annuler.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-wrap justify-between gap-y-4 items-center">
          <Button onClick={handleLogoutReconnect} className=" bg-tainoi-700">
            <DoorClosed className=" mr-2" />
            Se déconnecter
          </Button>
          <Button onClick={handleReconnectAndRefresh} className=" bg-eden-700">
            <DoorOpen className=" mr-2" />
            Se reconnecter
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ReconnectPage;
