import { aboutUsPageCopy } from "@/utils/copy";

export const AboutTextSubHeadingAndBody = () => {
  return (
    <div className="flex flex-col gap-2 text-white items-center">
      <h2 className="uppercase text-lg lg:text-2xl font-bold leading-tight">
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
