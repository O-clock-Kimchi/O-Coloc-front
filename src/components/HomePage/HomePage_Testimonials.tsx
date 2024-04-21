import { Quote } from 'lucide-react';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

import { Card, CardContent, CardTitle, CardHeader } from '../ui/card';

// AvatarFallback in case the image isn't loading
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function Testimonials() {
  return (
    <ScrollArea id="about-menu" className="w-full whitespace-nowrap">
      <section className="flex w-max space-x-4 py-4 overflow-hidden rounded-md">
        <Card className="w-[300px] h-[300px]">
          <CardHeader className="flex-row">
            <Avatar className="mr-3">
              <AvatarImage src="https://picsum.photos/200" alt="" />
              <AvatarFallback>FR</AvatarFallback>
            </Avatar>
            <div className="flex-column">
              <CardTitle>Florian</CardTitle>
              <div className="autor-data font-light text-sm">29 ans, Paris</div>
            </div>
          </CardHeader>
          <CardContent>
            <Quote className="scale-x-[-1] mb-3" size={35} color="#026d65" />
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
              <div className="autor-data font-light text-sm">29 ans, Paris</div>
            </div>
          </CardHeader>
          <CardContent>
            <Quote className="scale-x-[-1] mb-3" size={35} color="#026d65" />
            <p className="w-full text-left">
              Finie la galère des postits partagés&nbsp;! On gère tout au même
              endroit, ça nous fait gagner tellement de temps&nbsp;!
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
              <div className="autor-data font-light text-sm">75 ans, Paris</div>
            </div>
          </CardHeader>
          <CardContent>
            <Quote className="scale-x-[-1] mb-3" size={35} color="#026d65" />
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
              <div className="autor-data font-light text-sm">23 ans, Paris</div>
            </div>
          </CardHeader>
          <CardContent>
            <Quote className="scale-x-[-1] mb-3" size={35} color="#026d65" />
            <p className="w-full text-left">
              C&rsquo;est simple et efficace&nbsp;!
            </p>
            <Quote className="mt-3" size={35} color="#026d65" />
          </CardContent>
        </Card>
        <Card className="w-[300px] h-[300px] ">
          <CardHeader className="flex-row">
            <Avatar className="mr-3">
              <AvatarImage src="https://picsum.photos/200" alt="" />
              <AvatarFallback>JA</AvatarFallback>
            </Avatar>
            <div className="flex-column">
              <CardTitle>Julie</CardTitle>
              <div className="autor-data font-light text-sm">32 ans, Paris</div>
            </div>
          </CardHeader>
          <CardContent>
            <Quote className="scale-x-[-1] mb-3" size={35} color="#026d65" />
            <p className="w-full text-left">
              Ça a créé une super ambiance notre petite coloc&rsquo;. On pouvait
              difficilement rêver mieux&nbsp;! Je recommande à 200&nbsp;%&nbsp;!
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
              <div className="autor-data font-light text-sm">6 ans, Paris</div>
            </div>
          </CardHeader>
          <CardContent>
            <Quote className="scale-x-[-1] mb-3" size={35} color="#026d65" />
            <p className="w-full text-left">Trop cool &nbsp;!</p>
            <Quote className="mt-3" size={35} color="#026d65" />
          </CardContent>
        </Card>
      </section>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default Testimonials;
