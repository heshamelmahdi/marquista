"use client";

import React, { useEffect, useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import styles from "./deck.module.css";

interface DeckProps {
  cardList?: string[];
  verticalDrag?: boolean;
  horizontalDrag?: boolean;
}

const defaultCards = [
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -20 + Math.random() * 20,
  delay: i * 100,
});

const from = (_i: number) => ({ x: -2000, rot: 0, scale: 1.5, y: 0 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const Deck = ({
  cardList = defaultCards,
  verticalDrag = false,
  horizontalDrag = true,
}: DeckProps) => {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cardList.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity

  useEffect(() => {
    api.start((i) => to(i));
  }, [api]);

  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [mx, my],
      direction: [xDir, yDir],
      velocity,
    }) => {
      console.log("test velocity", velocity);
      const trigger = velocity > 2.2; // If you flick hard enough it should trigger the card to fly out
      const dirX = xDir < 0 ? -1 : 1; // Direction should either point left or right
      const dirY = yDir < 0 ? -1 : 1; // Direction should either point up or down

      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out

      api.start((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = horizontalDrag
          ? isGone
            ? (200 + window.innerWidth) * dirX
            : down
            ? mx
            : 0
          : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const y = verticalDrag
          ? isGone
            ? (200 + window.innerHeight) * dirY
            : down
            ? my
            : 0
          : 0; // When a card is gone it flys out up or down, otherwise goes back to zero
        //   const y = 0 // When a card is gone it flys out up or down, otherwise goes back to zero
        const rot =
          mx / 100 +
          my / 100 +
          (isGone ? (dirX * 10 + dirY * 10) * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          y,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });

      if (!down && gone.size === cardList.length) {
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
      }
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        // @ts-ignore
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          {/* @ts-ignore */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              padding: "14px",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${cardList[i]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                borderRadius: "10px",
              }}
            />
          </animated.div>
        </animated.div>
      ))}
    </>
  );
};

export default Deck;
