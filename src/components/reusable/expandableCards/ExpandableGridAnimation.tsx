"use client";

import { useState } from "react";
import ExpandableCard from "./ExpandableCard";

const ExpandableGridAnimation = ({
  items,
}: {
  items: {
    middleText: string;
    title: string;
    description: string;
    image: string;
    titleClassName?: string;
  }[];
}) => {
  const [expandedCard, setExpandedCard] = useState<number>(1);

  const handleHover = (index: number) => {
    setExpandedCard(index);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2 w-full h-full">
      {items.map((service, index) => (
        <ExpandableCard
          key={index}
          title={service.title}
          titleClassName={service.titleClassName}
          description={service.description}
          image={service.image}
          middleText={service.middleText}
          isExpanded={expandedCard === index}
          onHover={() => handleHover(index)}
        />
      ))}
    </div>
  );
};
export default ExpandableGridAnimation;
