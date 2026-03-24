export interface MenuItem {
  title: string;
  image: string;
  type: 'veg' | 'non-veg';
  desc: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    title: "FAUJI MUTTON",
    image: "Fauji Mutton.png",
    type: "non-veg",
    desc: "Slow-cooked mutton in a rich, spicy gravy inspired by traditional North Indian army mess recipes. Bold flavours, tender meat, and pure desi comfort.",
  },
  {
    title: "CHICKEN BLACK PEPPER",
    image: "Chicken Black Pepper.png",
    type: "non-veg",
    desc: "Tender chicken pieces cooked in a rich, aromatic black pepper gravy, bringing a perfect balance of spice and warmth.",
  },
  {
    title: "DAL MAKHNI",
    image: "Dal Makhni.png",
    type: "veg",
    desc: "Creamy, slow-cooked black lentils simmered overnight with butter and authentic spices for a rich, comforting experience.",
  },
  {
    title: "PANEER MAKHNI",
    image: "Paneer makhni.png",
    type: "veg",
    desc: "Soft paneer cubes tossed in a luscious tomato, butter, and cashew gravy. A rich, creamy delight for true food lovers.",
  },
  {
    title: "METHI MALAI",
    image: "Methi MAlai.png",
    type: "veg",
    desc: "A smooth, creamy gravy infused with the soothing flavours of fresh fenugreek leaves and a generous swirl of cream.",
  },
  {
    title: "SPECIAL RAJMA",
    image: "Special rajma.png",
    type: "veg",
    desc: "A nostalgic comfort dish cooked slowly with authentic Punjabi spices, delivering the true taste of a Sunday home-cooked meal.",
  },
  {
    title: "BOILED RICE",
    image: "Boiled RIce.png",
    type: "veg",
    desc: "Perfectly steamed, fragrant basmati rice, the ideal accompaniment to any rich and flavourful gravy.",
  },
  {
    title: "BLACK DAL",
    image: "IMG_5163.PNG",
    type: "veg",
    desc: "Creamy, rich black dal garnished with green chilies and a swirl of cream.",
  },
  {
    title: "SPECIAL MUTTON CURRY",
    image: "IMG_5165.PNG",
    type: "non-veg",
    desc: "Slow-cooked tender mutton served in an authentic earthen clay pot (Handi) for a deep, smoky flavour.",
  },
  {
    title: "WHITE CHICKEN KORMA",
    image: "IMG_5167.PNG",
    type: "non-veg",
    desc: "Tender chicken pieces simmered in a rich, mild white cashew and yogurt gravy.",
  },
  {
    title: "RAJMA CHAWAL",
    image: "IMG_5181.PNG",
    type: "veg",
    desc: "Classic comfort food: slow-cooked red kidney beans served with a side of steamed rice.",
  },
  {
    title: "SABUDANA KHICHDI",
    image: "IMG_5240.PNG",
    type: "veg",
    desc: "A light and flavourful fasting special made with tapioca pearls, roasted peanuts, and mild spices.",
  },
  {
    title: "ALOO DUM",
    image: "IMG_5250.PNG",
    type: "veg",
    desc: "Spiced, tangy potato curry cooked slowly to absorb all the rich, authentic flavours.",
  },
  {
    title: "CUCUMBER RAITA",
    image: "IMG_5251.PNG",
    type: "veg",
    desc: "Cool, refreshing yogurt dip mixed with finely chopped cucumbers and mild roasted spices.",
  },
  {
    title: "KANJAK PRASAD THALI",
    image: "IMG_5473.JPG.jpeg",
    type: "veg",
    desc: "Special Kanajak Prasad featuring Halwa, Puri, and Sookhe Kale Chane. Pre-order available.",
  }
];
