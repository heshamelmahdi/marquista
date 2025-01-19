"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { PastProjectsTitle } from "./PastProjectsText";

export const VideoComponent = ({
  src,
  text,
}: {
  src: string;
  text: string;
}) => {
  return (
    <div className="flex-100 md:flex-70 lg:flex-50 2xl:flex-33 3xl:flex-25 relative h-screen overflow-clip ">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className="object-contain"
      />
      {/* <div className="z-[200] absolute right-0 top-0 min-[1822px]:h-screen h-full hidden md:flex justify-center items-center min-[1822px]:text-4xl text-3xl uppercase text-white vertical-text w-10 bg-black/50">
        {text}
      </div> */}
    </div>
  );
};

export const PastProjectsContent = () => {
  const slides = [
    { src: "/videos/batates1.mp4", text: "Batates & Zalabya Social Post" },
    { src: "/videos/donuts1.mov", text: "Duck Donuts Social Post" },
    { src: "/videos/exile1.mov", text: "Exile Clothing Brand Social Post" },
    { src: "/videos/batates2.mov", text: "Batates & Zalabya Social Post" },
  ];

  const options = { loop: true, watchDrag: false };

  const [carouselRef, api] = useEmblaCarousel(options, [
    Autoplay({ delay: 5000 }),
  ]);

  return (
    <section className="m-auto !overflow-hidden">
      <div className="overflow-hidden" ref={carouselRef}>
        <div className="absolute top-0 left-0 bg-black/50 w-[500%] h-full z-[100]"></div>
        <div className="flex">
          {slides.map((content, index) => (
            <VideoComponent key={index} {...content} />
          ))}
        </div>
      </div>
      <div className="z-[200] absolute top-0 h-full w-full flex flex-col justify-center items-center">
        <PastProjectsTitle />
      </div>
    </section>
  );
};
