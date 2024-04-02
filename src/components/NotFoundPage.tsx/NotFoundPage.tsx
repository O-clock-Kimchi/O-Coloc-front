import { NavLink } from 'react-router-dom';

import { Button } from '../ui/button';

function NotFoundPage() {
  return (
    <main className="px-6 flex grow">
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-10">
          <p className="flex 404-message text-8xl self-center text-eden-800">
            404
          </p>
          <p className="flex error-message text-2xl text-center w-full">
            Oups&nbsp;! La page que vous recherchez ne semble pas exister...
          </p>
          <div className="button-container flex justify-center">
            <NavLink to="/">
              <Button className="flex p-6 w-100 md:w-auto" variant="secondary">
                Retourner à l&rsquo;accueil
              </Button>
            </NavLink>
          </div>
        </div>
        <div className="flex box-right">
          <img
            src="/DumpingDoodle.svg"
            alt="dumping doodle"
            className="justify-self-center self-center"
          />
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
