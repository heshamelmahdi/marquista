"use client";

import React, { useEffect, useState } from "react";
import styles from "./curve.module.css";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { curve, translate } from "./anim";

const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const Curve = ({ children }: { children: React.ReactNode }) => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    resize();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className={cn(styles.curve, styles.page)}>
      <div className={styles.background}></div>
      {dimensions.width > 0 && <SVG {...dimensions} />}
      {children}
    </div>
  );
};

const SVG = ({ width, height }: { width: number; height: number }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path d={initialPath} {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};

export default Curve;
