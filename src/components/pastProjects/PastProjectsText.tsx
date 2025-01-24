"use client";

// import useMousePosition from "@/lib/hooks/useMousePosition";
import { motion, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
// import { useState } from "react";

export const PastProjectsTitle = ({
  width,
  height,
  maskSize,
}: {
  width: number;
  height: number;
  maskSize: MotionValue<number>;
}) => {
  // const [isHovered, setIsHovered] = useState(false);
  const [maskSizeValue, setMaskSizeValue] = useState(0);
  // const { x, y } = useMousePosition();
  // const maskSize = isHovered ? 300 : 20;
  // determine mask size based on scroll
  const x = (width - maskSizeValue - 6) / 2;
  const y = (height - maskSizeValue - 10) / 2;

  useEffect(() => {
    maskSize.on("change", (value) => {
      setMaskSizeValue(value);
    });
  }, [maskSize]);

  return (
    <div className="relative w-full h-full items-center justify-center cursor-default">
      <motion.div
        animate={{
          WebkitMaskPosition: `${x}px ${y}px`,
          WebkitMaskSize: `${maskSizeValue}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        className="absolute top-0 left-0 w-full h-full items-center justify-center uppercase text-4xl leading-[1] font-bold tracking-tighter flex flex-col transform mask z-10"
      >
        <div
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
          className="flex flex-col items-center text-pop-dark"
        >
          <h1>We Create</h1>
          <h1>Cool Shit That</h1>
          <h1>Engages</h1>
          <h1>People</h1>
        </div>
      </motion.div>
      <div className="w-full h-full items-center justify-center uppercase text-4xl leading-[1] text-white font-bold tracking-tighter flex flex-col transform">
        <div className="flex flex-col items-center">
          <h1>Crafting</h1>
          <h1>Content That</h1>
          <h1>Elevates</h1>
          <h1>Your Brand</h1>
        </div>
      </div>
    </div>
  );
};
