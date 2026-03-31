'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PunjabiHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check internal width for mobile detection
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Track scroll of this section which is say 150vh tall to allow for scrolling.
  // The animation completes well before the end of the scroll if we want.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // width scales from say 65vw to 100vw
  const widthTransform = useTransform(
    scrollYProgress, 
    [0, 1], 
    [isMobile ? "85vw" : "65vw", "100vw"]
  );
  
  // Responsive height and positioning
  const heightTransform = useTransform(
    scrollYProgress, 
    [0, 1], 
    [isMobile ? "55vh" : "78vh", "100vh"]
  );
  const topTransform = useTransform(
    scrollYProgress, 
    [0, 1], 
    [isMobile ? "22.5vh" : "11vh", "0vh"]
  );
  
  // The logo fades out as user scrolls
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[160vh] bg-[#f4eedb]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-start">
        
        {/* LOGO */}
        <motion.div 
          style={{ opacity: logoOpacity }}
          className="w-full flex justify-center pt-6 pb-4 absolute top-0 left-0 right-0 z-10 h-[12vh] items-center"
        >
          {/* Standard img tag for the SVG to avoid next/image space issues in urls and allow simple loading */}
          <img 
            src="/assets/panjabi/LOGO (1).svg" 
            alt="Logo" 
            className="w-auto h-16 md:h-14 lg:h-16"
          />
        </motion.div>

        {/* Dynamic Video Wrapper */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center overflow-hidden"
          style={{ 
            width: widthTransform, 
            height: heightTransform,
            top: topTransform,
          }}
        >
          {/* Video Background */}
          <video 
            src="/assets/panjabi/Hero.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
          />
          
          {/* Centered Text */}
          <h1 className="relative z-10 text-white text-center font-serif text-2xl md:text-4xl lg:text-[52px] px-4 max-w-3xl tracking-wide leading-tight font-Playfair Display">
            &ldquo;From our kitchen. You&rsquo;ll be tasting<br />warmth in every bite.&rdquo;
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
