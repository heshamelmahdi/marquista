import { whatWeDoCopy } from "@/utils/copy";

export const WhatWeDoHeading = () => {
  return (
    <h1 className="text-xl lg:text-4xl font-bold text-mainTurquoise uppercase absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-[100] w-full flex items-center justify-center">
      {whatWeDoCopy.heading}
    </h1>
  );
};
