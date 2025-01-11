import ContactUs from "@/components/ContactUs";
import { MovieMagic } from "@/components/whatWeDo/MovieMagic";
import OurExpertise from "@/components/whatWeDo/OurExpertise";
import OurServices from "@/components/whatWeDo/ourServices/OurServices";
import WhatWeDoHero from "@/components/whatWeDo/WhatWeDoHero";

const WhatWeDo = () => {
  return (
    <div className="m-10 mt-20 lg:m-20 flex items-center gap-10 flex-col">
      <WhatWeDoHero />
      <OurServices />
      <MovieMagic />
      <OurExpertise />
      <ContactUs />
    </div>
  );
};
export default WhatWeDo;
