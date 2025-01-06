import ClientsSlider from "@/components/main/clients/ClientsSlider";
import { MainBento } from "@/components/main/mainBento/MainBento";
import MainHero from "@/components/main/hero/MainHero";
import MainTeam from "@/components/main/theTeam/MainTeam";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="m-10 mt-20 lg:m-20 flex items-center gap-10 flex-col">
      <MainHero />
      <MainBento />
      <ClientsSlider />
      <MainTeam />
      <ContactUs />
    </main>
  );
}
