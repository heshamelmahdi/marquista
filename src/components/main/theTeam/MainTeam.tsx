import SectionHeader from "@/components/reusable/SectionHeader";
import { TeamTestimonials } from "./TeamTestimonials";
import { mainTeamCopy } from "@/utils/copy";

const MainTeam = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
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
  );
};
export default MainTeam;
