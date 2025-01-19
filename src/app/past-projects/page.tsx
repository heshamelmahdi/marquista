import ContactUs from "@/components/ContactUs";
import Navbar from "@/components/navbar/Navbar";
import { PastProjectsContent } from "@/components/pastProjects/PastProjectsHero";
import ProjectsParallax from "@/components/pastProjects/ProjectsParallax";

const PastProjects = () => {
  return (
    <section className="w-screen">
      {/* <Navbar /> */}
      <ProjectsParallax />
      {/* <ContactUs /> */}
    </section>
  );
};
export default PastProjects;
