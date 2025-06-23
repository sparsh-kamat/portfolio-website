"use client";

import { clsx } from "clsx";
import { historyData } from "@/lib/data";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function History() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const timelineHeight = useTransform(
    scrollYProgress,
    [0.2, 1],
    ["0%", "100%"]
  );

  return (
    <section
      id="career"
      className="flex items-start justify-center min-h-screen  "
    >
      <div className="flex flex-col justify-center items-center py-27 lg:px-[15%] content-center ">
        <div className="max-w-3xl  text-center px-4 lg:px-0">
          <h2 className="text-5xl  font-serif  tracking-tight leading-tight mb-10 ">
            Career History
          </h2>

          <div
            ref={containerRef}
            className="relative h-full w-full max-w-3xl md:max-w-5xl mx-auto p-4 "
          >
            {/* Dedicated Timeline Line */}
            <div className=" absolute top-0 h-full left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
              {/* Animated gradient line */}
              <motion.div
                className="absolute top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full opacity-80"
                style={{ height: timelineHeight }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-orange-400 rounded-full animate-pulse blur-sm scale-100 opacity-60" />
              </motion.div>
            </div>

            {historyData.map((item, index) => (
              <div key={index} className="relative pl-12 md:pl-0 pb-7">
                {/* Icon Container */}
                <div className="absolute top-4 left-0 md:left-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center -translate-x-1/2 z-10">
                  <item.icon className="w-4 h-4" />
                </div>

                {/* Content Card */}
                <motion.div
                  className={clsx(
                    "p-4 rounded-lg border border-border bg-card w-full text-left",
                    "md:w-[calc(50%-2rem)]",
                    {
                      "md:ml-auto": index % 2 === 0,
                      "md:mr-auto": index % 2 !== 0,
                    }
                  )}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? 50 : -50,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: false, margin: "-100px" }}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    rotate: index % 2 === 0 ? 2 : -2,
                    transition: { duration: 0.2 },
                  }}
                >
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                  <h3 className="text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="font-semibold">
                    {item.company || item.institution}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
