"use client";

import { useState } from "react";

const Card = ({ image, index }: { image: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const xTransform = index * 120 + 30;
  const rotation = index * 5 + 10;

  return (
    <div
      className="absolute w-full h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="bg-white rounded-lg p-3 w-[200px] h-[200px] absolute overflow-hidden"
        style={{
          transform: isHovered ? "rotate(0deg)" : `rotate(${rotation}deg)`, // Apply random rotation
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
