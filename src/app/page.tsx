// app/page.js

import Hero from "@/components/pages/hero";
import AboutMe from "@/components/pages/aboutme";
import Footer from "@/components/pages/footer";
import Projects from "@/components/pages/projects";
import History from "@/components/pages/history";
import Contact from "@/components/pages/contact";
import { ScrollProgress } from "@/components/animate-ui/components/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <AboutMe />
      <History />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
