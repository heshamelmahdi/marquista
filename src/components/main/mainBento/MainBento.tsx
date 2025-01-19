"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../ui/bento-grid";
import { items } from "./MainBentoComponents";
import SectionHeader from "@/components/reusable/SectionHeader";
import { mainBentoGridCopy } from "@/utils/copy";
import useDimension from "@/utils/hooks/useDimension";

export function MainBento() {
  const { width } = useDimension();
  console.log("width", width);
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-10">
      <div className="w-full h-full col-span-1">
        <SectionHeader
          title={mainBentoGridCopy.headerTitle}
          description={mainBentoGridCopy.headerParagraph}
        />
      </div>
      <BentoGrid className="col-span-2 w-full mx-0 md:auto-rows-[20rem]">
        {items.map((item, i) => {
          if (width > 768) {
            return (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              >
                {item.children}
              </BentoGridItem>
            );
          } else {
            if (i != 3) {
              return (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                  icon={item.icon}
                >
                  {item.children}
                </BentoGridItem>
              );
            }
          }
        })}
      </BentoGrid>
    </div>
  );
}
