import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import TechBadge from "../common/TechBadge"; // Assuming this is the correct path
  
  // --- 1. Define your skills in categorized arrays ---
  const frontendTech = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript ",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Framer Motion",
    "Shadcn UI",
  ];
  
  const backendTech = [
      "Node.js", 
      "Express", 
      "Prisma", 
      "Supabase", 
      "PostgreSQL", 
      "MongoDB",
      "REST APIs"
  ];
  
  const toolsAndDevops = [
      "GitHub", 
      "Vercel", 
      "Docker", 
      "Webpack", 
      "VS Code"
  ];
  
  export default function AboutMe() {
    return (
      <section id="about" className="w-full py-24 sm:py-32 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          {/* --- Your Existing About Me Intro --- */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight">
              About Me
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hi, I'm Sparsh- a passionate Full Stack Developer with a knack for creating dynamic, user-friendly applications. Here's a look at the technologies I work with.
            </p>
          </div>
  
          {/* --- NEW: Tech Stack Section --- */}
          <div className="max-w-5xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Frontend Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Frontend</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {frontendTech.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </CardContent>
              </Card>
  
              {/* Backend Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Backend</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {backendTech.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </CardContent>
              </Card>
  
              {/* Tools & DevOps Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Tools & DevOps</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {toolsAndDevops.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }