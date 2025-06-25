// lib/data.ts
import { Briefcase, Code, GraduationCap } from "lucide-react";

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
        image: "/subscriptionTrackr.jpg",
        live: "https://subsciptiontrackr.vercel.app",
        github: "https://github.com/sparsh-kamat/SubscriptionTrackr",
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A modern, SEO-optimized portfolio showcasing my skills and projects. Built from the ground up with Next.js, Tailwind CSS, and Framer Motion to create a fast and engaging user experience.",
        technologies: ["Next.js", "React", "TypeScript", "Shadcn UI", "Tailwind CSS"],
        image: "/portfoliomockup.jpg",
        live: "#", // You can link to the portfolio itself
        github: "https://github.com/sparsh-kamat/portfolio-website",
    },
    //add 5 more to test carousel
    // {
    //     id: 3,
    //     title: "Subscription Trackr",
    //     description: "A full-stack subscription management app built with Next.js and Prisma. Features a responsive dashboard, multi-currency conversion, and automated renewal alerts to help users track their spending.",
    //     technologies: ["Next.js", "Supabase", "Tailwind CSS", "Prisma", "Vercel", "OAuth"],
    //     image: "/subscriptionTrackr.png",
    //     live: "https://subsciptiontrackr.vercel.app",
    //     github: "https://github.com/sparsh-kamat/SubscriptionTrackr",
    // },
    // {
    //     id: 4,
    //     title: "Portfolio Website",
    //     description: "A modern, SEO-optimized portfolio showcasing my skills and projects. Built from the ground up with Next.js, Tailwind CSS, and Framer Motion to create a fast and engaging user experience.",
    //     technologies: ["Next.js", "React", "TypeScript", "Shadcn UI", "Tailwind CSS"],
    //     image: "/portfoliomockup.png",
    //     live: "#", // You can link to the portfolio itself
    //     github: "https://github.com/sparsh-kamat/portfolio-v2",
    // },
    // {
    //     id: 5,
    //     title: "Subscription Trackr",
    //     description: "A full-stack subscription management app built with Next.js and Prisma. Features a responsive dashboard, multi-currency conversion, and automated renewal alerts to help users track their spending.",
    //     technologies: ["Next.js", "Supabase", "Tailwind CSS", "Prisma", "Vercel", "OAuth"],
    //     image: "/subscriptionTrackr.png",
    //     live: "https://subsciptiontrackr.vercel.app",
    //     github: "https://github.com/sparsh-kamat/SubscriptionTrackr",
    // },
    // {
    //     id: 6,
    //     title: "Portfolio Website",
    //     description: "A modern, SEO-optimized portfolio showcasing my skills and projects. Built from the ground up with Next.js, Tailwind CSS, and Framer Motion to create a fast and engaging user experience.",
    //     technologies: ["Next.js", "React", "TypeScript", "Shadcn UI", "Tailwind CSS"],
    //     image: "/portfoliomockup.png",
    //     live: "#", // You can link to the portfolio itself
    //     github: "https://github.com/sparsh-kamat/portfolio-v2",
    // },

    // ... more projects
];

export const historyData = [
    {
      icon: Briefcase,
      title: "SDE Intern",
      company: "Visteon",
      date: "2024 - 2024",
      description:
        "Worked on the AOSP framework, enhancing CarService functionality and improving Android services within an automotive context.  Gained hands-on experience with porting features across different Android versions and hardware platforms such as Exynos, Snapdragon, and MediaTek.",
    },
    {
      icon: Code,
      title: "Started with web development",
      company: "theodinproject.com",
      date: "2023 - 2025",
      description:
        "Began my journey in web development, learning how learn technologies through documentation. Developed several personal projects to enhance my skills.",
    },
    {
      icon: GraduationCap,
      title: "B.E(Hons) in Computer Science",
      institution: "Goa College of Engineering",
      date: "2021 - 2025",
      description:
        "Graduated with a 8.6 GPA, focusing on computer science and software development principles.",
    },
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

