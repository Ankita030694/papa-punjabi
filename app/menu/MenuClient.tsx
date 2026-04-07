'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CertifiedKitchen from '../components/footer';

const dishes = [
  {
    id: 1,
    name: "PUNJABI PAPA MUTTON",
    description: "Slow-cooked to perfection with bold spices, deep flavors, and a comforting richness. A recipe inspired by tradition, made to be remembered.",
    image: "/assets/dishes/fauji_mutton.jpg",
    isVeg: false,
    badge: "Chef's Special"
  },
  {
    id: 2,
    name: "CHICKEN BLACK PEPPER",
    description: "A bold and aromatic specialty featuring tender chicken cooked with freshly ground black peppercorns and aromatic spices for that perfect kick.",
    image: "/assets/dishes/chicken_black_pepper.jpeg",
    isVeg: false,
    badge: "Chef's Special"
  },
  {
    id: 3,
    name: "DAL MAKHNI",
    description: "Our signature black lentils, slow-cooked overnight on a charcoal flame, enriched with butter and cream for a velvety, smoky finish.",
    image: "/assets/dishes/dal_makhni.jpg",
    isVeg: true,
    badge: "Chef's Special"
  },
  {
    id: 4,
    name: "PANEER MAKHNI",
    description: "Soft cottage cheese cubes simmered in a luscious, mildly sweet tomato-based gravy with plenty of butter and silk-smooth cream.",
    image: "/assets/dishes/paneer_makhni.jpg",
    isVeg: true,
    badge: "Chef's Special"
  },
  {
    id: 6,
    name: "CHICKEN METHI MALAI",
    description: "A delicate combination of fresh fenugreek leaves and tender chicken in a rich, creamy white sauce that is both subtly sweet and earthy.",
    image: "/assets/dishes/chicken_methi_malai.jpg",
    isVeg: false,
    badge: "Chef's Special"
  },

  {
    id: 8,
    name: "ALOO SABJI",
    description: "Simple and soul-satisfying potatoes sautéed with cumin seeds, turmeric, and fresh ginger. A quintessential North Indian side dish.",
    image: "/assets/dishes/Aloo.jpg.jpeg",
    isVeg: true,
    badge: ""
  },
  {
    id: 9,
    name: "MASALA PROTIEN EGG",
    description: "Hard-boiled eggs simmered in a flavorful tomato-onion gravy with aromatic spices. A protein-packed Punjabi comfort meal.",
    image: "/assets/dishes/Egg.jpg.jpeg",
    isVeg: false,
    badge: ""
  },
  {
    id: 10,
    name: "RAJMA CHAWAL",
    description: "The ultimate Punjabi comfort duo—spiced red kidney beans served with fluffy steamed rice.",
    image: "/assets/dishes/rajma_rice.jpg.jpeg",
    isVeg: true,
    badge: "Popular"
  },
  {
    id: 11,
    name: "RAJMA + ROTI",
    description: "Hearty Rajma served with soft, handmade Rotis. A wholesome and filling meal.",
    image: "/assets/dishes/rajma_roti.jpg.jpeg",
    isVeg: true,
    badge: ""
  },
  {
    id: 12,
    name: "DAL + CHAWAL",
    description: "Comforting Dal Makhni tempered with cumin and garlic, served with fluffy steamed rice.",
    image: "/assets/dishes/dal_roti.jpg.jpeg",
    isVeg: true,
    badge: ""
  },
  {
    id: 13,
    name: "PANEER MAKHNI + ROTI",
    description: "Succulent paneer in a rich gravy paired with soft Rotis for a classic North Indian experience.",
    image: "/assets/dishes/paneer_roti.jpg.jpeg",
    isVeg: true,
    badge: ""
  },
  {
    id: 14,
    name: "PANEER MAKHNI + CHAWAL",
    description: "Succulent paneer in a rich gravy paired with soft Rotis for a classic North Indian experience.",
    image: "/assets/dishes/paneer_roti_alternate.jpg.jpeg",
    isVeg: true,
    badge: ""
  },
  {
    id: 15,
    name: "STEAMED RICE",
    description: "Simple, fluffy steamed rice, the perfect companion to rich curries and gravies.",
    image: "/assets/dishes/Rice.jpg",
    isVeg: true,
    badge: ""
  },
  {
    id: 16,
    name: "ALOO JEERA",
    description: "Simple, fluffy steamed rice, the perfect companion to rich curries and gravies.",
    image: "/assets/dishes/Aloo_jeera.jpeg",
    isVeg: true,
    badge: ""
  },
    {
    id: 17,
    name: "TAWA ROTI/GHEE ROTI",
    description: "Simple, fluffy steamed rice, the perfect companion to rich curries and gravies.",
    image: "/assets/dishes/roti.jpeg",
    isVeg: true,
    badge: ""
  },

];

