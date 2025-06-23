"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ui/themeToggle";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ScrollProgress } from "./animate-ui/components/scroll-progress";

interface NavLink {
  id: string;
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About", href: "/#about" },
  { id: "career", label: "Career", href: "/#career" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (pathname !== "/") {
      return;
    }
    
    e.preventDefault(); 
    if (targetId === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        const sections: HTMLElement[] = navLinks
          .map((link) => document.getElementById(link.id))
          .filter((el) => el !== null) as HTMLElement[];
        const scrollPosition = window.scrollY + 160;

        let currentSection = "home";
        for (const section of sections) {
          if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
          ) {
            currentSection = section.id;
            break;
          }
        }
        setActiveSection(currentSection);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/60 backdrop-blur-sm shadow-muted-foreground dark:bg-background/80 transition-colors duration-300 border-b border-border">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        <ModeToggle />
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive =
                (pathname === "/projects" && link.id === "projects") ||
                (pathname === "/" && activeSection === link.id);

              return (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleScrollClick(e, `#${link.id}`)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-md hover:bg-muted"
              aria-label="Open navigation  menu">
                <Menu className="h-6 w-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navLinks.map((link) => {
                const isActive =
                  (pathname === "/projects" && link.id === "projects") ||
                  (pathname === "/" && activeSection === link.id);
                return (
                  <DropdownMenuItem key={link.id}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleScrollClick(e, `#${link.id}`)}
                      className={`text-sm font-medium transition-colors hover:text-primary w-full ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}