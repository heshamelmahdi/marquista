import AboutHero from "@/components/about/AboutHero";
import { AboutTextSubHeadingAndBody } from "@/components/about/AboutText";
import TheTeam from "@/components/about/team/TheTeam";
import ContactUs from "@/components/ContactUs";

const AboutUs = () => {
  return (
    <div className="m-10 mt-20 lg:m-20 flex items-center gap-10 flex-col">
      <AboutHero />
      <AboutTextSubHeadingAndBody />
      <TheTeam />
      <ContactUs />
    </div>
  );
};
export default AboutUs;
