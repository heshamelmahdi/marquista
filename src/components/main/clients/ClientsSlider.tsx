import { InfiniteMovingCards } from "../../ui/clients-infinite-moving-cards";
import { items } from "../mainBento/MainBentoComponents";

const ClientsSlider = () => {
  const clientImages = [
    "/companies/batates.png",
    "/companies/facebook.svg",
    "/companies/phieg.png",
    "/companies/youtube.webp",
  ];
  return (
    <div>
      <InfiniteMovingCards
        speed="fast"
        direction="left"
        pauseOnHover={false}
        items={clientImages}
      />
    </div>
  );
};
export default ClientsSlider;
