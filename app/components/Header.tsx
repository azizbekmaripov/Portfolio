"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const LETTER_DELAY = 0.025;
const SWAP_DELAY_IN_MS = 4000;

const Typewrite = ({ texts }: { texts: string[] }) => {

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="w-full relative h-[60px] sm:h-[80px] mb-2.5 sm:text-5xl text-3xl font-light font-Poppins text-center"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={textIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {texts[textIndex].split("").map((l, i) => (
            <motion.span
              key={`${textIndex}-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * LETTER_DELAY, duration: 0.2 }}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </motion.p>
  );
};
const Header = ({ isDarkMode }: {isDarkMode: boolean}) => {
  return (
    <div
      className={
        isDarkMode
          ? "text-white flex flex-col space-y-3 items-center justify-center h-screen px-8 py-24 text-center"
          : "flex flex-col space-y-3 items-center justify-center h-screen px-8 py-24 text-neutral-800 text-center"
      }
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-5xl font-bold"
      >
        Hello !
      </motion.h1>
      <Typewrite texts={["My name is Azizbek", "And I am a Frontend Developer"]} />
    </div>
  );
};

export default Header;
