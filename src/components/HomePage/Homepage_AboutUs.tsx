import { Card } from '../ui/card';

function AboutUs() {
  return (
    <section id="about-menu" className="min-h-screen px-6">
      <h2 className="section-title text-center text-4xl mt-12 mb-6 text-eden-800">
        Qui somme-nous&nbsp;?
      </h2>
      <p className="section-subtitle text-lg text-center mb-12">
        Des passionnés comme on n&rsquo;en trouve pas partout&nbsp;!
      </p>
      <div className="grid grid-cols-1 grid-rows-1 gap-5 lg:grid-cols-5 lg:gap-8 grid-flow-row-dense">
        <div className="team-member-card shrink-0 relative">
          <img
            src="../../../public/Profils/Aude.webp"
            alt=""
            className="profile-picture aspect-[3/4] h-fit w-fit object-cover rounded-md"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-opacity-10 text-floral-white bg-jet-700 text-center rounded-md">
            <p className="team-firstname pt-2 text-s text-muted-foreground">
              Aude
            </p>
            <p className="team-position pt-2 text-xs text-muted-foreground">
              Développeuse back-end
            </p>
          </div>
        </div>

        <div className="team-member-card shrink-0">
          <img
            src="../../../public/Profils/Caitlyne.webp"
            alt=""
            className="profile-picture aspect-[3/4] h-fit w-fit object-cover"
          />
          <p className="team-firstname pt-2 text-s text-muted-foreground">
            Caitlyne
          </p>
          <p className="team-position pt-2 text-xs text-muted-foreground">
            Développeuse back-end
          </p>
        </div>
        <div className="team-member-card shrink-0">
          <img
            src="../../../public/Profils/Florian.webp"
            alt=""
            className="profile-picture aspect-[3/4] h-fit w-fit object-cover"
          />
          <p className="team-firstname pt-2 text-s text-muted-foreground">
            Florian
          </p>
          <p className="team-position pt-2 text-xs text-muted-foreground">
            Développeur front-end
          </p>
        </div>
        <div className="team-member-card shrink-0">
          <img
            src="../../../public/Profils/Mickael.webp"
            alt=""
            className="profile-picture aspect-[3/4] h-fit w-fit object-cover"
          />
          <p className="team-firstname pt-2 text-s text-muted-foreground">
            Mickaël
          </p>
          <p className="team-position pt-2 text-xs text-muted-foreground">
            Développeur back-end
          </p>
        </div>
        <div className="team-member-card shrink-0">
          <img
            src="../../../public/Profils/Noellie.webp"
            alt=""
            className="profile-picture aspect-[3/4] h-fit w-fit object-cover"
          />
          <p className="team-firstname pt-2 text-s text-muted-foreground">
            Noëllie
          </p>
          <p className="team-position pt-2 text-xs text-muted-foreground">
            Développeuse front-end
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