export default function MenuClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(false);

  const filteredDishes = dishes.filter(dish => {
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVeg = vegOnly ? dish.isVeg : true;
    return matchesSearch && matchesVeg;
  });

  const whatsappLink = "https://wa.me/917428199631?text=I%20want%20to%20order%20";

  return (
    <div className="min-h-screen bg-[#F0ECE0] text-[#2D241E] font-cormorant pb-32">
      {/* Top Navbar with Logo */}
      <nav className="w-full h-[12vh] flex items-center justify-center pt-6 pb-4">
        <Link href="/" className="hover:scale-105 transition-transform duration-300">
          <img 
            src="/assets/panjabi/pp_logo.svg" 
            alt="Logo" 
            className="w-auto h-16 md:h-50 lg:h-36 mt-5"
          />
        </Link>
      </nav>

      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <h1 className="text-4xl md:text-5xl font-playfair mb-6 italic leading-tight">
          "Our Products"
        </h1>
        <h2 className="text-2xl md:text-3xl font-playfair mb-4">
          Taste You Can Choose From
        </h2>
        <p className="text-lg md:text-xl italic opacity-85 leading-relaxed font-light max-w-2xl">
          Every dish on our menu is prepared fresh with authentic spices and homemade care. 
          From rich non-veg specialties to comforting veg meals explore flavors crafted to satisfy every craving.
        </p>
      </section>

      {/* Filter/Search Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row gap-6 items-center">
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search dishes..."
            className="w-full border border-[#D9C4B1] bg-white px-4 py-2.5 outline-none rounded-sm transition-all focus:border-[#2D241E]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D9C4B1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </span>
        </div>

        <button 
          onClick={() => {setSearchTerm(''); setVegOnly(false);}}
          className="bg-[#2D241E] text-white px-10 py-2.5 font-medium tracking-wide hover:bg-[#3D342E] transition-colors"
        >
          All
        </button>

        <div className="flex items-center gap-3">
          <span className="font-bold tracking-wider text-sm">VEG ONLY</span>
          <button 
            onClick={() => setVegOnly(!vegOnly)}
            className={`w-12 h-6 rounded-full transition-colors relative ${vegOnly ? 'bg-green-600' : 'bg-[#D9C4B1]'}`}
          >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${vegOnly ? 'right-1' : 'left-1'}`} />
          </button>
        </div>
      </section>

      {/* Browse Our Selection */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <p className="italic text-xl mb-4 font-light opacity-80">Browse Our Selection</p>
        <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold border-b border-blue-500 inline-block pb-1 tracking-wider uppercase">
                CHOOSE YOUR DISH. SEND A MESSAGE. <br className="md:hidden" /> ENJOY THE TASTE
            </h2>
        </div>
      </div>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="bg-transparent flex flex-col h-full group hover:shadow-2xl transition-all duration-500 border border-[#422700] overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              {dish.badge && (
                <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1.5 text-xs font-semibold tracking-wider text-[#2D241E] shadow-sm">
                  {dish.badge}
                </div>
              )}
              <Image 
                src={dish.image} 
                alt={dish.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-bold font-playfair tracking-wide leading-none text-[#610000]">
                  {dish.name}
                </h3>
                <div className={`w-5 h-5 border-2 flex items-center justify-center shrink-0 ${dish.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${dish.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                </div>
              </div>

              <p className="text-lg italic font-light leading-relaxed mb-6 flex-grow text-[#4A4A4A]">
                {dish.description}
              </p>

              <a 
                href="https://wa.me/c/917428199631"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#422700] text-white py-3 font-semibold tracking-widest text-sm hover:bg-[#523300] transition-colors text-center uppercase"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
      </section>

      <CertifiedKitchen />
    </div>
  );
}
