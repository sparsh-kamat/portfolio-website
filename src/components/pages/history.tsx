"use client";

import { Briefcase, GraduationCap, Code } from "lucide-react";
import { clsx } from "clsx";

const historyData = [
  {
    icon: Briefcase,
    title: "SDE Intern",
    company: "Visteon",
    date: "2024 - 2024",
    description:
      "Led the development of scalable web applications using Next.js and TypeScript, focusing on performance and user experience.",
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

export default function History() {
  return (
    <section id="career" className="flex items-start justify-center min-h-screen  ">
      <div className="flex flex-col justify-center items-center py-27 lg:px-[15%] content-center ">
        <div className="max-w-3xl  text-center px-4 lg:px-0">
          <h2 className="text-5xl  font-serif  tracking-tight leading-tight mb-10 ">
            Career History
          </h2>

          <div className="relative h-full w-full max-w-3xl md:max-w-5xl mx-auto p-4 ">
            {/* Dedicated Timeline Line */}
            <div className="absolute top-0 h-full left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
              {/* Main gradient line */}
              <div className="w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full opacity-80 relative">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-orange-400 rounded-full animate-pulse blur-sm scale-100 opacity-60"></div>
              </div>
            </div>

            {historyData.map((item, index) => (
              <div key={index} className="relative pl-12 md:pl-0 pb-7">
                {/* Icon Container */}
                <div className="absolute top-4 left-0 md:left-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center -translate-x-1/2 z-10">
                  <item.icon className="w-4 h-4" />
                </div>

                {/* Content Card */}
                <div
                  className={clsx(
                    "p-4 rounded-lg border border-border bg-card w-full text-left",
                    "md:w-[calc(50%-2rem)]",
                    {
                      "md:ml-auto": index % 2 === 0,
                      "md:mr-auto": index % 2 !== 0,
                    }
                  )}
                >
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                  <h3 className="text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="font-semibold">
                    {item.company || item.institution}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
