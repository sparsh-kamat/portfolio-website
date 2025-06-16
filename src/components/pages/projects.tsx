import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandReact,
  IconDatabase,
  IconBrandNodejs,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandSupabase,
  IconBrandVercel,
  IconBrandFramerMotion,
  IconBrandPrisma,
} from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { JSX } from "react";

const projects = [
  // Example project data
  {
    id: 1,
    title: "Subscription Trackr",
    description:
      "A full-stack subscription management app built with Next.js and Prisma. Features a responsive dashboard, multi-currency conversion, and automated renewal alerts to help users track their spending.",
    technologies: [
      "React",
      "Next.js",
      "Supabase",
      "Tailwind ",
      "Prisma",
      "Vercel",
    ], // Example technologies used in the project
    image: "/subscriptionTrackr.png", // Placeholder image, replace with actual image paths
    live: "https://subsciptiontrackr.vercel.app",
    github: "https://github.com/sparsh-kamat/SubscriptionTrackr",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern, SEO-optimized portfolio showcasing my skills and projects. Built from the ground up with Next.js, Tailwind CSS, and Framer Motion to create a fast and engaging user experience.",
    technologies: ["Next.js", "React", "TypeScript", "Shadcn UI", "Tailwind"],
    image: "/portfoliomockup.png",
    live: "#",
    github: "https://github.com/sparsh-kamat/portfolio-website",
  },
  // Add more projects as needed
];

const getTechIcon = (tech: string) => {
  const normalizedTech = tech.toLowerCase().replace(/[.\s]/g, "");

  const techIcons: { [key: string]: JSX.Element } = {
    react: <IconBrandReact className="inline mr-1" />,
    nextjs: <IconBrandNextjs className="inline mr-1" />,
    nodejs: <IconBrandNodejs className="inline mr-1" />,
    typescript: <IconBrandTypescript className="inline mr-1" />,
    firebase: <IconDatabase className="inline mr-1" />,
    tailwind: <IconBrandTailwind className="inline mr-1" />,
    supabase: <IconBrandSupabase className="inline mr-1" />,
    vercel: <IconBrandVercel className="inline mr-1" />,
    framer: <IconBrandFramerMotion className="inline mr-1" />,
    prisma: <IconBrandPrisma className="inline mr-1" />,

    shadcnui: (
      <span className="inline-flex items-center mr-1">
        <Image
          src={"/shadcn-ui.svg"}
          alt="Shadcn UI"
          className="invert-0 dark:invert  "
          width={20}
          height={20}
        />
      </span>
    ),
  };
  return techIcons[normalizedTech] || null;
};

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground flex items-center">
      {getTechIcon(tech)}
      {tech}
    </span>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden card-hover shadow-sm hover:shadow-md transition-all duration-500 group">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={400}
          height={225}
        />
        <div className="absolute top-3 right-3 flex gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`} // Accessibility improvement
            className="p-2 rounded-full bg-secondary hover:bg-secondary/90 transition-colors border border-border"
          >
            <IconBrandGithub className="w-4 h-4" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`} // Accessibility improvement
            className="p-2 rounded-full bg-secondary hover:bg-secondary/90 transition-colors border border-border"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="p-6 ">
        <h3 className="text-xl lg:text-2xl font-medium text-primary mb-2">
          {project.title}
        </h3>
        <p className="text-sm lg:text-md text-muted-foreground mb-4 flex flex-grow  ">
          {project.description}
        </p>
        <Separator className="my-4" />
        <div className="flex flex-wrap gap-2 justify-center">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center bg-muted/10">
      <div className="flex flex-col justify-center items-center lg:px-[15%] content-center">
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
      <div className=" flex items-center w-full max-w-6xl mx-auto px-10 xl:px-0 mb-">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  w-full   ">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Button variant="outline" className="mt-8">
        <Link href="#" className="flex items-center gap-2">
          View All Projects
          <ExternalLink className="w-4 h-4" />
        </Link>
      </Button>
    </section>
  );
}
