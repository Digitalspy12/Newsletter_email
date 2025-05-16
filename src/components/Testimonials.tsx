
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
        <div className="inline-block bg-gray-800 px-4 py-1 rounded-full text-xs uppercase tracking-wider text-green-400">
          User_Feedback
        </div>
        <h2 className="text-3xl font-bold glitch-text">What Our Subscribers Say</h2>
        <p className="text-green-300 max-w-2xl mx-auto font-mono">
          We receive hundreds of messages every month from developers who have found value in our newsletter.
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full terminal-window">
                <div className="terminal-header">
                  <span className="terminal-circle red"></span>
                  <span className="terminal-circle yellow"></span>
                  <span className="terminal-circle green"></span>
                  <span className="ml-2 text-green-400 text-sm">testimonial_{testimonial.id}.log</span>
                </div>
                <CardContent className="p-6 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <p className="text-sm text-green-400 mb-2 font-mono"># {testimonial.date}</p>
                    <p className="text-green-300 font-mono">"{testimonial.content}"</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <Avatar className="h-10 w-10 mr-3 border border-green-700">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback className="bg-gray-800 text-green-400">{testimonial.fallback}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-green-400 terminal-cursor">{testimonial.author}</span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 text-green-400 border-green-400 hover:bg-green-900/20" />
        <CarouselNext className="right-1 text-green-400 border-green-400 hover:bg-green-900/20" />
      </Carousel>
    </section>
  );
};

export default Testimonials;
