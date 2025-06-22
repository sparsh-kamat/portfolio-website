// Description: About Me section for a portfolio website, showcasing technologies used in development.

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TechBadge from "@/components/common/TechBadge";
import { frontendTech, backendTech, toolsAndDevops, programmingLanguages } from "@/lib/data";

export default function AboutMe() {
  return (
    <section id="about" className="w-full py-27  bg-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-serif tracking-tight leading-tight mb-3">
            About Me 
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Hi, I'm Sparsh - a passionate Full Stack Developer with a knack for
            creating dynamic, user-friendly applications. Here's a look at the
            technologies I work with.
          </p>
        </div>

        <div className=" mx-auto mt-12 max-w-xs  md:max-w-7xl px-4 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-3">
            {/* Frontend Card */}
            <Card >
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Frontend
                </CardTitle>
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
                <CardTitle className="text-2xl text-primary">
                  Tools & DevOps
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {toolsAndDevops.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </CardContent>
            </Card>

            {/* Programming Languages Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                   Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {programmingLanguages.map((tech) => (
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
