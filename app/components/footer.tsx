'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CertifiedKitchen() {
  return (
    <>
    {/* Order Contact Footer Strip - Sticky */}
      <div className="fixed bottom-0 left-0 w-full bg-[#5C3317]/95 backdrop-blur-sm text-[#F5EFE6] py-3 md:py-5 px-6 md:px-12 border-t border-[#4A2912] z-[100] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] font-playfair">
        <div className="max-w-[1340px] mx-auto grid grid-cols-3 items-center divide-x divide-[#F5EFE6]/20">
          
          {/* 1st Column: WhatsApp Message */}
          <div className="flex justify-center">
            <a 
              href="https://wa.me/917428199631?text=I%20want%20to%20order" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:scale-105 transition-transform"
            >
       <span className="text-[12px] sm:text-sm md:text-base font-bold uppercase tracking-wide">WhatsApp</span>
            </a>
          </div>

          {/* 2nd Column: Catalogue */}
          <div className="flex justify-center">
            <a 
              href="https://wa.me/c/917428199631" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[12px] sm:text-sm md:text-base font-bold uppercase tracking-wide hover:text-white transition-colors"
            >
              Catalogue
            </a>
          </div>

          {/* 3rd Column: Call */}
          <div className="flex justify-center">
            <a 
              href="tel:+917428199631" 
              className="text-[12px] sm:text-sm md:text-base font-bold uppercase tracking-wide hover:text-white transition-colors flex items-center gap-2"
            >
      Call Us
            </a>
          </div>

        </div>
      </div>
      </>
  );
}
