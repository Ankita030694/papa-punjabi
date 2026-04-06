import { Metadata } from 'next';
import Image from "next/image";
import PunjabiHero from "./components/PunjabiHero";
import BehindTheTaste from "./components/BehindTheTaste";
import OrderMadeSimple from "./components/OrderMadeSimple";
import HandcraftedDishes from "./components/HandcraftedDishes";
import PunjabiCTA from "./components/PunjabiCTA";
import CertifiedKitchenSection from "./components/CertifiedKitchenSection";
import CertifiedKitchen from "./components/footer";

export const metadata: Metadata = {
  title: "Papa Punjabi | Authentic Home-Style Punjabi Food",
  description: "Experience the true warmth of home-style Punjabi cooking. Freshly prepared, traditional dishes delivered with love from our kitchen to your home.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <PunjabiHero />
      <BehindTheTaste />
      <OrderMadeSimple />
      <HandcraftedDishes />
      <PunjabiCTA />
      <CertifiedKitchenSection />
      <CertifiedKitchen />
    </main>
  );
}
