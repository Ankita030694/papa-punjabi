'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

interface HoverVideoCardProps {
  imageSrc: string;
  videoSrc: string;
  title: string;
  subtitle: string;
}

function HoverVideoCard({ imageSrc, videoSrc, title, subtitle }: HoverVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
        videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
        videoRef.current.pause();
    }
  };

  return (
    <div 
      className="relative w-full aspect-[4/5] overflow-hidden group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video layer */}
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Image layer */}
      <div 
        className={`absolute inset-0 w-full h-full bg-[#F0ECE0] transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          unoptimized // To prevent any issues with standard local images returning 404 from next optimizer if files missing
        />
      </div>

      {/* Decorative Box Overlay inside image, fixed at bottom */}
      <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 z-10 pointer-events-none">
        {/* Outer border & Box */}
        <div className="bg-[#ebe3cf] border border-[#524131] p-1.5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
            {/* Inner border */}
            <div className="border border-[#524131] py-5 px-2 text-center flex flex-col items-center justify-center">
                <h4 className="font-serif text-xl md:text-2xl text-[#3b2e21] tracking-widest uppercase mb-1 drop-shadow-sm">
                  {title}
                </h4>
                <p className="font-serif italic text-base md:text-lg text-[#5e4b38]">
                  {subtitle}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderMadeSimple() {
  return (
    <section className="bg-[#F0ECE0] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Header section */}
        <div className="text-center mb-12 flex flex-col items-center">
            <h3 className="font-serif italic text-lg md:text-xl text-[#524131] mb-4">
              Order Made Simple
            </h3>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#3a2e20] leading-tight tracking-wide max-w-3xl uppercase">
              CHECK THE MENU, SEND A MESSAGE,<br className="hidden md:block"/> WE'LL HANDLE THE REST
            </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            <HoverVideoCard 
              imageSrc="/assets/panjabi/19eab856a563d9df0bc6e7bfec697f9dd4625942.jpg"
              videoSrc="/assets/panjabi/View MEnu.mp4"
              title="VIEW MENU"
              subtitle="Explore our full selection"
            />

            <HoverVideoCard 
              imageSrc="/assets/panjabi/4d4532cacf426a1f2e8504a967becf1bd94549f9.jpg"
              videoSrc="/assets/panjabi/Order on whatsapp.mp4"
              title="ORDER ON WHATSAPP"
              subtitle="Quick & easy ordering"
            />

        </div>
      </div>
    </section>
  );
}
