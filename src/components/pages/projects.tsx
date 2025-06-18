// "use client";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/common/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import autoplay from "embla-carousel-autoplay";

import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import AutoScroll from 'embla-carousel-auto-scroll';
import * as React from "react";



export default function Projects() {
  // const autoplay = React.useRef(
  //   Autoplay({
  //     delay: 3000,
  //     stopOnInteraction: true,
  //   }),

  // );

  // const wheelGestures = React.useRef(
  //   WheelGesturesPlugin({
  //     forceWheelAxis: true, // Optional: Force scrolling on the wheel axis
  //     preventDefaultOnTouchMove: true, // Optional: Prevent default touch move behavior
  //   })
  // );

  // const autoScroll = React.useRef(
  //   AutoScroll({
  //     speed: 0.5, // Optional: Speed of auto-scrolling
  //     stopOnInteraction: true, // Optional: Stop auto-scrolling on user interaction
  //   })
  // );


  return (
    <section
      id="projects"
      className="  flex flex-col  min-h-full py-20 items-center justify-center bg-muted/10"
    >
      <div className="flex flex-col justify-center items-center  lg:px-[15%] content-center">
        <div className="max-w-3xl mx-auto text-center px-4 lg:px-0">
          <h2 className="text-5xl  font-serif  tracking-tight leading-tight mb-3">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Here are some of the projects I've worked on. Each project showcases
            different technologies and skills.
          </p>
        </div>
      </div>

      {/*  thisis the old approach with grid layout */}
      
      <div className=" flex items-center w-full max-w-md md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-10 xl:px-0  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  w-full   ">
          {projects.slice(0,4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* New Carousel Layout allow loops
      <Carousel
        className="w-full max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 lg:px-0"
        opts={{
          loop: true,
        }}
        plugins={[autoplay.current, ]}
        onMouseEnter={() => {
          autoplay.current.stop();
        }}
        onMouseLeave={() => {
          autoplay.current.play();
        }}
        onTouchStart={() => {
          autoplay.current.stop();
        }}
        onTouchEnd={() => {
          autoplay.current.play();
        }}
      >
        {/* CarouselContent is the wrapper for all CarouselItems */}
        {/* <CarouselContent className=" ">
          {projects.map((project) => (
            <CarouselItem key={project.id} className=" md:basis-1/2 ">
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent> */}
        {/* if (projects.length > 2) {(
        <CarouselPrevious className="hidden md:flex  " />
        <CarouselNext className="hidden md:flex " />
        )} */}

      {/* conditionally display the arrow */}
        {/* {projects.length > 2 && (
          <>
            <CarouselPrevious className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
            <CarouselNext className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
          </>
        )}
        
      </Carousel> */} 

      <Button variant="outline" className="mt-8">
        <Link href="/projects" className="flex items-center gap-2">
          View All Projects
          <ExternalLink className="w-4 h-4" />
        </Link>
      </Button>
    </section>
  );
}
