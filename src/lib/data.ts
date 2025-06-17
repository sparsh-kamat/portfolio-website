// lib/data.ts

// Define and export the type for a single project
export type Project = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    live: string;
    github: string;
};

// Define and export your projects array
export const projects: Project[] = [
    {
        id: 1,
        title: "Subscription Trackr",
        description: "A full-stack subscription management app built with Next.js and Prisma. Features a responsive dashboard, multi-currency conversion, and automated renewal alerts to help users track their spending.",
        technologies: ["Next.js", "Supabase", "Tailwind CSS", "Prisma", "Vercel", "OAuth"],
        image: "/subscriptionTrackr.png",
        live: "https://subsciptiontrackr.vercel.app",
        github: "https://github.com/sparsh-kamat/SubscriptionTrackr",
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A modern, SEO-optimized portfolio showcasing my skills and projects. Built from the ground up with Next.js, Tailwind CSS, and Framer Motion to create a fast and engaging user experience.",
        technologies: ["Next.js", "React", "TypeScript", "Shadcn UI", "Tailwind CSS"],
        image: "/portfoliomockup.png",
        live: "#", // You can link to the portfolio itself
        github: "https://github.com/sparsh-kamat/portfolio-v2",
    },
    // ... more projects
];


export const frontendTech = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
];

export const backendTech = [
    "Next.js",
    "Node.js",
    "Express",
    "Prisma",
    "Supabase",
    "PostgreSQL",
    "Django",
];

export const toolsAndDevops = ["GitHub", "Vercel", "Docker", "Heroku"];

export const programmingLanguages = ["JavaScript", "Java", "C++"];

