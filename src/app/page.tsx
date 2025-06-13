// app/page.js
import Image from "next/image";
import Hero from "@/components/pages/hero";
import AboutMe from "@/components/pages/aboutme";
import Footer from "@/components/pages/footer";
import Projects from "@/components/pages/projects";
import History from "@/components/pages/history";
import Contact from "@/components/pages/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <History />
      <Projects />
      <Contact />
      <Footer />
      
    </>
  );
}
