import Image from "next/image";
import { PageHeader } from "../reusable/PageHeader";
import { aboutUsPageCopy } from "@/utils/copy";
import { getTwoRandomVideos } from "@/utils/content/final-videos";

const AboutHero = () => {
  const videos = getTwoRandomVideos();

  return (
    <div className="inline-block lg:h-[50vh] max-w-fit relative">
      <div className="absolute top-0 left-0 bg-black/50 w-[500%] h-full z-[100]"></div>

      <div className="inline-flex items-center justify-center gap-2 h-full max-w-fit">
        <video
          src={videos[0]}
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
          <PageHeader text={aboutUsPageCopy.heading} />
        </div>
        <video
          src={videos[1]}
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
