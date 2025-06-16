// app/page.js

import Hero from "@/components/pages/hero";
import AboutMe from "@/components/pages/aboutme";
import Footer from "@/components/pages/footer";
import Projects from "@/components/pages/projects";
import History from "@/components/pages/history";
import Contact from "@/components/pages/contact";
import { ScrollProgress } from "@/components/animate-ui/components/scroll-progress";
import Technologies from "@/components/pages/technologies";

export default function Home() {
  return (
    <>
    {/*  */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <ScrollProgress progressProps={{ className: "absolute" }}>
            <Hero />
            {/* <Technologies /> */}
            <AboutMe />
            <History />
            <Projects />
            <Contact />
            <Footer />
          </ScrollProgress>
        </div>
      </div>
    </>
  );
}
