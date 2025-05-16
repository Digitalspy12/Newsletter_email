
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";

// This array can be modified to change testimonials
export const testimonials = [
  {
    id: 1,
    date: "March 2023",
    content: "The best dev newsletter I've subscribed to. Their deep dives into system architecture are phenomenal.",
    author: "Jamie H.",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=jamie",
    fallback: "JH",
  },
  {
    id: 2,
    content: "Concise, technical, and actually useful. The security tips helped me identify and fix vulnerabilities in my codebase.",
    date: "October 2022",
    author: "Taylor S.",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=taylor",
    fallback: "TS",
  },
  {
    id: 3,
    content: "I learned more practical DevOps tricks from this newsletter than from months of searching online forums.",
    date: "January 2023",
    author: "Morgan P.",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=morgan",
    fallback: "MP",
  },
  {
    id: 4,
    content: "Essential reading for any backend developer. Their database optimization series saved our startup significant cloud costs.",
    date: "April 2023",
    author: "Riley D.",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=riley",
    fallback: "RD",
  },
];

const Testimonials = () => {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-block bg-gray-800 px-4 py-1 rounded-full text-xs uppercase tracking-wider text-gray-300">
          Testimonials
        </div>
        <h2 className="text-3xl font-bold">What Our Subscribers Say</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We receive hundreds of messages every month from developers who have found value in our newsletter.
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full bg-gray-900/60 border-gray-800">
                <CardContent className="p-6 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">{testimonial.date}</p>
                    <p className="text-gray-300">"{testimonial.content}"</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback className="bg-gray-800 text-gray-200">{testimonial.fallback}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{testimonial.author}</span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1" />
        <CarouselNext className="right-1" />
      </Carousel>
    </section>
  );
};

export default Testimonials;
