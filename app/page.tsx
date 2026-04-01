import Image from "next/image";
import PunjabiHero from "./components/PunjabiHero";
import BehindTheTaste from "./components/BehindTheTaste";
import OrderMadeSimple from "./components/OrderMadeSimple";
import HandcraftedDishes from "./components/HandcraftedDishes";
import PunjabiCTA from "./components/PunjabiCTA";
import CertifiedKitchenSection from "./components/CertifiedKitchenSection";
import CertifiedKitchen from "./components/footer";

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
