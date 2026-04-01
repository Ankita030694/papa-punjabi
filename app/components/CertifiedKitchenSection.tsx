'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CertifiedKitchenSection() {
  return (
    <section className="bg-[#F2EDDF] py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 items-center gap-12 md:gap-20">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6 md:space-y-8"
        >
          <div className="space-y-3 md:space-y-4">
            <h3 className="font-cormorant italic text-[#3a2e20] text-xl md:text-2xl">
              Quality and Trust
            </h3>
            <h2 className="font-playfair font-bold text-[#3a2e20] text-3xl md:text-5xl tracking-tight leading-tight uppercase">
              Certified kitchen
            </h2>
          </div>

          <div className="space-y-4 max-w-[500px]">
            <p className="font-cormorant italic text-[#5a4530] text-lg md:text-xl leading-relaxed">
              Our kitchen is FSSAI certified, ensuring every meal is prepared with the highest standards of hygiene, safety, and care.
            </p>
            <p className="font-cormorant italic text-[#5a4530] text-lg md:text-xl leading-relaxed">
              From sourcing to serving, we follow practices you can trust, so every bite feels just right.
            </p>
          </div>

          {/* Button */}
          <div className="pt-4">
            <button 
              className="inline-flex flex-col items-center justify-center border-2 border-[#3a2e20] text-[#3a2e20] py-4 px-12 hover:bg-[#3a2e20] hover:text-[#F2EDDF] transition-colors duration-300 group cursor-pointer"
              onClick={() => window.open('/assets/footer/6286913885966000f43e0fdafbb6a1379845db3c.png', '_blank')}
            >
              <span className="font-playfair font-bold text-lg md:text-xl tracking-wider">
                VIEW CERTIFICATE
              </span>
              <span className="font-cormorant italic text-sm md:text-base opacity-80">
                Download our FSSAI approval
              </span>
            </button>
          </div>
        </motion.div>

        {/* Right Side: FSSAI Logo with Dashed Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center min-h-[200px]"
        >
          <div className="relative p-8 md:p-12 border-2 border-dashed border-[#3a2e20]/40 rounded-sm">
            <Image
              src="/assets/footer/6286913885966000f43e0fdafbb6a1379845db3c.png"
              alt="FSSAI Certification"
              width={400}
              height={200}
              className="object-contain"
              style={{ height: 'auto' }}
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
