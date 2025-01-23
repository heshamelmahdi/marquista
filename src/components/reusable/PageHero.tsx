import { getTwoRandomVideos } from "@/utils/content/final-videos";
import Image from "next/image";
import { PageHeader } from "./PageHeader";
import { cn } from "@/lib/utils";

const PageHero = ({
  image,
  text,
  className,
}: {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  text: string;
  className?: string;
}) => {
  const videos = getTwoRandomVideos();

  return (
    <div className={cn("inline-block h-[50vh] max-w-fit relative", className)}>
      <div className="absolute top-0 left-0 bg-black/50 w-[500%] h-full z-[100]"></div>

      <div className="inline-flex items-center justify-center gap-2 h-full max-w-fit">
        <video
          src={videos[0]}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          className="object-contain h-full rounded-lg hidden sm:block"
        />
        <div className="relative h-full lg:max-w-[80%]">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-full object-cover rounded-lg z-[50] grayscale hidden md:block"
          />
        </div>
        <PageHeader text={text} />
        <video
          src={videos[1]}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          className="max-sm:object-cover sm:object-contain h-full rounded-lg max-sm:w-full max-sm:items-center"
        />
      </div>
    </div>
  );
};
export default PageHero;
