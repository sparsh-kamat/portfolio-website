// components/common/ProjectCard.tsx

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { Separator } from '@/components/ui/separator';
import TechBadge from '@/components/common/TechBadge'; // <-- Import the new TechBadge
import { type Project } from '@/lib/data'; // <-- Import the Project type

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group h-full flex flex-col ">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={400}
          height={225}
        />
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100  transition-opacity duration-300">
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} className="p-2 rounded-full bg-secondary hover:bg-secondary/90 transition-colors border border-border">
            <IconBrandGithub className="w-5 h-5" />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`} className="p-2 rounded-full bg-secondary hover:bg-secondary/90 transition-colors border border-border">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 ">{project.description}</p>
        <Separator className="my-4" />
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

//horizontal card for all projects page

export function HorizontalProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col md:flex-row">
      <div className="relative aspect-video md:w-1/3 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={400}
          height={225}
        />
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100  transition-opacity duration-300">
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} className="p-2 rounded-full bg-secondary hover:bg-secondary/90 transition-colors border border-border">
            <IconBrandGithub className="w-5 h-5" />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`} className="p-2 rounded-full bg-secondary hover:bg-secondary/90 transition-colors border border-border">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between md:w-2/3">
        <div>
          <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </div>
      
    </div>
  );
}