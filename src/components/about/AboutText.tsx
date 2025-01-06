import { cn } from "@/lib/utils";
import { aboutUsPageCopy } from "@/utils/copy";

export const AboutTextHeading = () => {
  return (
    <h1 className="text-xl lg:text-4xl font-bold text-mainTurquoise uppercase absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-[100] w-full flex items-center justify-center">
      {aboutUsPageCopy.heading}
    </h1>
  );
};

export const AboutTextSubHeadingAndBody = () => {
  return (
    <div className="uppercase flex flex-col gap-2 text-white items-center">
      <h2 className="text-lg lg:text-2xl font-bold leading-tight">
        A talented crew of <span className="text-mainTurquoise">dreamers</span>,{" "}
        <span className="text-mainTurquoise">doers</span>, and{" "}
        <span className="text-mainTurquoise">storytellers</span>.
      </h2>
      <p className="text-sm lg:text-lg text-justify w-full">
        {aboutUsPageCopy.body}
      </p>
    </div>
  );
};
