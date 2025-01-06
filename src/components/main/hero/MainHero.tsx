import Image from "next/image";
import { MainTextHeading } from "./MainText";

const MainHero = () => {
  return (
    <div className="inline-block lg:h-[80vh] max-w-fit relative">
      <div className="absolute top-0 left-0 bg-black/50 w-full h-full z-[100]"></div>

      <div className="inline-flex items-center justify-center gap-2 h-full max-w-fit">
        <video
          src="/videos/batates1.mp4"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          className="object-contain h-full rounded-lg hidden lg:block"
        />
        <div className="relative h-full lg:max-w-[60%]">
          <Image
            src="/production-set.jpeg"
            alt="Production set"
            width={2736}
            height={1824}
            className="h-full object-cover rounded-lg z-[50]"
          />
          <MainTextHeading />
        </div>
        <video
          src="/videos/exile1.mov"
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
export default MainHero;
