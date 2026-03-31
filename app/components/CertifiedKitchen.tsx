'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CertifiedKitchen() {
  return (
    <section className="bg-[#F0ECE0] py-20 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-16 border-t border-[#3a2e20]/10">
      <div className="flex-1 max-w-2xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-cormorant italic text-[#5a4530] text-xl mb-4"
        >
          Quality and Trust
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-playfair font-bold text-[#3a2e20] text-4xl md:text-5xl lg:text-5xl mb-8 leading-tight"
        >
          Certified kitchen
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 mb-12"
        >
          <p className="font-cormorant text-[#5a4530] text-lg md:text-xl leading-relaxed">
            Our kitchen is FSSAI certified, ensuring every meal is prepared with the highest standards of hygiene, safety, and care.
          </p>
          <p className="font-cormorant text-[#5a4530] text-lg md:text-xl leading-relaxed">
            From sourcing to serving, we follow practices you can trust, so every bite feels just right.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-start gap-3"
        >
          <button className="border border-[#3a2e20] text-[#3a2e20] px-10 py-5 w-full md:w-auto font-playfair text-xl tracking-widest hover:bg-[#3a2e20] hover:text-[#F0ECE0] transition-colors duration-300">
            VIEW CERTIFICATE
          </button>
          <p className="font-cormorant italic text-[#5a4530] text-sm md:text-base ml-1">
            Download our FSSAI approval
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center lg:justify-end"
      >
        <div className="relative p-10 border border-dashed border-[#3a2e20]/40 rounded-sm">
          <div className="relative w-[300px] md:w-[450px] aspect-[4/3]">
            <Image
              src="/assets/footer/6286913885966000f43e0fdafbb6a1379845db3c.png"
              alt="FSSAI Logo and Certification Information"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
