'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const dishes = [
  {
    title: "FAUJI MUTTON",
    description: "Slow-cooked mutton in a rich, spicy gravy inspired by traditional North Indian army mess recipes. Bold flavours, tender meat, and pure desi comfort.",
    image: "/assets/dishes/fauji_mutton.jpg",
    isNonVeg: true,
  },
  {
    title: "CHICKEN METHI MALAI",
    description: "Creamy chicken cooked with fresh methi leaves, mild spices, and buttery gravy. Smooth, aromatic, and perfectly comforting.",
    image: "/assets/dishes/chicken_methi_malai.jpg",
    isNonVeg: true,
  },
  {
    title: "CHICKEN BLACK PEPPER",
    description: "Juicy chicken tossed in a bold black pepper sauce with balanced spices. Light, flavorful, and perfect for a high-protein meal",
    image: "/assets/dishes/chicken_black_pepper.jpeg",
    isNonVeg: true,
  },
  {
    title: "MASALA PROTIEN EGG",
    description: "Hard-boiled eggs simmered in a flavorful tomato-onion gravy with aromatic spices. A protein-packed Punjabi comfort meal.",
    image: "/assets/dishes/Egg.jpg.jpeg",
    isNonVeg: true,
  },
  {
    title: "PANEER MAKHNI",
    description: "Soft paneer cubes simmered in a rich tomato-butter gravy with subtle spices and cream. A classic North Indian favourite.",
    image: "/assets/dishes/paneer_makhni.jpg",
    isNonVeg: false,
  },
  {
    title: "DAL MAKHNI",
    description: "Slow-cooked black lentils simmered overnight with butter, cream, and traditional spices for that deep Punjabi flavour.",
    image: "/assets/dishes/dal_makhni.jpg",
    isNonVeg: false,
  },
  {
    title: "ALOO JEERA",
    description: "Cumin-tempered potatoes cooked with aromatic spices, fresh coriander, and a touch of ginger. A classic Punjabi side dish.",
    image: "/assets/dishes/Aloo_jeera.jpeg",
    isNonVeg: false,
  },
  {
    title: "ALOO SABJI",
    description: "Simple and soul-satisfying potatoes sautéed with cumin seeds, turmeric, and fresh ginger. A quintessential North Indian side dish.",
    image: "/assets/dishes/Aloo.jpg.jpeg",
    isNonVeg: false,
  },
  {
    title: "RAJMA CHAWAL",
    description: "The ultimate Punjabi comfort duo—spiced red kidney beans served with fluffy steamed rice.",
    image: "/assets/dishes/rajma_rice.jpg.jpeg",
    isNonVeg: false,
  },
  {
    title: "STEAMED RICE",
    description: "Simple, fluffy steamed rice, the perfect companion to rich curries and gravies.",
    image: "/assets/dishes/Rice.jpg",
    isNonVeg: false,
  }
];

const NonVegIcon = () => (
  <div className="w-5 h-5 border-2 border-red-800 flex items-center justify-center p-0.5" title="Non-Vegetarian">
    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-red-800 rounded-sm"></div>
  </div>
);

const VegIcon = () => (
  <div className="w-5 h-5 border-2 border-green-800 flex items-center justify-center p-0.5" title="Vegetarian">
    <div className="w-2.5 h-2.5 bg-green-800 rounded-full"></div>
  </div>
);

export default function HandcraftedDishes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < dishes.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const currentDish = dishes[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === dishes.length - 1;

  return (
    <section className="bg-[#F0ECE0] py-16 px-6 md:px-12 lg:px-20 overflow-hidden min-h-[70vh] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Top Header */}
        <div className="text-center mb-12">
          <p className="font-serif italic text-lg md:text-xl text-[#524131] mb-3">
            Freshly Prepared
          </p>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-[45px] text-[#3a2e20] leading-[1.1] tracking-wide uppercase max-w-3xl mx-auto font-bold">
            HANDCRAFTED DISHES, READY WHEN YOU ARE
          </h2>
        </div>

        {/* Main Content Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Left Column: Text Content */}
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <div className="flex items-center gap-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#3a2e20] tracking-wider uppercase">
                    {currentDish.title}
                  </h3>
                  {currentDish.isNonVeg ? <NonVegIcon /> : <VegIcon />}
                </div>

                <p className="font-serif italic text-lg md:text-xl leading-relaxed text-[#564937] max-w-md min-h-[100px]">
                  {currentDish.description}
                </p>

                {/* Navigation Controls */}
                <div className="mt-8 flex flex-col gap-8">
                  <div className="flex items-center gap-6 select-none w-fit">
                    {!isFirst && (
                      <button 
                        onClick={prevSlide}
                        className="font-serif text-lg md:text-xl text-[#3a2e20] tracking-widest uppercase hover:opacity-60 transition-opacity cursor-pointer"
                      >
                        PREVIOUS
                      </button>
                    )}
                    
                    <div className="w-12 md:w-16 h-[2px] bg-[#3a2e20]"></div>

                    {!isLast && (
                      <button 
                        onClick={nextSlide}
                        className="font-serif text-lg md:text-xl text-[#3a2e20] tracking-widest uppercase hover:opacity-60 transition-opacity cursor-pointer"
                      >
                        NEXT
                      </button>
                    )}
                  </div>

                  <a 
                    href="/menu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3.5 border border-[#3a2e20] text-[#3a2e20] font-serif tracking-[0.15em] uppercase hover:bg-[#3a2e20] hover:text-[#F0ECE0] transition-all duration-300 w-fit text-xs md:text-sm font-semibold"
                  >
                    View Full Catalogue
                  </a>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full aspect-[4/3] max-w-[550px] overflow-hidden shadow-2xl">
                  <Image
                    src={currentDish.image}
                    alt={currentDish.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    unoptimized
                  />
                  {/* Decorative Subtle Overlay */}
                  <div className="absolute inset-0 bg-[#3a2e20]/5 pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="mt-12 flex justify-center gap-2">
          {dishes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-500 ease-in-out ${
                idx === currentIndex ? 'w-12 bg-[#3a2e20]' : 'w-3 bg-[#3a2e20]/20'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
