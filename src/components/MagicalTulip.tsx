import React from 'react';
import { motion } from 'framer-motion';

export const MagicalTulip: React.FC = () => {
  return (
    <div className="relative w-52 h-64 sm:w-64 sm:h-72 mx-auto flex items-center justify-center pointer-events-none select-none">
      {/* Background Soft Flower Halo Glow */}
      <div className="absolute w-48 h-48 bg-pink-500/30 rounded-full blur-3xl animate-pulse-halo" />
      <div className="absolute w-36 h-36 bg-rose-400/25 rounded-full blur-2xl animate-float-slow" />

      {/* SVG Magical Blooming Tulip */}
      <svg
        viewBox="0 0 240 280"
        className="w-full h-full drop-shadow-[0_10px_25px_rgba(244,114,182,0.45)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Petal Center Gradient */}
          <linearGradient id="petalCenterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdf2f8" />
            <stop offset="40%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>

          {/* Left Petal Gradient */}
          <linearGradient id="petalLeftGrad" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#fbcfe8" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#be185d" />
          </linearGradient>

          {/* Right Petal Gradient */}
          <linearGradient id="petalRightGrad" x1="90%" y1="0%" x2="10%" y2="100%">
            <stop offset="0%" stopColor="#fce7f3" />
            <stop offset="50%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#9d174d" />
          </linearGradient>

          {/* Stem & Leaf Gradient */}
          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          {/* Golden Sparkle Glow */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Stem with sway */}
        <motion.path
          d="M120 160 C120 190, 116 230, 118 265"
          stroke="url(#stemGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Left Leaf */}
        <motion.path
          d="M118 230 C90 220, 60 170, 75 145 C85 175, 105 205, 119 215"
          fill="url(#stemGrad)"
          opacity="0.88"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="origin-bottom-right"
        />

        {/* Right Leaf */}
        <motion.path
          d="M118 210 C145 195, 175 155, 160 130 C150 160, 130 185, 118 200"
          fill="url(#stemGrad)"
          opacity="0.88"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="origin-bottom-left"
        />

        {/* Flower Head Group with Breathing Motion */}
        <motion.g
          animate={{
            y: [-3, 3, -3],
            rotate: [-1.5, 1.5, -1.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="origin-center"
        >
          {/* Back Tulip Petal */}
          <ellipse
            cx="120"
            cy="110"
            rx="24"
            ry="48"
            fill="#be185d"
            opacity="0.7"
          />

          {/* Left Petal */}
          <path
            d="M120 160 C90 140, 72 105, 85 75 C98 55, 118 80, 120 120 Z"
            fill="url(#petalLeftGrad)"
            filter="url(#softGlow)"
          />

          {/* Right Petal */}
          <path
            d="M120 160 C150 140, 168 105, 155 75 C142 55, 122 80, 120 120 Z"
            fill="url(#petalRightGrad)"
            filter="url(#softGlow)"
          />

          {/* Central Foreground Petal */}
          <path
            d="M120 165 C98 140, 96 85, 120 62 C144 85, 142 140, 120 165 Z"
            fill="url(#petalCenterGrad)"
          />

          {/* Delicate Highlight Curves on Petals */}
          <path
            d="M112 85 C116 75, 124 75, 128 85"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.65"
          />
          <path
            d="M102 110 C108 125, 114 140, 120 152"
            stroke="#fce7f3"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.45"
          />

          {/* Tiny sparkling lights around blossom */}
          <circle cx="95" cy="65" r="2" fill="#fef08a" className="animate-ping opacity-80" />
          <circle cx="145" cy="70" r="1.5" fill="#fdf2f8" className="animate-pulse opacity-90" />
          <circle cx="120" cy="48" r="2.5" fill="#fbcfe8" className="animate-pulse" />
        </motion.g>
      </svg>
    </div>
  );
};
