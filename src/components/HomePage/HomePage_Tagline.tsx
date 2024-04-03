import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

function Tagline() {
  return (
    <section className="h-[50%] mb-5">
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2">
        <div className="box-left flex flex-col gap-y-4 justify-between text-center md:text-left md:py-12">
          <div>
            <h1 className="text-5xl uppercase mb-4  leading-tight">
              Gérez votre coloc
              <br />
              au même endroit
            </h1>
            <p className="md:w-[80%]">
              Comme vous, on en avait marre de gérer notre coloc avec 5 applis.
              On a créé CoHabit pour gérer tout au même endroit. Un jeu
              d&apos;enfant même pour Baptiste qui ne fait jamais la vaisselle.
            </p>
          </div>
          <NavLink to="/inscription">
            <Button className="p-7 w-100 md:w-3/5 text-xl" variant="secondary">
              Créer une coloc
            </Button>
          </NavLink>
        </div>
        <div className="box-right">
          <img
            src="/MeditatingDoodle.svg"
            alt="meditating doodle"
            className="justify-self-center"
          />
        </div>
      </div>
    </section>
  );
}

export default Tagline;
