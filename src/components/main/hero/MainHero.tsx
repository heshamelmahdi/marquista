import Image from "next/image";
import { PageHeader } from "@/components/reusable/PageHeader";
import { mainPageCopy } from "@/utils/copy";
import { getTwoRandomVideos } from "@/utils/content/final-videos";

const MainHero = () => {
  const videos = getTwoRandomVideos();

  return (
    <div className="inline-block lg:h-[80vh] max-w-fit relative">
      <div className="absolute top-0 left-0 bg-black/50 w-full h-full z-[100]"></div>

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
        <div className="relative h-full lg:max-w-[60%]">
          <Image
            src="/production-set.jpeg"
            alt="Production set"
            width={2736}
            height={1824}
            className="h-full object-cover rounded-lg z-[50]"
          />
          <PageHeader text={mainPageCopy.heading} />
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
export default MainHero;
