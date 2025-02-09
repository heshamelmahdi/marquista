import Image from "next/image";
import { cn } from "@/lib/utils";
import { GlareCard } from "@/components/ui/glare-card";

const ExpandableCardHovered = ({
  title,
  titleClassName,
  description,
  image,
}: {
  title: string;
  titleClassName?: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col p-10 justify-between w-full h-full md:gap-3">
      <div className="hidden md:flex items-end gap-5">
        <p className="lg:flex items-end text-xs lg:text-sm xl:text-base text-balance justify-start font-normal h-full w-fit text-black">
          {description}
        </p>
        <GlareCard className="">
          <Image
            className="object-cover grayscale"
            src={image}
            alt={description}
            width={2000}
            height={1000}
          />
        </GlareCard>
      </div>
      <div className="flex flex-col md:hidden items-end gap-5">
        <GlareCard className="">
          <Image
            className="object-cover grayscale"
            src={image}
            alt={description}
            width={2000}
            height={1000}
          />
        </GlareCard>
        <p className="lg:flex items-end text-xs lg:text-sm xl:text-base text-balance justify-start font-normal h-full w-fit text-black">
          {description}
        </p>
      </div>
      <div className="flex flex-col justify-between w-full">
        <h1
          className={cn(
            "flex justify-start text-2xl md:text-4xl font-extrabold tracking-tighter w-full text-center text-black",
            titleClassName
          )}
        >
          {title.toUpperCase()}
        </h1>
      </div>
    </div>
  );
};
export default ExpandableCardHovered;
