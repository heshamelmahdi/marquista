"use client";

import React, { useEffect, useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import styles from "./deck.module.css";

interface DeckProps {
  cardList?: string[];
}

const defaultCards = [
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
];

// Deterministic random number generator (PRNG)
const seededRandom = (seed: number) => {
  let value = seed;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
};

// Helpers for animation
const to = (i: number, random: () => number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -20 + random() * 20,
  delay: i * 100,
});

const from = () => ({ x: -2000, rot: 0, scale: 1.5, y: 0 });

const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const Deck = ({ cardList = defaultCards }: DeckProps) => {
  const [gone] = useState(() => new Set<number>()); // Track flung cards
  const random = seededRandom(42);
  const [props, api] = useSprings(cardList.length, (i) => ({
    ...to(i, random),
    from: from(),
  }));

  useEffect(() => {
    api.start((i) => to(i, random));
  }, [api]);

  const flingCard = (index: number) => {
    gone.add(index); // Mark the card as "gone"
    const dirX = random() > 0.5 ? 1 : -1; // Randomly fling left or right
    const dirY = random() > 0.5 ? 1 : -1;

    api.start((i) => {
      if (i !== index) return; // Only animate the clicked card
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dirX : 0;
      const y = isGone ? (200 + window.innerHeight) * dirY : 0;
      const rot = isGone ? dirX * 10 + dirY * 10 : 0;
      const scale = 1; // Keep the scale consistent

      return {
        x,
        y,
        rot,
        scale,
        delay: undefined,
        config: { friction: 20, tension: 150 },
      };
    });

    // Reset the deck when all cards are gone
    if (gone.size === cardList.length) {
      setTimeout(() => {
        gone.clear();
        api.start((i) => to(i, random));
      }, 600);
    }
  };

  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        // @ts-expect-error
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* Card */}
          {/* @ts-expect-error */}
          <animated.div
            style={{
              transform: interpolate([rot, scale], trans),
              padding: "14px",
            }}
            onClick={() => flingCard(i)} // Fling the card on click
            className="max-w-[150px] max-h-[200px] 2xl:max-w-[175px] 2xl:max-h-[230px]"
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
