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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              facere voluptates, blanditiis dolore aliquid distinctio aperiam in
              quas animi! Corrupti exercitationem cumque porro iste voluptatibus
              dolor. Voluptatum voluptate repellendus voluptatem.
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
