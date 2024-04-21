// import UI components
import { Quote } from 'lucide-react';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Card, CardContent, CardTitle, CardHeader } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

// import custom elements
import testomonials from '../../../data/testimonials.json';

function Testimonials() {
  return (
    <ScrollArea id="about-menu" className="w-full whitespace-nowrap">
      <section className="flex w-max space-x-4 py-4 overflow-hidden rounded-md">
        {testomonials.map((testimonial) => (
          <Card className="w-[300px] h-[300px]" key={testimonial.id}>
            <CardHeader className="flex-row">
              <Avatar className="mr-3">
                <AvatarImage src="https://picsum.photos/200" alt="" />
                <AvatarFallback>
                  {testimonial.firstName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-column">
                <CardTitle>{testimonial.firstName}</CardTitle>
                <div className="autor-data font-light text-sm">
                  {testimonial.age}&nbsp;ans, {testimonial.city}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Quote className="scale-x-[-1] mb-3" size={35} color="#026d65" />
              <p className="w-full text-left">{testimonial.testimonial}</p>
              <Quote className="mt-3" size={35} color="#026d65" />
            </CardContent>
          </Card>
        ))}
      </section>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default Testimonials;
