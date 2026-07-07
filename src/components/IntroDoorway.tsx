import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface IntroDoorwayProps {
  onComplete: () => void;
}

export default function IntroDoorway({ onComplete }: IntroDoorwayProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isFullyClosed, setIsFullyClosed] = useState(true);

  // Prevent scroll while intro is visible
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Automatically start the doorway slide open after 3.2 seconds
  useEffect(() => {
    const startOpeningTimer = setTimeout(() => {
      setIsOpening(true);
    }, 3200);

    // Complete the transition once the doors finish sliding wide
    const completionTimer = setTimeout(() => {
      setIsFullyClosed(false);
      onComplete();
    }, 4400); // 3200ms + 1200ms slide duration

    return () => {
      clearTimeout(startOpeningTimer);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  if (!isFullyClosed) return null;

  // Staggered words for "LIVE THE DREAM"
  const words = [
    ["L", "I", "V", "E"],
    ["T", "H", "E"],
    ["D", "R", "E", "A", "M"]
  ];

  return (
    <div
      id="intro-doorway-container"
      className="fixed inset-0 z-[999] overflow-hidden flex items-center justify-center font-sans select-none"
    >
      {/* 1. Brand Logo Content Overlay */}
      <AnimatePresence>
        {!isOpening && (
          /* Central overlay containing logo, drafting lines, and minimal credentials */
          <motion.div
            id="intro-content-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96, y: -15 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="absolute z-10 flex flex-col items-center text-center px-6 max-w-xl pointer-events-none"
          >
            {/* Architectural Blueprint / Drafting Grid Guidelines */}
            <div className="absolute w-80 h-80 -z-10 flex items-center justify-center opacity-25">
              {/* Outer drafting square */}
              <motion.div
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                className="absolute border border-stone-400 w-64 h-64 border-dashed"
              />
              {/* Spinning/stretching inner draft compass circles */}
              <motion.div
                initial={{ scale: 0.6, rotate: 0, opacity: 0 }}
                animate={{ scale: 1, rotate: 45, opacity: 0.2 }}
                transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute border border-stone-500 rounded-full w-48 h-48"
              />
              <motion.div
                initial={{ scale: 0.3, rotate: 0, opacity: 0 }}
                animate={{ scale: 1, rotate: -45, opacity: 0.15 }}
                transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute border border-stone-500 rounded-full w-32 h-32"
              />
              {/* Thin axis alignment crosses */}
              <div className="absolute h-full w-[1px] bg-stone-500/20" />
              <div className="absolute w-full h-[1px] bg-stone-500/20" />
            </div>

            {/* Studio Code Name Prefix */}
            <motion.p
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[9px] tracking-[0.4em] uppercase text-stone-400 font-mono font-medium mb-4"
            >
              EST. 2016 // REGIONAL ARCHITECTURE
            </motion.p>

            {/* Staggered Main Title Letters grouped into words */}
            <div className="flex flex-row flex-wrap justify-center items-center gap-x-6 md:gap-x-8 gap-y-3 mb-4">
              {words.map((word, wordIdx) => {
                const previousLettersCount = words
                  .slice(0, wordIdx)
                  .reduce((acc, curr) => acc + curr.length, 0);

                return (
                  <div key={wordIdx} className="flex gap-2 md:gap-3">
                    {word.map((letter, letterIdx) => {
                      const absoluteIdx = previousLettersCount + letterIdx;
                      return (
                        <motion.span
                          key={letterIdx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.4 + absoluteIdx * 0.08,
                            duration: 0.8,
                            ease: [0.215, 0.61, 0.355, 1],
                          }}
                          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-100 font-light tracking-wide"
                        >
                          {letter}
                        </motion.span>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            {/* Sub-Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="text-[10px] tracking-[0.35em] uppercase text-stone-300 font-mono font-light max-w-[280px]"
            >
              Architects & Designers
            </motion.p>

            {/* Centered Expanding Horizon Divider Line */}
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.6, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="h-[1px] bg-stone-700 w-48 my-8"
            />

            {/* Subtitle location indicator instead of manual button */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ delay: 2.0, duration: 0.8 }}
              className="text-[9px] tracking-[0.25em] uppercase text-stone-400 font-mono font-light"
            >
              NEW CHANDIGARH STUDIO
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Massive Left and Right Double Doors */}
      <div className="absolute inset-0 flex overflow-hidden pointer-events-none">
        {/* LEFT DOOR PANEL */}
        <motion.div
          id="intro-left-door"
          initial={{ x: "0%" }}
          animate={isOpening ? { x: "-100%" } : { x: "0%" }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1], // deep luxury architectural deceleration
          }}
          className="w-1/2 h-full bg-stone-950 border-r border-stone-900 flex items-center justify-end pr-8"
        >
          {/* Faint elegant visual lines indicating structure inside the doors */}
          <div className="h-[75%] w-[1px] bg-gradient-to-b from-transparent via-stone-800 to-transparent opacity-40 mr-12" />
        </motion.div>

        {/* RIGHT DOOR PANEL */}
        <motion.div
          id="intro-right-door"
          initial={{ x: "0%" }}
          animate={isOpening ? { x: "100%" } : { x: "0%" }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1], // deep luxury architectural deceleration
          }}
          className="w-1/2 h-full bg-stone-950 border-l border-stone-900 flex items-center justify-start pl-8"
        >
          {/* Faint elegant visual lines indicating structure inside the doors */}
          <div className="h-[75%] w-[1px] bg-gradient-to-b from-transparent via-stone-800 to-transparent opacity-40 ml-12" />
        </motion.div>
      </div>
    </div>
  );
}
