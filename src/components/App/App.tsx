import { Button } from '../ui/button';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

import { Card, CardContent, CardTitle, CardHeader } from '../ui/card';

// AvatarFallback in case the image isn't loading
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function App() {
  return (
    <div className=" container mx-auto  min-h-screen flex flex-col">
      <header className="flex items-center flex-wrap justify-between py-4 mb-6 px-6 w-full">
        <div>
          <img
            className="w-14 md:w-28 lg:w-40"
            src="/logo_cropped.png"
            alt="Logo de CoHabit"
          />
        </div>

        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="#"
                >
                  Accueil
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="#faq-menu"
                >
                  FAQ
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="#about-menu"
                >
                  À propos de nous
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="#contact-menu"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Button variant="outline">Se connecter</Button>
      </header>

      <main className="px-6 grow">
        {/* Tagline section with CTA and illustration */}
        <section className="h-[50%] mb-5">
          <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2">
            <div className="box-left flex flex-col gap-y-4 justify-between text-center md:text-left">
              <div>
                <h1 className="text-5xl uppercase">
                  Gérez votre coloc au même endroit
                </h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                facere voluptates, blanditiis dolore aliquid distinctio aperiam
                in quas animi! Corrupti exercitationem cumque porro iste
                voluptatibus dolor. Voluptatum voluptate repellendus voluptatem.
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
          <h2>Ils ne parlent (pas) de nous !</h2>
          <ScrollArea id="about-menu" className="w-100 whitespace-nowrap">
            <section className="flex w-max space-x-4 p-4 overflow-hidden rounded-md">
              <Card className="w-[300px] h-[200px]">
                <CardHeader className="flex">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>FR</AvatarFallback>
                  </Avatar>
                  <CardTitle>Florian</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Cette appli ma changé la vie. Je vous la recommande les yeux
                    fermés.
                  </p>
                </CardContent>
              </Card>
              <div className="shrink-0">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="aspect-[3/4] h-fit w-fit object-cover"
                />
                <p className="pt-2 text-xs text-muted-foreground">Prénom</p>
              </div>

              <div className="shrink-0">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="aspect-[3/4] h-fit w-fit object-cover"
                />
                <p className="pt-2 text-xs text-muted-foreground">Prénom</p>
              </div>

              <div className="shrink-0">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="aspect-[3/4] h-fit w-fit object-cover"
                />
                <p className="pt-2 text-xs text-muted-foreground">Prénom</p>
              </div>

              <div className="shrink-0">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="aspect-[3/4] h-fit w-fit object-cover"
                />
                <p className="pt-2 text-xs text-muted-foreground">Prénom</p>
              </div>

              <div className="shrink-0">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="aspect-[3/4] h-fit w-fit object-cover"
                />
                <p className="pt-2 text-xs text-muted-foreground">Prénom</p>
              </div>

              <div className="shrink-0">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="aspect-[3/4] h-fit w-fit object-cover"
                />
                <p className="pt-2 text-xs text-muted-foreground">Prénom</p>
              </div>
            </section>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        {/* FAQ */}
        <section>
          <h2 id="faq-menu">Foire aux questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Comment fonctionne CoHabit ?</AccordionTrigger>
              <AccordionContent>Yes, it is working fine.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Est-ce que l&apos;application est gratuite ?
              </AccordionTrigger>
              <AccordionContent>Yes, it is working fine.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Pourquoi vous utilisez pas Sqitch ?
              </AccordionTrigger>
              <AccordionContent>Yes, it is working fine.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* About us page */}
        <ScrollArea
          id="about-menu"
          className="w-96 whitespace-nowrap rounded-md border"
        >
          <h2>Qui est derrière ce projet ?</h2>
          <section className="flex w-max space-x-4 p-4 overflow-hidden rounded-md">
            <div className="shrink-0">
              <img
                src="https://picsum.photos/200"
                alt=""
                className="aspect-[3/4] h-fit w-fit object-cover"
              />
              <p className="pt-2 text-xs text-muted-foreground">Prénom</p>
            </div>

            <div className="shrink-0">
              <img
                src="https://picsum.photos/200"
                alt=""
                className="aspect-[3/4] h-fit w-fit object-cover"
              />
              <p className="pt-2 text-xs text-muted-foreground">Prénom</p>
            </div>

            <div className="shrink-0">
              <img
                src="https://picsum.photos/200"
                alt=""
                className="aspect-[3/4] h-fit w-fit object-cover"
              />
              <p className="pt-2 text-xs text-muted-foreground">Prénom</p>
            </div>
          </section>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {/* Contact */}

        <section id="contact-menu">
          <h2>Contact</h2>
          <p>Une question ? Une remarque ?</p>
          <p>Contatez-nous à hello@ocoloc.com</p>
        </section>
      </main>

      <footer className="py-5 bg-jet-900 text-center text-floral-white w-screen">
        <p>CoHabit 2024 - Kimchi</p>
      </footer>
    </div>
  );
}

export default App;
