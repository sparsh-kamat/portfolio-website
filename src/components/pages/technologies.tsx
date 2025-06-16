// technologies section 
//show all technologies as badges in an infinite scroll manner

import React from "react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const technologies = [
  { name: "JavaScript", className: "bg-yellow-500" },
  { name: "TypeScript", className: "bg-blue-500" },
  { name: "React", className: "bg-cyan-500" },
  { name: "Next.js", className: "bg-gray-800" },
  { name: "Node.js", className: "bg-green-600" },
  { name: "Express", className: "bg-gray-700" },
  { name: "MongoDB", className: "bg-green-700" },
  { name: "PostgreSQL", className: "bg-blue-700" },
  { name: "Tailwind CSS", className: "bg-teal-500" },
  { name: "Bootstrap", className: "bg-purple-500" },
  { name: "CSS3", className: "bg-orange-500" },
  { name: "HTML5", className: "bg-red-500" },
  // Add more technologies as needed
];


export default function Technologies() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-3xl font-bold mb-6">Technologies</h2>
      <ScrollArea className="w-full max-w-4xl h-64">
        <div className="flex flex-wrap gap-2 p-4">
          {technologies.map((tech) => (
            <Badge
              key={tech.name}
              className={cn(
                "bg-primary text-white hover:bg-primary/80 transition-colors",
                tech.className
              )}
            >
              {tech.name}
            </Badge>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
}