import { aboutUsPageCopy } from "@/utils/copy";
import PageHero from "../reusable/PageHero";

const AboutHero = () => {
  const image = {
    src: "/film-crew.jpg",
    alt: "Production set",
    width: 2560,
    height: 1707,
  };
  const text = aboutUsPageCopy.heading;

  return <PageHero image={image} text={text} />;
};
export default AboutHero;
