function AboutUs() {
  return (
    <section id="about-menu">
      <h2 className="section-title text-center text-4xl mt-12 mb-6 text-eden-800">
        Qui somme-nous&nbsp;?
      </h2>
      <p className="section-subtitle text-lg text-center mb-12">
        Des passionnés comme on n&rsquo;en trouve pas partout&nbsp;!
      </p>
      <div className="grid grid-cols-1 grid-rows-1 gap-5 md:grid-cols-5 content-center place-items-center">
        <div className="team-member-card shrink-0">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="profile-picture aspect-[3/4] h-fit w-fit object-cover"
          />
          <p className="team-firstname pt-2 text-s text-muted-foreground">
            Aude
          </p>
          <p className="team-position pt-2 text-xs text-muted-foreground">
            Développeuse back-end
          </p>
        </div>

        <div className="team-member-card shrink-0">
          <img
            src="https://picsum.photos/200"
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
            src="https://picsum.photos/200"
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
            src="https://picsum.photos/200"
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
            src="https://picsum.photos/200"
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
