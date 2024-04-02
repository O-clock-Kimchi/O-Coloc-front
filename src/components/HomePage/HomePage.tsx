import { Quote } from 'lucide-react';
import { Button } from '../ui/button';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

import { Card, CardContent, CardTitle, CardHeader } from '../ui/card';

// AvatarFallback in case the image isn't loading
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function HomePage() {
  return (
    <main className="px-6 grow">
      {/* Tagline section with CTA and illustration */}
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

            <Button className="p-6 w-100 md:w-2/5" variant="secondary">
              Créer une coloc
            </Button>
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

      {/* Fake testimonials */}

      <section className="w-100">
        <h2 className="section-title text-center text-4xl mt-12 mb-6 text-eden-800">
          Ils (ne) parlent (pas) de nous !
        </h2>
        <p className="section-subtitle text-lg text-center mb-12">
          ... et ne le feront jamais ;)
        </p>
        <ScrollArea id="about-menu" className="w-100 whitespace-nowrap">
          <section className="flex w-max space-x-4 p-4 overflow-hidden rounded-md">
            <Card className="w-[300px] h-[300px]">
              <CardHeader className="flex-row">
                <Avatar className="mr-3">
                  <AvatarImage src="https://picsum.photos/200" alt="" />
                  <AvatarFallback>FR</AvatarFallback>
                </Avatar>
                <div className="flex-column">
                  <CardTitle>Florian</CardTitle>
                  <div className="autor-data font-light text-sm">
                    29 ans, Paris
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Quote
                  className="scale-x-[-1] mb-3"
                  size={35}
                  color="#026d65"
                />
                <p className="w-full text-left">
                  Cette appli m&rsquo;a changé la vie. Je vous la recommande les
                  yeux fermés.
                </p>
                <Quote className="mt-3" size={35} color="#026d65" />
              </CardContent>
            </Card>
            <Card className="w-[300px] h-[300px]">
              <CardHeader className="flex-row">
                <Avatar className="mr-3">
                  <AvatarImage src="https://picsum.photos/200" alt="" />
                  <AvatarFallback>NC</AvatarFallback>
                </Avatar>
                <div className="flex-column">
                  <CardTitle>Noëllie</CardTitle>
                  <div className="autor-data font-light text-sm">
                    29 ans, Paris
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Quote
                  className="scale-x-[-1] mb-3"
                  size={35}
                  color="#026d65"
                />
                <p className="w-full text-left">
                  Finie la galère des postits partagés&nbsp;! On gère tout au
                  même endroit, ça nous fait gagner tellement de temps&nbsp;!
                </p>
                <Quote className="mt-3" size={35} color="#026d65" />
              </CardContent>
            </Card>
            <Card className="w-[300px] h-[300px]">
              <CardHeader className="flex-row">
                <Avatar className="mr-3">
                  <AvatarImage src="https://picsum.photos/200" alt="" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-column">
                  <CardTitle>Josette</CardTitle>
                  <div className="autor-data font-light text-sm">
                    75 ans, Paris
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Quote
                  className="scale-x-[-1] mb-3"
                  size={35}
                  color="#026d65"
                />
                <p className="w-full text-left">
                  À mon âge, c&rsquo;est difficile de se souvenir de tout.
                  Heureusement que CoHabit est là pour m&rsquo;aider&nbsp;!
                </p>
                <Quote className="mt-3" size={35} color="#026d65" />
              </CardContent>
            </Card>
            <Card className="w-[300px] h-[300px]">
              <CardHeader className="flex-row">
                <Avatar className="mr-3">
                  <AvatarImage src="https://picsum.photos/200" alt="" />
                  <AvatarFallback>AF</AvatarFallback>
                </Avatar>
                <div className="flex-column">
                  <CardTitle>Adrien</CardTitle>
                  <div className="autor-data font-light text-sm">
                    23 ans, Paris
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Quote
                  className="scale-x-[-1] mb-3"
                  size={35}
                  color="#026d65"
                />
                <p className="w-full text-left">
                  C&rsquo;est simple et efficace&nbsp;!
                </p>
                <Quote className="mt-3" size={35} color="#026d65" />
              </CardContent>
            </Card>
            <Card className="w-[300px] h-[300px]">
              <CardHeader className="flex-row">
                <Avatar className="mr-3">
                  <AvatarImage src="https://picsum.photos/200" alt="" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div className="flex-column">
                  <CardTitle>Julie</CardTitle>
                  <div className="autor-data font-light text-sm">
                    32 ans, Paris
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Quote
                  className="scale-x-[-1] mb-3"
                  size={35}
                  color="#026d65"
                />
                <p className="w-full text-left">
                  Ça a créé une super ambiance notre petite coloc&rsquo;. On
                  pouvait difficilement rêver mieux&nbsp;! Je recommande à
                  200&nbsp;%&nbsp;!
                </p>
                <Quote className="mt-3" size={35} color="#026d65" />
              </CardContent>
            </Card>
            <Card className="w-[300px] h-[300px]">
              <CardHeader className="flex-row">
                <Avatar className="mr-3">
                  <AvatarImage src="https://picsum.photos/200" alt="" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div className="flex-column">
                  <CardTitle>Patate (le chat)</CardTitle>
                  <div className="autor-data font-light text-sm">
                    6 ans, Paris
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Quote
                  className="scale-x-[-1] mb-3"
                  size={35}
                  color="#026d65"
                />
                <p className="w-full text-left">Trop cool &nbsp;!</p>
                <Quote className="mt-3" size={35} color="#026d65" />
              </CardContent>
            </Card>
          </section>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* FAQ */}
      <section>
        <h2
          id="faq-menu"
          className="section-title text-center text-4xl mt-12 mb-6 text-eden-800"
        >
          Foire aux questions
        </h2>
        <p className="section-subtitle text-lg text-center mb-12">
          Vos questions. Nos réponses.
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Comment fonctionne CoHabit ?</AccordionTrigger>
            <AccordionContent>Yes, it is working fine.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Est-ce que l&rsquo;application est gratuite ?
            </AccordionTrigger>
            <AccordionContent>Yes, it is working fine.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Pourquoi vous utilisez pas Sqitch ?
            </AccordionTrigger>
            <AccordionContent>Yes, it is working fine.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>To Be Or Not To Be?</AccordionTrigger>
            <AccordionContent>Yes, it is working fine.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* About us page */}
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

      {/* Contact */}

      <section id="contact-menu">
        <h2 className="section-title text-center text-4xl mt-12 mb-6 text-eden-800">
          Contact
        </h2>
        <p className="section-subtitle text-lg text-center mb-6">
          Une question&nbsp;? Une remarque&nbsp;? On vous répond au plus
          vite&nbsp;!
        </p>
        <p className="text-center font-regular">
          Contatez-nous à{' '}
          <a
            className="hover:text-eden-600"
            href="mailto:hello@ocohabit.com"
            title="Mail to: hello@cohabit.com"
          >
            hello@cohabit.com
          </a>
        </p>
      </section>
    </main>
  );
}

export default HomePage;
