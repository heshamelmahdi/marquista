"use client";

import { useScroll, useSpring, useTransform, motion } from "framer-motion";

const TracingBeam = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const pathLength = useSpring(yRange, { stiffness: 200, damping: 30 });

  return (
    <div className="w-full h-full z-[99999999]">
      <svg
        // viewBox="0 0 2034 3380"
        viewBox="0 0 1789 6484"
        className="absolute top-[-10px] left-0 w-full h-[100%] lg:h-[250%]"
      >
        <motion.path
          fill="none"
          // d="M2033.5 8.5C1723.17 1.66667 985.5 350.1 681.5 648.5C301.5 1021.5 1071.5 1593.5 565 1693C309.699 1743.15 -82.2438 1831.59 27.5 2114C135.481 2391.87 224.44 2676.35 431.5 2596.5C849 2435.5 1218.5 2062 1246 2504C1273.5 2946 294 3274 171 3373.5"
          d="M903 1C919 1125 1094 1228.5 859.5 1359.5C625 1490.5 240 1157 216 1359.5C192 1562 164 2026.5 267.5 2054.5C371 2082.5 736.5 1990.5 879.5 2169.5C1022.5 2348.5 1177.5 2646.5 1435.5 2495.5C1693.5 2344.5 1789.5 2237 1741.5 2054.5C1693.5 1872 1590.5 1518 1356 1550C1121.5 1582 418.5 2249 434.5 2535C450.5 2821 1269 2749.5 1312.5 3043.5C1356 3337.5 617.5 3516 466.5 3603.5C315.5 3691 -14 4076.5 41.5 4287C97 4497.5 -161.5 4855.5 502 4879C1165.5 4902.5 1491 5506.5 1582.5 4791.5C1674 4076.5 1447.5 4104.5 1090 4247.5C732.5 4390.5 287.5 4429.5 144.5 4978C1.5 5526.5 577 5399 557.5 5629.5C538 5860 1253 6034.5 1090 6471.5"
          stroke="#00C2C2"
          // strokeWidth="16"
          strokeWidth="50"
          strokeDasharray="0 1"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
};
export default TracingBeam;
