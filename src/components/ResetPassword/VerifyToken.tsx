import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { checkTokenReset } from '../../store/action/actions';

function VerifyToken() {
  const { token } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(checkTokenReset(token))
        .then(() => {
          navigate('/reinitialisation');
        })
        .catch((error) => {});
    }
  }, [dispatch, navigate, token]);

  return (
    <h1>
      Vous ne pouvez pas accéder à cette page. Si vous voulez réinitialiser
      votre mot de passe, cliquez ici.
    </h1>
  );
}

export default VerifyToken;
