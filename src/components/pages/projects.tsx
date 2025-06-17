import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/common/ProjectCard";

export default function Projects() {
  return (
    <section className="flex flex-col min-h-full py-10 items-center justify-center bg-muted/10">
      <div className="flex flex-col justify-center items-center  lg:px-[15%] content-center">
        <div className="max-w-3xl mx-auto text-center px-4 lg:px-0">
          <h1 className="text-5xl  font-serif  tracking-tight leading-tight mb-3">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Here are some of the projects I've worked on. Each project showcases
            different technologies and skills.
          </p>
        </div>
      </div>
      {/* grid container */}
      <div className=" flex items-center w-full max-w-6xl mx-auto px-10 xl:px-0 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  w-full   ">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Button variant="outline" className="mt-8">
        <Link href="/projects" className="flex items-center gap-2">
          View All Projects
          <ExternalLink className="w-4 h-4" />
        </Link>
      </Button>
    </section>
  );
}
