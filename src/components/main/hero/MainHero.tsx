import Image from "next/image";
import { PageHeader } from "@/components/reusable/PageHeader";
import { mainPageCopy } from "@/utils/copy";
import { getTwoRandomVideos } from "@/utils/content/final-videos";
import PageHero from "@/components/reusable/PageHero";

const MainHero = () => {
  const image = {
    src: "/production-set.jpeg",
    alt: "Production set",
    width: 2736,
    height: 1824,
  };
  const text = mainPageCopy.heading;

  return <PageHero image={image} text={text} className="lg:h-[80vh]" />;
};
export default MainHero;
