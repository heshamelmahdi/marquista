import { Compare } from "@/components/ui/compare";
import SectionHeader from "../reusable/SectionHeader";
import { whatWeDoCopy } from "@/utils/copy";

export function MovieMagic() {
  return (
    <div className="grid grid-cols-3 w-full">
      <div className="col-span-1 flex items-center justify-center">
        <SectionHeader
          title={whatWeDoCopy.movieMagic.title}
          description={whatWeDoCopy.movieMagic.description}
        />
      </div>
      <div className="col-span-1 w-full flex justify-center items-center h-full">
        <div className="p-4 border rounded-3xl bg-neutral-900 border-neutral-800 px-4">
          <Compare
            firstImage="https://assets.aceternity.com/code-problem.png"
            secondImage="https://assets.aceternity.com/code-solution.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
            slideMode="hover"
          />
        </div>
      </div>
      <div className="col-span-1 w-full flex justify-center items-center h-full">
        <div className="p-4 border rounded-3xl bg-neutral-900 border-neutral-800 px-4">
          <Compare
            firstImage="https://assets.aceternity.com/code-problem.png"
            secondImage="https://assets.aceternity.com/code-solution.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
            slideMode="hover"
          />
        </div>
      </div>
    </div>
  );
}
