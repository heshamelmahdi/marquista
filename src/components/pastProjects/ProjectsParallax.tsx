"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import useDimension from "@/utils/hooks/useDimension";
import { PastProjectsTitle } from "./PastProjectsText";
import { generateVideoGroups } from "@/utils/content/final-videos";

const ProjectsParallax = () => {
  const container = useRef(null);

  const { width, height } = useDimension();
  console.log("width", width);
  const isMedium = width > 768;
  const isLarge = width > 1024;
  const isXLarge = width > 1440;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const [videos, setVideos] = useState<string[][]>([]);
  useEffect(() => {
    if (width > 0) {
      if (width < 768) {
        setVideos(generateVideoGroups(1, 12));
      } else {
        console.log("Generating videos");
        setVideos(generateVideoGroups());
      }
    }
  }, [width]);

  // const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    // @ts-expect-error
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <div
        ref={container}
        className="h-[800vh] md:h-[500vh] flex gap-[2vw] p-[2vw] box-border overflow-hidden justify-center"
      >
        <Column videos={videos[0]} y={y4} />
        {isMedium && <Column videos={videos[1]} y={y2} />}
        {isLarge && <Column videos={videos[2]} y={y3} />}
        {isXLarge && <Column videos={videos[3]} y={y4} />}
      </div>
      <div className="z-[200] md:fixed absolute inset-0 h-full w-full flex flex-col justify-center items-center">
        <PastProjectsTitle />
      </div>
    </main>
  );
};
export default ProjectsParallax;

const Column = ({
  videos,
  y,
}: {
  videos: string[];
  y?: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ y }}
      className="w-full max-w-[90%] h-full flex flex-col gap-[2vw] min-w-[250px] relative first:top-[-30%] [&:nth-of-type(2)]:top-[-50%] [&:nth-of-type(3)]:top-[-15%] [&:nth-of-type(4)]:top-[-50%]"
    >
      {videos &&
        videos.map((src, index) => {
          return (
            <div
              key={index}
              className="w-full h-full relative rounded-xl md:rounded-[1vw] overflow-hidden"
            >
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                className="object-cover"
              />
            </div>
          );
        })}
    </motion.div>
  );
};
