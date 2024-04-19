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
import { logout } from '../../store/action/actions';

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
    setReconnect(false);
    navigate(`/dashboard/${colocId}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Vous avez été déconnecté</CardTitle>
        <CardDescription>
          Pour vous reconnecter, merci de confirmer votre choix ou
          d&apos;annuler.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button onClick={handleLogoutReconnect}>
          <DoorClosed />
          Se déconnecter
        </Button>
        <Button onClick={handleReconnectAndRefresh}>
          <DoorOpen />
          Se reconnecter
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ReconnectPage;
