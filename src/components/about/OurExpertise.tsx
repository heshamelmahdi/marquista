"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/reveal-effect";
import MagicButton from "../ui/buttons/magic-button";
import { ourExpertise, whatWeDoCopy } from "@/utils/copy/what-we-do";
import SectionHeader from "../reusable/SectionHeader";

const OurExpertise = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 w-full gap-10">
      <div className="col-span-1 flex items-center justify-center">
        <SectionHeader
          title={whatWeDoCopy.ourExpertise.title}
          description={whatWeDoCopy.ourExpertise.description}
        />
      </div>
      <div className="col-span-2 w-full h-full flex justify-center items-start">
        <RevealCards />
      </div>
    </div>
  );
};

const RevealCards = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
      {ourExpertise.map((step) => (
        <Card
          title={step.subTitle}
          icon={<MagicButton order={step.title} />}
          description={step.description}
          key={step.title}
        >
          <CanvasRevealEffect
            animationSpeed={step.animationSpeed}
            containerClassName={step.containerClassName}
            colors={step.colors}
            dotSize={step.dotSize}
          />
        </Card>
      ))}
    </div>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-neutral-800 group/canvas-card flex items-center justify-center  max-w-sm w-full mx-auto p-4 relative lg:h-[20rem] rounded-3xl"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 rounded-3xl"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-pretty">
          {title}
        </h2>
        <h2
          className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
          style={{ color: "#e4ecff" }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default OurExpertise;
