import { projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {ArrowLeft } from "lucide-react";
import ProjectList from "./projectlist";

export default function Projects() {

  return (
    <section className="flex flex-col min-h-dvh py-20 items-center justify-center bg-muted/10">
      {/* Back Navigation */}
      <div className="w-full max-w-5xl mx-auto px-10 xl:px-0 mb-8">
        <Link href="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center lg:px-[15%] content-center">
        <div className="max-w-3xl mx-auto text-center px-4 lg:px-0">
          <h1 className="text-5xl font-serif tracking-tight leading-tight mb-3">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Here are all of the projects I've worked on. Each project showcases
            different technologies and skills.
          </p>
        </div>
      </div>

      <div className="flex items-center w-full max-w-md md:max-w-5xl mx-auto px-10 xl:px-0 mb-8">
       <ProjectList projects={projects} />
      </div>
    </section>
  );
}
