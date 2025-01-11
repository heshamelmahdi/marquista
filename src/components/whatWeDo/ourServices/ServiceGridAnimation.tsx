"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { ourServices } from "@/utils/copy/what-we-do";

const ServiceGridAnimation = () => {
  const [expandedCard, setExpandedCard] = useState<number>(1);

  const handleHover = (index: number) => {
    setExpandedCard(index);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2 w-full h-full">
      {ourServices.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          titleClassName={service.titleClassName}
          description={service.description}
          image={service.image}
          id={service.id}
          isExpanded={expandedCard === index}
          onHover={() => handleHover(index)}
        />
      ))}
    </div>
  );
};
export default ServiceGridAnimation;
