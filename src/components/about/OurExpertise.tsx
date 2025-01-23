import { ourExpertise, ourExpertiseHeader } from "@/utils/copy/about-us";
import SectionHeader from "../reusable/SectionHeader";
import ExpandableGridAnimation from "../reusable/expandableCards/ExpandableGridAnimation";

const OurExpertise = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 w-full gap-10">
      <div className="col-span-1 flex items-center justify-center">
        <SectionHeader
          title={ourExpertiseHeader.title}
          description={ourExpertiseHeader.description}
        />
      </div>
      <div className="col-span-2 w-full h-full flex justify-center items-start">
        <ExpandableGridAnimation items={ourExpertise} />
      </div>
    </div>
  );
};
export default OurExpertise;
