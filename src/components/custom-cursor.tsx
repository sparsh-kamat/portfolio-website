"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname(); // Get the current page path

  useEffect(() => {
    //reset hover state when the user navigates to a new page
    setIsHovering(false);
    setIsVisible(true); // Reset visibility when navigating to a new page

    // This effect runs once to detect touch hardware and mark the body.
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.body.classList.add('touch-device');
    }

    let inactivityTimer: NodeJS.Timeout;

    // --- Mouse Position Tracking ---
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Show cursor and reset inactivity timer
      setIsVisible(true);
      clearTimeout(inactivityTimer);
      
      // Set new timer to hide cursor after 3 seconds
      inactivityTimer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener("mousemove", updateMousePosition);

    // --- Robust Hover Detection ---
    // Select all interactive elements on the page
    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    );

    // Add hover listeners to these elements
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Start initial timer
    inactivityTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      clearTimeout(inactivityTimer);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
    // Re-run this effect whenever the user navigates to a new page
  }, [pathname]);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`hover:block custom-cursor-dot fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out`}
        style={{
          transform: `translate(${mousePosition.x - 6}px, ${mousePosition.y - 6}px) scale(${isHovering ? 2.5 : 1})`,
          mixBlendMode: "difference", // Creates a cool color-inverting effect
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Cursor trail/outline */}
      <div
        className={`hover:block custom-cursor-outline fixed top-0 left-0 w-8 h-8 border rounded-full pointer-events-none z-50 transition-opacity duration-300`}
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px) scale(${isHovering ? 1.5 : 1})`,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
