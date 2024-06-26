// import UI components
import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

// import custom components
import Testimonials from './HomePage_Testimonials';

function Tagline() {
  return (
    <section className="min-h-screen px-6 mb-5">
      <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2">
        <div className="box-left flex flex-col gap-y-4 justify-between text-center lg:text-left lg:py-12">
          <div>
            <h1 className="text-5xl uppercase mb-4  leading-tight">
              Gérez votre coloc
              <br />
              au même endroit
            </h1>
            <p className=" px-20 lg:w-[80%] lg:px-0">
              Comme vous, on en avait marre de gérer la vie notre coloc avec
              5&nbsp;applis. On a donc créé CoHabit pour tout gérer... au même
              endroit&nbsp;! <br />
              Un jeu d&rsquo;enfant, même pour Baptiste qui ne fait jamais la
              vaisselle.
              <br />
              Une appli 100&nbsp;% gratuite.
            </p>
          </div>
          <NavLink to="/inscription">
            <Button className="p-7 w-100 md:w-3/5 text-xl" variant="secondary">
              Créer une coloc
            </Button>
          </NavLink>
        </div>
        <div className="box-right hidden lg:block">
          <img
            src="/MeditatingDoodle.svg"
            alt="A doodle showing a girl meditating"
            className="justify-self-center"
          />
        </div>
      </div>
      {/* Fake testimonials */}
      <Testimonials />
    </section>
  );
}

export default Tagline;
