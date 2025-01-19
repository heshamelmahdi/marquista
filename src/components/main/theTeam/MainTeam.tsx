import SectionHeader from "@/components/reusable/SectionHeader";
import { TeamTestimonials } from "./TeamTestimonials";
import { mainTeamCopy } from "@/utils/copy";

const MainTeam = () => {
  return (
    <div>
      <div className="hidden md:grid md:grid-cols-3 gap-10">
        <div className="col-span-2 w-full h-full">
          <TeamTestimonials />
        </div>
        <div className="w-full h-full col-span-1">
          <SectionHeader
            title={mainTeamCopy.header}
            description={mainTeamCopy.description}
          />
        </div>
      </div>
      <div className="flex flex-col md:hidden gap-10">
        <div className="w-full h-full">
          <SectionHeader
            title={mainTeamCopy.header}
            description={mainTeamCopy.description}
          />
        </div>
        <div className="w-full h-full">
          <TeamTestimonials />
        </div>
      </div>
    </div>
  );
};
export default MainTeam;
