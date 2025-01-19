import { Compare } from "@/components/ui/compare";
import SectionHeader from "../reusable/SectionHeader";
import { whatWeDoCopy } from "@/utils/copy/what-we-do";
import { compareImages } from "@/utils/content/compare-photos";

export function MovieMagic() {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-3 w-full gap-6">
      <div className="col-span-1 w-full flex justify-center items-center h-full">
        <div className="p-4 border rounded-3xl bg-neutral-900 border-neutral-800 px-4 w-full">
          <Compare
            firstImage={compareImages[0].firstImage}
            secondImage={compareImages[0].secondImage}
            firstImageClassName="object-center object-cover "
            secondImageClassname="object-center object-cover "
            className="w-full max-md:h-[80vw]"
            slideMode="drag"
          />
        </div>
      </div>
      <div className="col-span-1 w-full flex justify-center items-center h-full">
        <div className="p-4 border rounded-3xl bg-neutral-900 border-neutral-800 px-4 w-full">
          <Compare
            firstImage={compareImages[1].firstImage}
            secondImage={compareImages[1].secondImage}
            firstImageClassName="object-center object-cover "
            secondImageClassname="object-center object-cover "
            className="w-full max-md:h-[80vw]"
            slideMode="drag"
          />
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <SectionHeader
          title={whatWeDoCopy.movieMagic.title}
          description={whatWeDoCopy.movieMagic.description}
        />
      </div>
    </div>
  );
}
