"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "./ui/themeToggle";
import { Shantell_Sans } from "next/font/google";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ScrollProgress } from "./animate-ui/components/scroll-progress";

// const shantellSans = Shantell_Sans({
//   subsets: ["latin"],
//   weight: ["700"], // Using a bold weight for the logo
// });

// type for navigation links
interface NavLink {
  id: string;
  label: string;
}

const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "career", label: "Career" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault(); // Stop the default jump
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = 0; // The height of your navbar in pixels (h-16 = 4rem = 64px)
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  // Explicitly type the state variable
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections: HTMLElement[] = navLinks
        .map((link) => document.getElementById(link.id))
        .filter((el) => el !== null) as HTMLElement[];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        // The check for section is implicitly handled by the filter above
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/60 backdrop-blur-sm shadow-muted-foreground dark:bg-background/80 transition-colors duration-300 border-b border-border">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        <ModeToggle />

        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollClick(e, `#${link.id}`)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === link.id
                      ? "text-primary" // Active link style
                      : "text-muted-foreground" // Inactive link style
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-md hover:bg-muted">
                <Menu className="h-6 w-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollClick(e, `#${link.id}`)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === link.id
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}
