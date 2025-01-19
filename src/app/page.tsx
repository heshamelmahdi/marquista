import ClientsSlider from "@/components/main/clients/ClientsSlider";
import { MainBento } from "@/components/main/mainBento/MainBento";
import MainHero from "@/components/main/hero/MainHero";
import MainTeam from "@/components/main/theTeam/MainTeam";
import ContactUs from "@/components/ContactUs";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="m-10 mt-20 lg:m-20 flex items-center gap-10 flex-col overflow-x-hidden">
      <Navbar />
      <MainHero />
      <MainBento />
      <ClientsSlider />
      <MainTeam />
      <ContactUs />
    </main>
  );
}
