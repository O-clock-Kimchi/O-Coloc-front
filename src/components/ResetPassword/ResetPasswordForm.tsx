import { useAppSelector } from '../../hooks/redux';
import AskReset from './AskReset';
import AskResetPassword from './AskResetPassword';

function ResetPasswordForm() {
  const isResetting = useAppSelector(
    (state) => state.passwordReducer.isResetting
  );
  return (
    <main className="px-6 flex grow">
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center space-y-9">
          {!isResetting ? <AskReset /> : <AskResetPassword />}
        </div>
      </div>
    </main>
  );
}

export default ResetPasswordForm;
