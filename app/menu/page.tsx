import { Metadata } from 'next';
import MenuClient from './MenuClient';

export const metadata: Metadata = {
  title: "Our Menu | Papa Punjabi - Authentic Punjabi Dishes",
  description: "Browse our selection of handcrafted Punjabi dishes. From Punjabi Papa Mutton and Chicken Black Pepper to Dal Makhni and Paneer specialties, find your favorite home-style meal.",
  openGraph: {
    title: "Our Menu | Papa Punjabi",
    description: "Browse our selection of handcrafted Punjabi dishes. Freshly prepared and delivered with love.",
    type: "website",
  }
};

export default function MenuPage() {
  return <MenuClient />;
}
