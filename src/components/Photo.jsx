"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" },
        }}
        className="relative flex items-center justify-center"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute w-[280px] h-[280px] xl:w-[460px] xl:h-[460px] rounded-full bg-gradient-to-tr from-royal-600/20 via-royal-400/10 to-gold-500/15 blur-2xl -z-10" />

        {/* Central Portrait Container */}
        <div className="w-[280px] h-[340px] sm:w-[320px] sm:h-[390px] xl:w-[460px] xl:h-[500px] relative z-10">
          <Image
            src="/assets/photo.png"
            priority
            quality={95}
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 480px"
            alt="Vikash Kumar (CVK Sir) - Premier Chemistry Mentor"
            className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Sophisticated Animated Concentric SVG Rings */}
        <motion.svg
          className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] xl:w-[530px] xl:h-[530px] absolute inset-0 m-auto pointer-events-none"
          fill="transparent"
          viewBox="0 0 530 530"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ring 1 - Royal Blue */}
          <motion.circle
            cx="265"
            cy="265"
            r="255"
            stroke="#3B82F6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.45"
            initial={{ strokeDasharray: "25 120 40 30" }}
            animate={{
              strokeDasharray: ["35 140 60 30", "15 50 100 70", "25 220 40 40"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Ring 2 - Refined Gold */}
          <motion.circle
            cx="265"
            cy="265"
            r="248"
            stroke="#F59E0B"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.5"
            initial={{ strokeDasharray: "20 40 50 20" }}
            animate={{
              strokeDasharray: ["30 110 40 60", "20 45 90 55", "10 210 20 20"],
              rotate: [360, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Ring 3 - Deep Navy Accent */}
          <motion.circle
            cx="265"
            cy="265"
            r="240"
            stroke="#60A5FA"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.3"
            initial={{ strokeDasharray: "15 30 60 25" }}
            animate={{
              strokeDasharray: ["50 160 70 30", "25 60 110 50", "20 270 30 30"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
