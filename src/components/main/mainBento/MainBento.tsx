"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../ui/bento-grid";
import { items } from "./MainBentoComponents";
import SectionHeader from "@/components/reusable/SectionHeader";
import { mainBentoGridCopy } from "@/utils/copy";

export function MainBento() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="w-full h-full col-span-1">
        <SectionHeader
          title={mainBentoGridCopy.headerTitle}
          description={mainBentoGridCopy.headerParagraph}
        />
      </div>
      <BentoGrid className="col-span-2 w-full mx-0 md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
            children={item.children}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
