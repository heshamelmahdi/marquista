import { whatWeDoCopy } from "@/utils/copy/what-we-do";
import SectionHeader from "../../reusable/SectionHeader";
import ServiceGridAnimation from "./ServiceGridAnimation";

const OurServices = () => {
  return (
    <div className="grid grid-cols-3 w-full h-full gap-10">
      <div className="col-span-1">
        <SectionHeader
          title={whatWeDoCopy.ourServices.title}
          description={whatWeDoCopy.ourServices.description}
        />
      </div>
      <div className="col-span-2">
        <ServiceGridAnimation />
      </div>
    </div>
  );
};
export default OurServices;
