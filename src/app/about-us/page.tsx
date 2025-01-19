import AboutHero from "@/components/about/AboutHero";
import { AboutTextSubHeadingAndBody } from "@/components/about/AboutText";
import PhotoGallery from "@/components/about/PhotoGallery";
import TheTeam from "@/components/about/team/TheTeam";
import ContactUs from "@/components/ContactUs";
import Navbar from "@/components/navbar/Navbar";
import OurExpertise from "@/components/about/OurExpertise";

const AboutUs = () => {
  return (
    <div className="m-10 mt-20 lg:m-20 flex items-center gap-10 flex-col overflow-x-hidden">
      {/* <Navbar /> */}
      <AboutHero />
      <AboutTextSubHeadingAndBody />
      <OurExpertise />
      {/* <TheTeam /> */}
      <PhotoGallery />
      <ContactUs />
    </div>
  );
};
export default AboutUs;
