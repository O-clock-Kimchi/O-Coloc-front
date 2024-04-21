import { Github, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';

function AboutUs() {
  return (
    <section id="about-menu" className="min-h-screen px-6">
      <div className="grid grid-cols-2 grid-flow-row lg:grid-cols-3 gap-5 ">
        <Card className=" bg-tainoi-300 vertical justify-center items-center w-[100%] overflow-hidden sm:w-[90%]">
          <CardContent>
            <h2 className=" text-2xl md:text-5xl lg:text-5xl pb-6">
              La team CoHabit
            </h2>
            <p className=" text-sm md:text-xl lg:text-xl text-jet-800">
              Découvrez l&apos;équipe qui a pensé et développé notre
              application. Ce site a été développé pour un projet de fin
              d&apos;études.
            </p>
          </CardContent>
        </Card>

        <Card className="team-member-card shrink-0 w-[100%] sm:w-[90%]">
          <CardHeader className="h-auto w-full">
            <img
              src="../../../public/Profils/Aude.webp"
              alt=""
              className="profile-picture aspect-[3/4] h-fit w-fit object-cover rounded"
            />
          </CardHeader>
          <CardContent className="rounded-b px-5">
            <div className=" pb-3">
              <h2 className="team-firstname pt-2 text-xl text-muted-foreground text-left">
                Aude{' '}
              </h2>
              <p className="text-jet-500 text-lg">Développeuse back-end</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Button variant="outline" className="flex-1">
                <Github size={15} className=" mr-3" />
                <a
                  href="https://github.com/audeangelo"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  Github
                </a>
              </Button>
              <Button variant="secondary" className="flex-1">
                <Linkedin size={15} className=" mr-3" />
                <a
                  href="https://www.linkedin.com/in/audeangelo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="team-member-card shrink-0 w-[100%] sm:w-[90%]">
          <CardHeader className="h-auto w-full">
            <img
              src="../../../public/Profils/Florian.webp"
              alt=""
              className="profile-picture aspect-[3/4] h-fit w-fit object-cover rounded"
            />
          </CardHeader>
          <CardContent className="rounded-b px-5">
            <div className=" pb-3">
              <h2 className="team-firstname pt-2 text-xl text-muted-foreground text-left">
                Florian{' '}
              </h2>
              <p className="text-jet-500 text-lg">Développeur front-end</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Button variant="outline" className="flex-1">
                <Github size={15} className=" mr-3" />
                <a
                  href="https://github.com/florianrumigny"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  Github
                </a>
              </Button>
              <Button variant="secondary" className="flex-1">
                <Linkedin size={15} className=" mr-3" />
                <a
                  href="https://www.linkedin.com/in/florian-rumigny/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="team-member-card shrink-0 w-[100%] sm:w-[90%]">
          <CardHeader className="h-auto w-full">
            <img
              src="../../../public/Profils/Caitlyne.webp"
              alt=""
              className="profile-picture aspect-[3/4] h-fit w-fit object-cover rounded"
            />
          </CardHeader>
          <CardContent className="rounded-b px-5">
            <div className=" pb-3">
              <h2 className="team-firstname pt-2 text-xl text-muted-foreground text-left">
                Caitlyne{' '}
              </h2>
              <p className="text-jet-500 text-lg">Développeuse back-end</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Button variant="outline" className="flex-1">
                <Github size={15} className=" mr-3" />
                <a
                  href="https://github.com/CaitlyneBertrandias"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  Github
                </a>
              </Button>
              <Button variant="secondary" className="flex-1">
                <Linkedin size={15} className=" mr-3" />
                <a
                  href="https://www.linkedin.com/in/florian-rumigny/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="team-member-card shrink-0 w-[100%] sm:w-[90%]">
          <CardHeader className="h-auto w-full">
            <img
              src="../../../public/Profils/Noellie.webp"
              alt=""
              className="profile-picture aspect-[3/4] h-fit w-fit object-cover rounded"
            />
          </CardHeader>
          <CardContent className="rounded-b px-5">
            <div className=" pb-3">
              <h2 className="team-firstname pt-2 text-xl text-muted-foreground text-left">
                Noëllie{' '}
              </h2>
              <p className="text-jet-500 text-lg">Développeuse front-end</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Button variant="outline" className="flex-1">
                <Github size={15} className=" mr-3" />
                <a
                  href="https://github.com/NollieChtn6"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  Github
                </a>
              </Button>
              <Button variant="secondary" className="flex-1">
                <Linkedin size={15} className=" mr-3" />
                <a
                  href="https://www.linkedin.com/in/florian-rumigny/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="team-member-card shrink-0 w-[100%] sm:w-[90%]">
          <CardHeader className="h-auto w-full">
            <img
              src="../../../public/Profils/Mickael.webp"
              alt=""
              className="profile-picture aspect-[3/4] h-fit w-fit object-cover rounded"
            />
          </CardHeader>
          <CardContent className="rounded-b px-5">
            <div className=" pb-3">
              <h2 className="team-firstname pt-2 text-xl text-muted-foreground text-left">
                Mickael{' '}
              </h2>
              <p className="text-jet-500 text-lg">Développeur back-end</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Button variant="outline" className="flex-1">
                <Github size={15} className=" mr-3" />
                <a
                  href="https://github.com/MickaelSanches"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  Github
                </a>
              </Button>
              <Button variant="secondary" className="flex-1">
                <Linkedin size={15} className=" mr-3" />
                <a
                  href="https://www.linkedin.com/in/mickael-sanches-loureiro/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default AboutUs;
