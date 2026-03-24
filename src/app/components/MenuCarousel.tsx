"use client";

import { useState } from "react";
import Image from "next/image";

import { MENU_ITEMS } from "../constants/menu";

export default function MenuCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MENU_ITEMS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MENU_ITEMS.length) % MENU_ITEMS.length);
  };

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1340px] px-6 md:px-12 lg:px-20 xl:px-24">
        <div className="flex flex-col gap-12 lg:gap-20">
          
          {/* Header Row (Desktop: Top Left/Right. Mobile: Keeps strict vertical order) */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end w-full gap-8 md:gap-0">
            <div className="flex flex-col items-start w-full md:w-auto">
              <h3 className="text-xl md:text-[26px] font-bold tracking-normal text-[#222222] mb-3">
                हमारा मेन्यू
              </h3>
              <h2 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[46px] leading-[1.1] font-normal tracking-tight uppercase text-[#222222]">
                {/* Mobile Text */}
                <span className="md:hidden">THE PUNJABI<br />PAPA MENU</span>
                {/* Desktop Text */}
                <span className="hidden md:block">THE PUNJABI PAPA<br />MENU</span>
              </h2>
            </div>
            <div className="flex-shrink-0">
              <a href="/menu" className="inline-block px-8 py-3 border-[1.5px] border-[#222222] text-[#222222] text-sm md:text-base font-bold uppercase tracking-wider hover:bg-[#222222] hover:text-[#F5EFE6] transition-colors duration-300">
                VIEW FULL MENU
              </a>
            </div>
          </div>

          {/* Carousel Row (Desktop: Text Left, Image Right. Mobile: Image Top, Text Bottom) */}
          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {MENU_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full shrink-0 flex flex-col md:flex-row justify-between gap-10 md:gap-12 lg:gap-24"
                >
                  {/* Left Column Text (Mobile: Order 2, Desktop: Order 1) */}
                  <div className="flex flex-col w-full md:w-[40%] flex-shrink-0 order-2 md:order-1 md:justify-end pb-0 md:pb-6">
                    {/* Title & Veg/Non-veg Indicator */}
                    <div className="flex items-center justify-between mb-4 pr-6 md:pr-0">
                      <h3 className="text-2xl md:text-[32px] font-bold uppercase tracking-wide text-[#222222]">
                        {item.title}
                      </h3>
                      {/* Veg / Non-Veg Icon */}
                      <div
                        className={`w-6 h-6 flex items-center justify-center border-2 p-1 ${
                          item.type === "veg" ? "border-green-600" : "border-red-600"
                        } shrink-0 ml-4`}
                      >
                        <div
                          className={`w-full h-full rounded-full ${
                            item.type === "veg"
                              ? "bg-green-600"
                              : "w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-transparent border-b-red-600 bg-transparent rounded-none"
                          }`}
                          style={item.type === "non-veg" ? { transform: "translateY(-1px)" } : {}}
                        ></div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-base md:text-lg text-[#555555] leading-[1.6] mb-12 pr-6 md:pr-0">
                      {item.desc}
                    </p>

                  </div>

                  {/* Right Column Image (Mobile: Order 1, Desktop: Order 2) */}
                  <div className="w-full md:w-[60%] relative order-1 md:order-2">
                    <div className="relative w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden">
                      <Image
                        src={`/asseys/Food/${item.image}`}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority={idx === 0}
                      />
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Static Navigation (Outside slider track) */}
            <div className="flex relative mt-2 md:mt-4 items-center gap-6 z-10 w-full md:w-[40%] pr-6 md:pr-0">
              <div className="h-[1px] bg-[#222222] flex-grow max-w-[150px]"></div>
              
              {currentIndex >= 1 && (
                <button
                  onClick={handlePrev}
                  className="text-xl font-normal uppercase tracking-wide text-[#222222] hover:opacity-70 transition-opacity"
                >
                  PREV
                </button>
              )}

              <button
                onClick={handleNext}
                className="text-xl font-normal uppercase tracking-wide text-[#222222] hover:opacity-70 transition-opacity"
              >
                NEXT
              </button>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
