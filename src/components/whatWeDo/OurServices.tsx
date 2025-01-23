import { whatWeDoCopy } from "@/utils/copy/what-we-do";
import SectionHeader from "../reusable/SectionHeader";
import ExpandableGridAnimation from "../reusable/expandableCards/ExpandableGridAnimation";
import { ourServices } from "@/utils/copy/what-we-do";

const OurServices = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 w-full h-full gap-10">
      <div className="col-span-1">
        <SectionHeader
          title={whatWeDoCopy.ourServices.title}
          description={whatWeDoCopy.ourServices.description}
        />
      </div>
      <div className="col-span-2">
        <ExpandableGridAnimation items={ourServices} />
      </div>
    </div>
  );
};
export default OurServices;
