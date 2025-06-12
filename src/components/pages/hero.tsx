import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import { Mail } from "lucide-react";
import Link from "next/link";
import { Twitter } from "lucide-react";

import Image from "next/image";
import profilePhoto from "../../../public/IMG_8724.png";

export default function Hero() {
  return (
    <section className="flex items-center min-h-screen ">
      <div className="flex flex-col md:flex-row gap-0 md:gap-4 px-5 md:px-[12%] lg:px-[15%]   content-center   ">
        <Image
          src={profilePhoto}
          alt="Profile Photo"
          className="rounded-full flex-shrink-0 w-52 h-52 md:w-52 md:h-52 lg:w-64 lg:h-64  "
          width={200}
          height={200}
          priority // Ensures the image is loaded immediately
        />

        <div className="flex-col flex  justify-center">
          <div className="flex-row flex gap-4 order-last md:order-first pt-5 md:pt-0">
            <Link
              href="https://github.com/sparsh-kamat"
              target="_blank"
              className="social-link"
            >
              <Image
                src={GithubIcon}
                alt="GitHub"
                className="invert-0 dark:invert transition-all duration-300"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://linkedin.com/in/sparshkamat" target="_blank">
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                className="invert-0 dark:invert transition-all duration-300"
                width={24}
                height={24}
              />
            </Link>
            <Link href="mailto:kamatsparsh@gmail.com" target="_blank">
              <Mail width={24} height={24} />
            </Link>
          </div>
          <h1 className="text-7xl md:pt-4 font-serif text-left">
            <span>Sparsh</span> {/* Add a space for the inline view */}
            <span className="block lg:inline text-primary">Kamat</span>
          </h1>
          <p className="font-serif text-xl pt-4 lg:pt-9 text-muted-foreground">
            Full Stack Engineer | Tech Enthusiast
          </p>
          
        </div>
      </div>
    </section>
  );
}
