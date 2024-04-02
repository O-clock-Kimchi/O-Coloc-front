import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

function Tagline() {
  return (
    <section className="h-[50%] mb-5">
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2">
        <div className="box-left flex flex-col gap-y-4 justify-between text-center md:text-left">
          <div>
            <h1 className="text-5xl uppercase">
              Gérez votre coloc
              <br />
              au même endroit
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            facere voluptates, blanditiis dolore aliquid distinctio aperiam in
            quas animi! Corrupti exercitationem cumque porro iste voluptatibus
            dolor. Voluptatum voluptate repellendus voluptatem.
          </p>
          <NavLink to="/inscription">
            <Button className="p-6 w-100 md:w-2/5" variant="secondary">
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
