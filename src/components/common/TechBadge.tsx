// components/common/TechBadge.tsx

import Image from 'next/image';
import {
  IconBrandGithub, IconBrandReact, IconDatabase, IconBrandNodejs,
  IconBrandNextjs, IconBrandTypescript, IconBrandTailwind, IconBrandSupabase,
  IconBrandVercel, IconBrandFramerMotion, IconBrandPrisma, IconBrandOauth,IconBrandHtml5,IconBrandCss3,IconBrandMongodb,IconBrandJavascript, IconBrandDocker,IconBrandDjango
  
} from "@tabler/icons-react";
import { JSX } from 'react';



const getTechIcon = (tech: string): JSX.Element | null => {
  const normalizedTech = tech.toLowerCase().replace(/[.\s]/g, "");

  const techIcons: { [key: string]: JSX.Element } = {
    react: <IconBrandReact size={14} className="inline mr-1.5" />,
    nextjs: <IconBrandNextjs size={14} className="inline mr-1.5" />,
    nodejs: <IconBrandNodejs size={14} className="inline mr-1.5" />,
    typescript: <IconBrandTypescript size={14} className="inline mr-1.5" />,
    tailwindcss: <IconBrandTailwind size={14} className="inline mr-1.5" />,
    supabase: <IconBrandSupabase size={14} className="inline mr-1.5" />,
    vercel: <IconBrandVercel size={14} className="inline mr-1.5" />,
    framermotion: <IconBrandFramerMotion size={14} className="inline mr-1.5" />,
    prisma: <IconBrandPrisma size={14} className="inline mr-1.5" />,
    github: <IconBrandGithub size={14} className="inline mr-1.5" />,
    postgresql: <IconDatabase size={14} className="inline mr-1.5" />,
    html: <IconBrandHtml5 size={14} className="inline mr-1.5" />,
    css: <IconBrandCss3 size={14} className="inline mr-1.5" />,
    oauth: <IconBrandOauth size={14} className="inline mr-1.5" />,
    mongodb: <IconBrandMongodb size={14} className="inline mr-1.5" />,
    javascript: <IconBrandJavascript size={14} className="inline mr-1.5" />,
    django: <IconBrandDjango size={14} className="inline mr-1.5" />,
    docker: <IconBrandDocker size={14} className="inline mr-1.5" />,
    heroku: (
      <span className="inline-flex items-center mr-1.5">
        <Image src={"/heroku.svg"} alt="Heroku" className="invert-0 dark:invert" width={14} height={14} />
      </span>
    ),
    
    shadcnui: (
      <span className="inline-flex items-center mr-1.5">
        <Image src={"/shadcn-ui.svg"} alt="Shadcn UI" className="invert-0 dark:invert" width={14} height={14} />
      </span>
    ),
    express: (
      <span className="inline-flex items-center mr-1.5">
        <Image src={"/express.svg"} alt="Express" className="invert-0 dark:invert" width={14} height={14} />
      </span>
    ),
    java: (
        <span className="inline-flex items-center mr-1.5">
            <Image src={"/java.svg"} alt="Java" className="invert-0 dark:invert" width={14} height={14} />
        </span>
        ),
    c: (
        <span className="inline-flex items-center mr-1.5">
            <Image src={"/c.svg"} alt="C" className="invert-0 dark:invert" width={14} height={14} />
        </span>
    ),


    // Add any other icons you need
  };
  return techIcons[normalizedTech] || null;
};

export default function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground flex items-center">
      {getTechIcon(tech)}
      {tech}
    </span>
  );
}