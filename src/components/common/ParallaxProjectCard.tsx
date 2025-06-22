"use client";

import { useScroll, useTransform, motion, useSpring } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import { type Project } from "@/lib/data";

export const ParallaxScroll = ({
  projects,
  className,
}: {
  projects: Project[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint is 768px
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Smooth spring animations for desktop
  const translateFirst = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    { stiffness: 100, damping: 20 }
  );
  const translateSecond = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    { stiffness: 100, damping: 20 }
  );

  // Simple fade-in animation for mobile
  const fadeInScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const fadeInOpacity = useTransform(scrollYProgress, [0, 0.2], [0.3, 1]);

  // Split the projects into two columns for desktop, keep all for mobile
  const half = Math.ceil(projects.length / 2);
  const firstColumn = isMobile ? projects : projects.slice(0, half);
  const secondColumn = isMobile ? [] : projects.slice(half);

  return (
    <section
      ref={gridRef}
      className={cn(
        "relative pt-10 pb-20 min-h-[50vh] mx-auto",
        className
      )}
    >
      <div className={cn(
        "grid items-start max-w-5xl mx-auto gap-10 px-0 ",
        isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
      )}>
        {/* First Column (or single column on mobile) */}
        <div className="grid gap-10">
          {firstColumn.map((project: Project, index) => (
            <motion.div
              key={"grid-1-" + project.id}
              style={isMobile ? 
                { scale: fadeInScale, opacity: fadeInOpacity } : 
                { y: translateFirst }
              }
              initial={isMobile ? 
                { opacity: 0, scale: 0.9, y: 20 } : 
                { opacity: 0, y: 30 }
              }
              animate={isMobile ? 
                { opacity: 1, scale: 1, y: 0 } : 
                { opacity: 1, y: 0 }
              }
              transition={isMobile ? 
                { delay: index * 0.1, duration: 0.6, ease: "easeOut" } : 
                { delay: index * 0.1 }
              }
              whileInView={isMobile ? {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" }
              } : undefined}
              viewport={isMobile ? { once: true, margin: "-100px" } : undefined}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Second Column (desktop only) */}
        {!isMobile && (
          <div className="grid gap-10">
            {secondColumn.map((project: Project, index) => (
              <motion.div
                key={"grid-2-" + project.id}
                style={{ y: translateSecond }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};