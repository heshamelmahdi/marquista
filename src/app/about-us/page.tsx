import AboutHero from "@/components/about/AboutHero";
import { AboutTextSubHeadingAndBody } from "@/components/about/AboutText";
import OurExpertise from "@/components/about/OurExpertise";
import PhotoGallery from "@/components/about/PhotoGallery";
import ContactUs from "@/components/ContactUs";

const AboutUs = () => {
  return (
    <div className="m-10 mt-20 lg:m-20 flex items-center gap-10 flex-col overflow-x-hidden">
      <AboutHero />
      <AboutTextSubHeadingAndBody />
      <OurExpertise />
      <PhotoGallery />
      <ContactUs />
    </div>
  );
};
export default AboutUs;
