import Image from "next/image";
import { cn } from "@/lib/utils";
import { GlareCard } from "@/components/ui/glare-card";

const ServiceCardHovered = ({
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
    <div className="flex flex-col p-10 justify-between w-full h-full gap-3">
      <div className="flex items-end gap-5">
        <p className="lg:flex items-end text-xs lg:text-sm xl:text-base text-balance justify-start hidden h-full w-fit">
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
      <div className="flex flex-col justify-between w-full">
        <h1
          className={cn(
            "flex items-end justify-start text-4xl font-extrabold text-justify tracking-tighter w-fit text-black",
            titleClassName
          )}
        >
          {title.toUpperCase()}
        </h1>
      </div>
    </div>
  );
};
export default ServiceCardHovered;
