import Image from "next/image";
import { MENU_ITEMS } from "../constants/menu";

export const metadata = {
  title: "Our Menu | Punjabi Papa",
  description: "Explore the authentic flavours of Punjabi Papa. From Fauji Mutton to Dal Makhni, discover our fresh, homestyle cloud kitchen menu.",
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#222222] font-sans pb-24 overflow-x-hidden">
      
      {/* Menu Hero Section */}
      <section className="w-full pt-32 pb-16 md:pt-10 md:pb-24 border-b border-[#222222]/10">
        <div className="mx-auto max-w-[1340px] px-6 md:px-12 lg:px-20 xl:px-24 flex flex-col items-center text-center">
          <h3 className="text-xl md:text-[26px] font-bold tracking-normal text-[#222222] mb-4">
            ताज़ा और स्वादिष्ट
          </h3>
          <h1 className="text-4xl sm:text-5xl md:text-[60px] lg:text-[72px] leading-[1.1] font-normal tracking-tight uppercase text-[#222222]">
            THE PUNJABI PAPA <br /> MENU
          </h1>
          <p className="mt-8 text-base md:text-[20px] text-[#555555] max-w-2xl leading-[1.6]">
            Every dish is prepared fresh daily with authentic spices and recipes passed down through generations. A true taste of home.
          </p>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto max-w-[1340px] px-6 md:px-12 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {MENU_ITEMS.map((item, idx) => (
              <a 
                href="https://wa.me/c/917428199631" 
                target="_blank" 
                rel="noopener noreferrer"
                key={idx} 
                className="flex flex-col group"
              >
                
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-sm">
                  <Image
                    src={`/asseys/Food/${item.image}`}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Veg/Non-veg Indicator Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded shadow-md z-10">
                    <div
                      className={`w-5 h-5 flex items-center justify-center border-2 p-0.5 ${
                        item.type === "veg" ? "border-green-600" : "border-red-600"
                      }`}
                    >
                      <div
                        className={`w-full h-full rounded-full ${
                          item.type === "veg"
                            ? "bg-green-600"
                            : "w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-transparent border-b-red-600 bg-transparent rounded-none"
                        }`}
                        style={item.type === "non-veg" ? { transform: "translateY(-1px)" } : {}}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold uppercase tracking-wide text-[#222222] mb-3 group-hover:text-[#5C3317] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#555555] text-base leading-[1.6] line-clamp-3">
                    {item.desc}
                  </p>
                </div>
                
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full pb-20">
        <div className="mx-auto max-w-[1340px] px-6 md:px-12 lg:px-20 xl:px-24 flex justify-center">
            <a
              href="https://wa.me/c/917428199631"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#222222] px-10 py-4 text-base md:text-lg font-bold tracking-[0.05em] uppercase text-[#00A037] hover:bg-[#222222] hover:text-[#F5EFE6] transition-colors bg-white/50 backdrop-blur-sm shadow-xl"
            >
              ORDER NOW ON WHATSAPP
            </a>
        </div>
      </section>

    </main>
  );
}
