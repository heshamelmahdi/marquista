"use client";

import { useEffect, useRef, useState } from "react";

const Card = ({ image, index }: { image: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [divWidth, setDivWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsHydrated(true);
    const resize = () => {
      if (ref.current) {
        const { width } = ref.current.getBoundingClientRect();
        setDivWidth(width);
      }
    };
    resize();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [ref]);

  const xTransform = index * ((divWidth - 75) / 5);
  const rotation = index * 5 + 20;

  return (
    <div
      className="absolute w-full h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={ref}
    >
      <div
        className="bg-white rounded-lg p-3 w-[200px] h-[200px] absolute overflow-hidden"
        style={{
          transform: isHydrated
            ? isHovered
              ? "rotate(0deg)"
              : `rotate(${rotation}deg)`
            : `rotate(${rotation}deg)`, // Apply random rotation
          left: `${xTransform}px`,
          zIndex: isHovered ? 999 : 1,
          transition: "transform 0.3s ease, z-index 0s",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};
export default Card;
