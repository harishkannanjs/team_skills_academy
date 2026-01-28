"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | any>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (cardRef.current) {
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function mouseMoveHandler(event: any) {
    if (isMobile) return; // Disable mouse move on mobile, use slider instead
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    if (isMobile) return; // Don't reset on mobile
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    if (isMobile) return; // Use slider on mobile
    setIsMouseOver(true);
  }
  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    if (isMobile) return; // Use slider on mobile instead
    event.preventDefault();
    const clientX = event.touches[0]!.clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  // Handler for the mobile slider
  function handleSliderChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);
    setWidthPercentage(value);
    if (value > 0) {
      setIsMouseOver(true);
    } else {
      setIsMouseOver(false);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        "bg-transparent w-full md:w-[50rem] rounded-lg p-0 relative overflow-hidden",
        className
      )}
    >
      {children}

      <div className="h-40 w-full relative flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
          }}
          animate={{
            opacity: isMouseOver ? 1 : 0,
            clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.2 }}
          className="absolute bg-transparent z-20 will-change-transform"
        >
          <p
            style={{
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
            }}
            className="text-base sm:text-[3rem] py-10 font-bold text-white w-full text-center whitespace-nowrap"
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.2 }}
          className="h-40 w-[2px] bg-gradient-to-b from-transparent via-purple-500 to-transparent absolute z-50 will-change-transform"
        ></motion.div>

        <div className="w-full flex justify-center overflow-hidden">
          <motion.div
            style={{ width: "100%" }}
            animate={{
              clipPath: `inset(0 0 0 ${widthPercentage}%)`,
            }}
            transition={isMouseOver ? { duration: 0 } : { duration: 0.2 }}
          >
            <p className="text-base sm:text-[3rem] py-10 font-bold text-[#323238] w-full text-center whitespace-nowrap">
              {text}
            </p>
          </motion.div>
          <MemoizedStars />
        </div>
      </div>

      {/* Mobile Slider - Only visible on mobile devices */}
      {isMobile && (
        <div className="w-full flex flex-col items-center justify-center gap-4 py-6 px-4">
          <div className="w-full max-w-sm">
            <div className="relative h-12 flex items-center justify-center">
              {/* Slider Track Background */}
              <div className="absolute inset-0 h-1 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 opacity-40" />

              {/* Filled Track */}
              <motion.div
                className="absolute h-1 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                style={{ width: `${widthPercentage}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${widthPercentage}%` }}
                transition={{ duration: 0.1 }}
              />

              {/* The actual slider input */}
              <input
                type="range"
                min="0"
                max="100"
                value={widthPercentage}
                onChange={handleSliderChange}
                className="relative w-full h-12 appearance-none bg-transparent cursor-pointer z-10
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-7
                  [&::-webkit-slider-thumb]:h-7
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-gradient-to-br
                  [&::-webkit-slider-thumb]:from-purple-400
                  [&::-webkit-slider-thumb]:to-pink-500
                  [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(168,85,247,0.8),_inset_0_0_10px_rgba(255,255,255,0.2)]
                  [&::-webkit-slider-thumb]:border-2
                  [&::-webkit-slider-thumb]:border-white/50
                  [&::-webkit-slider-thumb]:transition-all
                  [&::-webkit-slider-thumb]:duration-150
                  [&::-webkit-slider-thumb]:active:scale-125
                  [&::-moz-range-thumb]:w-7
                  [&::-moz-range-thumb]:h-7
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-gradient-to-br
                  [&::-moz-range-thumb]:from-purple-400
                  [&::-moz-range-thumb]:to-pink-500
                  [&::-moz-range-thumb]:shadow-[0_0_20px_rgba(168,85,247,0.8),_inset_0_0_10px_rgba(255,255,255,0.2)]
                  [&::-moz-range-thumb]:border-2
                  [&::-moz-range-thumb]:border-white/50
                  [&::-moz-range-thumb]:transition-all
                  [&::-moz-range-thumb]:active:scale-125
                  [&::-webkit-slider-runnable-track]:bg-transparent
                  [&::-webkit-slider-runnable-track]:h-1
                  [&::-moz-range-track]:bg-transparent
                  [&::-moz-range-track]:h-1
                  [&::-moz-range-track]:border-none"
              />
            </div>
          </div>

          {/* Hint text with smooth animation */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: widthPercentage > 0 ? 0.4 : 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-xs text-gray-400 font-medium tracking-wide">
              {widthPercentage > 0 ? "✨ Revealing..." : "↔️  Slide to reveal"}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("text-white text-lg mb-2", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>
  );
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
