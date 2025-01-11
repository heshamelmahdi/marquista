"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import useDimension from "@/utils/hooks/useDimension";

const videos = [
  "/videos/batates1.mp4",
  "/videos/exile1.mov",
  "/videos/exile1.mov",
  "/videos/donuts1.mov",
  "/videos/exile1.mov",
  "/videos/donuts1.mov",
  "/videos/batates2.mov",
  "/videos/batates1.mp4",
  "/videos/donuts1.mov",
  "/videos/batates2.mov",
  "/videos/batates1.mp4",
  "/videos/batates2.mov",
];

const ProjectsParallax = () => {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    // @ts-ignore
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
        className="h-[250vh] flex gap-[2vw] p-[2vw] box-border overflow-hidden"
      >
        <Column videos={[videos[0], videos[1], videos[2]]} y={y1} />
        <Column videos={[videos[3], videos[4], videos[5]]} y={y2} />
        <Column videos={[videos[6], videos[7], videos[8]]} y={y3} />
        <Column videos={[videos[9], videos[10], videos[11]]} y={y4} />
      </div>
      <div className="h-screen bg-white" />
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
      className="w-[25%] h-full flex flex-col gap-[2vw] min-w-[250px] relative first:top-[-45%] [&:nth-of-type(2)]:top-[-95%] [&:nth-of-type(3)]:top-[-30%] [&:nth-of-type(4)]:top-[-75%]"
    >
      {videos.map((src, index) => {
        return (
          <div
            key={index}
            className="w-full h-full relative rounded-[1vw] overflow-hidden"
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
