import Image from "next/image";
import { AboutTextHeading } from "./AboutText";

const AboutHero = () => {
  return (
    <div className="inline-block lg:h-[50vh] max-w-fit relative">
      <div className="absolute top-0 left-0 bg-black/50 w-[500%] h-full z-[100]"></div>

      <div className="inline-flex items-center justify-center gap-2 h-full max-w-fit">
        <video
          src="/videos/batates2.mov"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          className="object-contain h-full rounded-lg hidden lg:block"
        />
        <div className="relative h-full lg:max-w-[80%]">
          <Image
            src="/film-crew.jpg"
            alt="Production set"
            width={2560}
            height={1707}
            className="h-full object-cover rounded-lg z-[50] grayscale"
          />
          <AboutTextHeading />
        </div>
        <video
          src="/videos/donuts1.mov"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          className="object-contain h-full rounded-lg hidden lg:block"
        />
      </div>
    </div>
  );
};
export default AboutHero;
