"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "./ui/themeToggle"; // Your existing theme toggle
import { Shantell_Sans } from "next/font/google";
//import three bars for mobile menu
import { Menu } from "lucide-react";

//dropdown menu for mobile
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"; // Assuming you have a dropdown menu component

// 2. Instantiate the font with desired settings
const shantellSans = Shantell_Sans({
  subsets: ["latin"],
  weight: ["700"], // Using a bold weight for the logo
});

// Define a type for our navigation links for type safety
interface NavLink {
  id: string;
  label: string;
}

const navLinks: NavLink[] = [
  { id: "home", label: "Home" }, // Shortened for consistency
  { id: "about", label: "About" },
  { id: "career", label: "Career" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }, // Shortened for consistency
];

export default function Navbar() {
  // Inside your Navbar component, before the `return` statement
  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault(); // Stop the default jump
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start", // Aligns the top of the section to the top of the viewport
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
    </header>
  );
}
