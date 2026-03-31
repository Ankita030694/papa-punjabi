'use client';

import { motion } from 'framer-motion';

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#3a2e20">
    <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="#3a2e20" />
  </svg>
);

/** Inner-bordered card with corner stars — matches reference */
const CardBorder = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`relative ${className}`}>
    {/* Inner border */}
    <div className="absolute inset-[14px] border border-[#3a2e20]/35 pointer-events-none z-10">
      {/* Corner stars sit on the inner-border corners */}
      <span className="absolute -top-[9px] -left-[9px]"><StarIcon /></span>
      <span className="absolute -top-[9px] -right-[9px]"><StarIcon /></span>
      <span className="absolute -bottom-[9px] -left-[9px]"><StarIcon /></span>
      <span className="absolute -bottom-[9px] -right-[9px]"><StarIcon /></span>
    </div>
    <div className="relative z-0 h-full w-full">{children}</div>
  </div>
);

export default function PunjabiCTA() {
  return (
    <motion.section 
      initial="initial"
      whileHover="hovered"
      className="relative w-full overflow-hidden group cursor-default" 
      style={{ minHeight: '520px', height: '68vh' }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/CTA/Subscribe.mp4" type="video/mp4" />
      </video>

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      {/* ─── LEFT: Floating left card ─── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="absolute bottom-[10%] left-[6%] z-10 w-[300px]"
        style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.28))' }}
      >
        <CardBorder className="bg-[#F0ECE0] px-8 pt-7 pb-8">
          {/* Label */}
          <p className="font-serif text-[#3a2e20] text-[13px] mb-4 tracking-wide">
            Punjabi Papa
          </p>
          {/* Headline */}
          <h2
            className="font-serif font-bold text-[#3a2e20] leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(1.55rem, 2.5vw, 2rem)' }}
          >
            MADE WITH<br />CARE AND HEART
          </h2>
          {/* Description — right-aligned, italic */}
          <p className="font-serif italic text-[#5a4530] text-[13px] leading-relaxed text-right">
            Rooted in tradition and crafted with love,<br />
            this is food that feels like home,<br />
            no matter where you come from.
          </p>
        </CardBorder>
      </motion.div>

      {/* ─── RIGHT: Solid card panel (Slides in on hover) ─── */}
      <motion.div
        variants={{
          initial: { x: '100%', opacity: 0 },
          hovered: { x: 0, opacity: 1 }
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 h-full z-20 bg-[#F0ECE0] flex flex-col justify-center shadow-[-20px_0_50px_rgba(0,0,0,0.2)]"
        style={{ width: 'clamp(300px, 40%, 450px)' }}
      >
        <CardBorder className="h-full flex flex-col justify-between px-10 py-12">
          <div className="flex flex-col gap-6">
            {/* Label */}
            <p className="font-serif text-[#3a2e20] text-[11px] tracking-[0.2em] uppercase opacity-60">
              Stay Connected
            </p>

            {/* Headline */}
            <h2
              className="font-serif font-bold text-[#3a2e20] leading-[1.08] uppercase"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              JOIN THE<br />PUNJABI PAPA<br />WHATSAPP
            </h2>

            {/* Body */}
            <div className="flex flex-col gap-4">
              <p className="font-serif italic text-[#5a4530] text-[15px] leading-relaxed">
                Be the first to know about today&apos;s specials, fresh batches, and limited
                dishes straight from our kitchen to your phone.
              </p>
              <p className="font-serif italic text-[#5a4530] text-[15px] leading-relaxed">
                No spam. Just warm updates, homely food alerts, and occasional surprises.
              </p>
            </div>
          </div>

          {/* CTA Button block */}
          <div className="flex flex-col gap-2 mt-8">
            <button className="bg-[#3a2e20] text-[#F0ECE0] py-5 px-8 font-serif text-[14px] tracking-[0.2em] uppercase hover:bg-[#4e3c25] transition-colors duration-300 shadow-lg">
              Join WhatsApp Group
            </button>
            <p className="text-center font-serif italic text-[11px] text-[#5a4530] tracking-wider mt-2 opacity-80">
              Get daily specials first
            </p>
          </div>
        </CardBorder>
      </motion.div>
    </motion.section>
  );
}
