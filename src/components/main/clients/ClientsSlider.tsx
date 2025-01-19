import { companyLogos } from "@/utils/content/company-logos";
import { InfiniteMovingCards } from "../../ui/clients-infinite-moving-cards";
import { items } from "../mainBento/MainBentoComponents";

const ClientsSlider = () => {
  return (
    <div>
      <InfiniteMovingCards
        speed="fast"
        direction="left"
        pauseOnHover={false}
        items={companyLogos}
      />
    </div>
  );
};
export default ClientsSlider;
