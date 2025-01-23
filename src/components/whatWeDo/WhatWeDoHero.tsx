import { whatWeDoCopy } from "@/utils/copy/what-we-do";
import PageHero from "../reusable/PageHero";

const WhatWeDoHero = () => {
  const image = {
    src: "/commercial-bts.jpg",
    alt: "Production set",
    width: 5472,
    height: 3648,
  };
  const text = whatWeDoCopy.heading;

  return <PageHero image={image} text={text} />;
};
export default WhatWeDoHero;
