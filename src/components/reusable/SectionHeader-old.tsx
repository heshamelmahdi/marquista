"use client";

import { cn } from "@/lib/utils";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

const SectionHeader = ({
  line1,
  line2,
  topLine,
  description,
  className = "",
}: {
  line1: { word: string; className: string }[];
  line2: { word: string; className: string }[];
  topLine: string;
  description: string;
  className?: string;
}) => {
  const titleDivClassName =
    "flex w-[80%] md:w-[60%] items-center justify-center space-x-2 md:space-x-4 overflow-hidden";

  const titleWordsClassName =
    "uppercase text-4xl md:text-5xl min-[947px]:text-6xl min-[1128px]:text-7xl min-[1500px]:text-8xl overflow-hidden";
  return (
    <div
      className={cn(
        "flex flex-col gap-8 w-full h-full items-center justify-center",
        className
      )}
    >
      <h3 className={cn("font-anton text-lg md:text-xl")}>{topLine}</h3>
      <div className="flex flex-col w-full items-center justify-center">
        <motion.div
          className={cn(titleDivClassName)}
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {line1.map((word, index) => (
            <h1 key={index} className={cn(titleWordsClassName, word.className)}>
              {word.word}
            </h1>
          ))}
        </motion.div>
        <motion.div
          className={cn(titleDivClassName, "w-[90%]")}
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {line2.map((word, index) => (
            <h1 key={index} className={cn(titleWordsClassName, word.className)}>
              {word.word}
            </h1>
          ))}
        </motion.div>
      </div>
      <motion.p
        className="font-light text-sm md:font-thin min-[1500px]:text-lg w-[80%] md:w-[50%] text-center"
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </div>
  );
};
export default SectionHeader;
