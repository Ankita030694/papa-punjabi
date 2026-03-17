import Image from "next/image";
import MenuCarousel from "./components/MenuCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#222222] font-sans pb-12 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center pt-12 md:pt-16 pb-16 md:pb-24 px-6 lg:px-12 relative">
        <div className="w-full max-w-[1340px] flex flex-col items-center h-full justify-center space-y-8 md:space-y-12">
          
          {/* Top Image & Hindi */}
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <div className="flex justify-center">
              <Image
                src="/asseys/caricature.svg"
                alt="Deepak Malik and Anil Davar - Punjabi Papa Founders Caricature"
                width={200}
                height={150}
                className="w-[160px] md:w-[240px] lg:w-[280px] object-contain drop-shadow-sm"
                priority
              />
            </div>
            <h3 className="text-3xl md:text-[36px] lg:text-[42px] font-bold tracking-normal text-[#222222]">
              दो यारों की रसोई
            </h3>
          </div>

          {/* Main Large Typography */}
          <h1 className="text-center text-[48px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[115px] leading-[0.95] font-bold tracking-tight uppercase text-[#222222] w-full">
            A CLOUD<br />
            KITCHEN<br />
            STARTED BY<br />
            TWO OLD<br />
            SCHOOL<br />
            FOOD LOVERS
          </h1>

          {/* Bottom Indicators & Subtitle wrapper */}
          <div className="w-full flex flex-col space-y-8 md:space-y-12 lg:px-16 xl:px-24">
            <div className="w-full flex justify-between items-center">
              <span className="text-[22px] md:text-[32px] lg:text-[36px] text-[#222222] font-normal uppercase tracking-wide">DESI</span>
              <span className="text-[22px] md:text-[32px] lg:text-[36px] text-[#222222] font-normal uppercase tracking-wide">FRESH</span>
            </div>
            
            <div className="text-center w-full">
              <h3 className="text-[28px] md:text-[36px] lg:text-[42px] xl:text-[46px] font-normal tracking-wide text-[#222222]">
                दिल जवान, स्वाद महान
              </h3>
            </div>
          </div>

        </div>
      </section>

      {/* Story Section */}
      <section className="w-full min-h-screen flex items-center justify-center pt-10 md:pt-0 pb-16 md:pb-0 border-t border-[#222222]/10 mt-12 md:mt-0">
        <div className="w-full flex flex-col md:grid md:grid-cols-2 md:grid-rows-[auto_1fr] gap-x-8 lg:gap-x-16 gap-y-12 md:pl-16 lg:pl-24 xl:pl-32 items-start">
          
          {/* Title Content - Mobile Second, Desktop Row 1 Col 1 */}
          <div className="order-2 md:order-none md:col-start-1 md:row-start-1 w-full px-6 md:px-0 mt-4 md:mt-0">
            <div className="space-y-4">
              <h3 className="text-xl lg:text-[30px] font-bold tracking-normal text-[#222222]">
                एक छोटी सी शुरुआत
              </h3>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[40px] xl:text-[46px] leading-[1.25] font-normal tracking-tight uppercase text-[#222222]">
                THE STORY OF TWO <br className="hidden xl:block" />
                FRIENDS & ONE KITCHEN
              </h1>
            </div>
          </div>

          {/* Paragraph Content - Mobile Third, Desktop Row 2 Col 1 */}
          <div className="order-3 md:order-none md:col-start-1 md:row-start-2 w-full px-6 md:px-0 md:pr-8 lg:pr-12 mb-8 md:mb-0">
            <div className="space-y-5 lg:space-y-6">
              <h2 className="text-[17px] md:text-2xl font-bold uppercase tracking-wide text-[#222222]">
                PUNJABI PAPA
              </h2>
              <div className="text-base lg:text-[20px] text-[#555555] leading-[1.5] font-normal max-w-2xl">
                <p>
                  Some ideas don&apos;t start in boardrooms; they begin over cups of chai, late-night conversations, and a shared love for good food. Deepak Malik and Anil Davar have been friends for years, and somewhere between laughter, memories, and countless homemade meals, a simple thought emerged - why not share this food with more people? That idea slowly turned into a small cloud kitchen, built not just to cook, but to serve something real. Food that feels familiar, flavours that remind you of home, and a kitchen powered by friendship.
                </p>
              </div>
            </div>
          </div>

          {/* Image Content - Mobile First, Desktop Row 2 Col 2 */}
          <div className="order-1 md:order-none md:col-start-2 md:row-start-2 w-full flex justify-end items-start m-0 p-0 relative">
            <Image
              src="/asseys/The%20Story%20Image.svg"
              alt="Deepak Malik and Anil Davar - Punjabi Papa Founders"
              width={1000}
              height={750}
              className="w-[100%] sm:w-[85%] md:w-[95%] lg:w-[90%] xl:w-[80%] h-auto object-cover md:object-contain object-right ml-auto"
              priority
            />
          </div>

        </div>
      </section>

      {/* USP Section */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
          
          {/* Section Headings */}
          <div className="text-center space-y-4 mb-16 md:mb-20">
            <h3 className="text-xl lg:text-[30px] font-bold tracking-normal text-[#222222]">
              क्यों खास है पंजाबी पापा
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[40px] xl:text-[46px] leading-[1.25] font-normal tracking-tight uppercase text-[#222222]">
              WHAT MAKES US SPECIAL
            </h2>
          </div>

          {/* USP Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 sm:gap-x-12 md:gap-10 lg:gap-20 w-full max-w-6xl px-4 md:px-0">
            
            {/* USP 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-4 md:mb-10 flex justify-center items-center w-[140px] h-[130px] sm:w-[200px] sm:h-[180px] md:w-[260px] md:h-[240px] lg:w-[300px] lg:h-[280px]">
                <Image
                  src="/asseys/USP/1st.jpg"
                  alt="Authentic Punjabi Flavours"
                  width={300}
                  height={280}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <h4 className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] leading-[1.3] text-[#222222] font-normal w-full md:w-[80%] lg:w-full">
                Authentic Punjabi <br /> Flavours
              </h4>
            </div>

            {/* USP 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-4 md:mb-10 flex justify-center items-center w-[140px] h-[130px] sm:w-[200px] sm:h-[180px] md:w-[260px] md:h-[240px] lg:w-[300px] lg:h-[280px]">
                <Image
                  src="/asseys/USP/2nd.jpg"
                  alt="Cooked With Experience"
                  width={300}
                  height={280}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <h4 className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] leading-[1.3] text-[#222222] font-normal w-full md:w-[80%] lg:w-full">
                Cooked With <br /> Experience
              </h4>
            </div>

            {/* USP 3 - Centered on Mobile */}
            <div className="flex flex-col items-center text-center group col-span-2 md:col-span-1 mt-4 md:mt-0">
              <div className="mb-4 md:mb-10 flex justify-center items-center w-[160px] h-[150px] sm:w-[200px] sm:h-[180px] md:w-[260px] md:h-[240px] lg:w-[300px] lg:h-[280px]">
                <Image
                  src="/asseys/USP/3rd.jpg"
                  alt="Freshly Prepared Daily"
                  width={300}
                  height={280}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <h4 className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] leading-[1.3] text-[#222222] font-normal w-[80%] md:w-[80%] lg:w-full">
                Freshly Prepared <br className="hidden md:block" /> Daily
              </h4>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full py-16 md:py-24 border-t border-[#222222]/10 overflow-hidden">
        <div className="mx-auto w-full flex flex-col gap-12 lg:gap-16">
          
          {/* Section Headings - Left Aligned */}
          <div className="px-6 md:px-12 lg:px-20 xl:px-24 mx-auto max-w-[1340px] w-full">
            <div className="space-y-4 text-left">
              <h3 className="text-xl lg:text-[30px] font-bold tracking-normal text-[#222222]">
                हमारा नज़रिया
              </h3>
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[40px] xl:text-[46px] leading-[1.25] font-normal tracking-tight uppercase text-[#222222]">
                THE PUNJABI PAPA <br className="hidden xl:block" /> PHILOSOPHY
              </h2>
            </div>
          </div>

          {/* Infinite Image Slider */}
          <div className="relative w-full flex overflow-hidden whitespace-nowrap group">
            {/* First Set */}
            <div className="animate-scroll-infinite pr-6 gap-6 shrink-0 flex items-center">
              {["Boiled RIce.png", "Chicken Black Pepper.png", "Dal Makhni.png", "Fauji Mutton.png", "Methi MAlai.png", "Paneer makhni.png", "Special rajma.png"].map((img, idx) => (
                <div key={`first-${idx}`} className="relative w-[380px] h-[240px] md:w-[550px] md:h-[350px] shrink-0 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={`/asseys/Food/${img}`}
                    alt={img.replace('.png', '')}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Second Set (Duplicate for continuous loop) */}
            <div className="animate-scroll-infinite pr-6 gap-6 shrink-0 flex items-center" aria-hidden="true">
              {["Boiled RIce.png", "Chicken Black Pepper.png", "Dal Makhni.png", "Fauji Mutton.png", "Methi MAlai.png", "Paneer makhni.png", "Special rajma.png"].map((img, idx) => (
                <div key={`second-${idx}`} className="relative w-[380px] h-[240px] md:w-[550px] md:h-[350px] shrink-0 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={`/asseys/Food/${img}`}
                    alt={img.replace('.png', '')}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Text & SVG Image */}
          <div className="px-6 md:px-12 lg:px-20 xl:px-24 mx-auto max-w-[1340px] w-full mt-4 md:mt-8 relative z-10">
            <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-16">
              
              {/* Text - Left */}
              <div className="flex-1 text-base lg:text-[20px] text-[#555555] leading-[1.65] font-normal pt-0 md:pt-12 max-w-2xl">
                <p>
                  Punjabi Papa is more than just food, it’s the feeling that comes with it. Started by Deepak Malik and Anil Davar, this kitchen is built on a simple belief: good food doesn’t need to be complicated, it just needs honesty, warmth, and the joy of cooking. Every dish brings bold flavours, generous portions, and the comfort of meals that feel familiar and personal.
                </p>
              </div>

              {/* USP Style Philosophy SVG - Right - Overlapping the slider */}
              <div className="w-full md:w-[150px] lg:w-[200px] flex justify-end md:justify-center shrink-0 mt-[-100px] md:mt-[-100px] lg:mt-[-140px] relative z-20">
                <Image
                  src="/asseys/Philosophy.svg"
                  alt="Punjabi Papa Philosophy"
                  width={400}
                  height={400}
                  className="object-contain w-[120px] md:w-full max-w-[150px] md:max-w-full drop-shadow-xl"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Menu Section */}
      <MenuCarousel />

      {/* FSSAI Section */}
      <section className="w-full py-16 md:py-24 border-t border-[#222222]/10">
        <div className="mx-auto max-w-[1340px] w-full flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20 xl:px-24 gap-12 lg:gap-16">
          
          {/* Text Content - Desktop Left, Mobile First */}
          <div className="flex-1 flex flex-col justify-center gap-8 md:gap-10 pt-4 md:pt-0">
            <div className="space-y-3">
              <h3 className="text-xl md:text-[26px] font-bold tracking-normal text-[#222222]">
                आपका भरोसा, हमारी पहचान
              </h3>
              <h2 className="text-3xl sm:text-4xl md:text-[36px] lg:text-[40px] xl:text-[46px] leading-[1.25] font-normal tracking-tight uppercase text-[#222222]">
                FSSAI CERTIFIED <br className="hidden lg:block" /> KITCHEN
              </h2>
            </div>

            <div className="text-base lg:text-[20px] text-[#555555] leading-[1.65] font-normal max-w-2xl">
              <p>
                We follow all food safety and hygiene standards approved by FSSAI, ensuring every meal is prepared with care, quality, and authenticity.
              </p>
            </div>
          </div>

          {/* Image Content - Desktop Right, Mobile Second */}
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <div className="relative w-full max-w-[400px] aspect-[4/3] md:aspect-[3/2] flex items-center justify-center">
              <Image
                src="/asseys/FSSAI_Logo%201.png"
                alt="FSSAI Certified Kitchen"
                width={500}
                height={333}
                className="object-contain"
                priority={false}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Order Contact Footer Strip - Sticky */}
      <div className="fixed bottom-0 left-0 w-full bg-[#5C3317]/95 backdrop-blur-sm text-[#F5EFE6] py-4 md:py-5 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 border-t border-[#4A2912] z-[100] shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <span className="text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase opacity-80">
          To Place An Order
        </span>
        
        <div className="flex items-center gap-4 md:gap-8">
          <a 
            href="https://wa.me/c/917428199631" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base md:text-[20px] font-bold hover:text-white transition-colors underline underline-offset-4 decoration-[#F5EFE6]/40 hover:decoration-white"
          >
            WhatsApp Catalogue
          </a>
          
          <span className="hidden md:block text-[#F5EFE6]/30 text-xl font-light">|</span>
          
          <a 
            href="tel:+917428199631" 
            className="text-lg md:text-[22px] font-bold tracking-widest hover:text-white transition-colors"
          >
            +91 74281 99631
          </a>
        </div>
      </div>
    </main>
  );
}
