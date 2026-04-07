import Image from 'next/image';

export default function BehindTheTaste() {
  return (
    <section className="bg-[#F0ECE0] text-[#4a3e2e] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Column */}
        <div className="flex flex-col gap-12 pt-2">
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-[#4e3c25]">
              “Behind The Taste”
            </h3>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] leading-[1.15] text-[#3a2e20]">
              Crafted By The Hands That<br />Know Flavor
            </h2>
            <p className="font-serif italic text-lg leading-relaxed max-w-lg mt-2 text-[#564937]">
              Every dish starts with experience, patience, and passion. Our kitchen is led by hands that cook with instinct slow, rich, and full of character. The result? A signature recipe that keeps you coming back.
            </p>
          </div>

          <div className="flex justify-center md:justify-start lg:pl-6 relative mt-30">
            <Image 
              src="/assets/panjabi/Frame 3.svg" 
              alt="Founders Illustration" 
              width={380} 
              height={380} 
              className="w-full max-w-[380px] object-contain drop-shadow-md"
              style={{ height: 'auto' }}
            />
          </div>

          {/* Signature Dish Text - MOBILE ONLY (Shown below founder image on mobile) */}
          <div className="flex flex-col items-center text-center gap-4 md:hidden">
            <h3 className="font-playfair text-3xl text-[#3a2e20]">
              Signature Dish &mdash; Fauji Mutton
            </h3>
           
            <p className="font-cormorant italic text-lg leading-relaxed max-w-sm text-[#564937]">
              Slow-cooked to perfection with bold spices, deep flavors, and a comforting richness. A recipe inspired by tradition, made to be remembered.
            </p>
             <div className="flex justify-center">
              <Image 
                src="/assets/panjabi/pp_logo.svg" 
                alt="Punjabi Papa Logo" 
                width={120} 
                height={60} 
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-12 md:pt-12 lg:-mt-10">
          <div className="flex justify-center md:justify-end relative">
            <Image 
              src="/assets/dishes/Fauji mutton.jpg" 
              alt="Fauji Mutton Signature Dish" 
              width={400} 
              height={400} 
              className="w-full max-w-[400px] object-cover shadow-xl"
              style={{ height: 'auto' }}
            />
          </div>

          <div className="hidden md:flex flex-col items-end text-right gap-4 lg:pr-4">
            <h3 className="font-playfair text-2xl md:text-3xl text-[#3a2e20]">
              Signature Dish &mdash; Fauji Mutton
            </h3>
           
            <p className="font-playfair italic text-lg leading-relaxed max-w-sm text-[#564937]">
              Slow-cooked to perfection with bold spices, deep flavors, and a comforting richness. A recipe inspired by tradition, made to be remembered.
            </p>
             <div className="flex justify-end w-full -mt-10">
              <Image 
                src="/assets/panjabi/pp_logo.svg" 
                alt="Punjabi Papa Logo" 
                width={500} 
                height={70} 
                className="object-contain"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
