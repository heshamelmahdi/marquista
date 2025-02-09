"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import ExpandableCardNotHovered from "./ExpandableCardNotHovered";
import ExpandableCardHovered from "./ExpandableCardHovered";

const ExpandableCard = ({
  title,
  titleClassName,
  description,
  image,
  middleText,
  isExpanded,
  onHover,
}: {
  title: string;
  titleClassName?: string;
  description: string;
  image: string;
  middleText: string;
  isExpanded: boolean;
  onHover: () => void;
}) => {
  return (
    <motion.div
      onHoverStart={() => onHover()}
      onMouseEnter={() => onHover()}
      animate={{ flex: isExpanded ? 9 : 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative flex flex-col justify-center items-center transition-all duration-300 cursor-pointer overflow-hidden z-[48] h-full w-full text-white font-bold rounded-3xl",
        isExpanded
          ? "bg-mainTurquoise"
          : "bg-transparent border border-mainTurquoise"
      )}
    >
      {isExpanded ? (
        <ExpandableCardHovered
          title={title}
          titleClassName={titleClassName}
          description={description}
          image={image}
        />
      ) : (
        <ExpandableCardNotHovered middleText={middleText} title={title} />
      )}
    </motion.div>
  );
};
export default ExpandableCard;
