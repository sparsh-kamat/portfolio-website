'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const pathname = usePathname(); // Get the current page path

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);

    // --- Robust Hover Detection ---
    // Select all interactive elements on the page
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    
    // Add hover listeners to these elements
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
    // Re-run this effect whenever the user navigates to a new page
  }, [pathname]); 


  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed top-0 left-0 w-3 h-3 custom-cursor-dot rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out`}
        style={{
          transform: `translate(${mousePosition.x - 6}px, ${mousePosition.y - 6}px) scale(${isHovering ? 2.5 : 1})`,
          mixBlendMode: 'difference', // Creates a cool color-inverting effect
        }}
      />
      
      {/* Cursor trail/outline */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 border custom-cursor-outline rounded-full pointer-events-none z-50 transition-transform duration-300 ease-out`}
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
    </>
  );
}