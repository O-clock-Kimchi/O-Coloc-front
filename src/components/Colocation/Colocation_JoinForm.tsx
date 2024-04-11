import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '../ui/input-otp';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { joinColoc } from '../../store/action/actions';
import { toast } from '../ui/use-toast';
import { Toaster } from '../ui/toaster';

function JoinForm() {
  const dispatch = useAppDispatch();
  const isCreated = useAppSelector((state) => state.colocReducer.isCreated);
  const errorMessage = useAppSelector(
    (state) => state.colocReducer.errorMessage
  );
  const [otp, setOtp] = useState<string>('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (otp) {
      await dispatch(joinColoc({ groupe_code_valid: otp }));
    }
  };

  toast({
    description: `${errorMessage}`,
    className: 'bg-tainoi-800',
  });

  if (isCreated && !errorMessage) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <Card className="flex flex-col mx-auto max-w-sm h-64 justify-center">
      <CardHeader>
        <CardTitle className="text-2xl">Rejoindre une colocation</CardTitle>
        <CardDescription>Saisissez le code d&rsquo;accès</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <InputOTP maxLength={8} value={otp ?? ''} onChange={setOtp}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
                <InputOTPSlot index={6} />
                <InputOTPSlot index={7} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <Button type="submit" className="w-full">
            Rejoindre une colocation
          </Button>
        </form>
      </CardContent>
      {errorMessage && <Toaster />}
    </Card>
  );
}

export default JoinForm;
