const generateAnimationValues = (
  start: number,
  end: number,
  steps: number = 100
) => {
  const step = (end - start) / steps;
  const values = [];
  for (let i = 0; i <= steps; i++) {
    values.push(start + step * i);
  }

  return values;
};

export const staggerUp = {
  initial: {
    opacity: 0,
    y: 120,
    rotate: 10,
  }, // Characters start below and invisible
  animate: (index: number) => ({
    opacity: generateAnimationValues(0, 1),
    y: generateAnimationValues(120, 0),
    rotate: generateAnimationValues(10, 0),

    transition: {
      delay: 0.02 * index,
      duration: 0.5,
      ease: "easeOut",
      times: generateAnimationValues(0, 1),
    },
  }),
};
