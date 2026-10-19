import React from 'react';
import { motion } from 'framer-motion';

export const SoftPinkLily: React.FC = () => {
  return (
    <div className="relative w-56 h-64 sm:w-68 sm:h-72 mx-auto flex items-center justify-center pointer-events-none select-none">
      {/* Background Soft Flower Halo Glow */}
      <div className="absolute w-52 h-52 bg-pink-500/25 rounded-full blur-3xl animate-pulse-halo" />
      <div className="absolute w-36 h-36 bg-rose-400/20 rounded-full blur-2xl animate-float-slow" />

      {/* SVG Soft Pink Lily Flower */}
      <svg
        viewBox="0 0 260 280"
        className="w-full h-full drop-shadow-[0_12px_28px_rgba(244,114,182,0.45)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Lily Petal Base Gradient: Soft white-blush to rose pink */}
          <linearGradient id="lilyPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#fdf2f8" />
            <stop offset="70%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>

          {/* Lily Petal Lateral Gradient */}
          <linearGradient id="lilyPetalSide" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#fff5f9" />
            <stop offset="45%" stopColor="#fbcfe8" />
            <stop offset="85%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#be185d" />
          </linearGradient>

          {/* Stem & Leaf Gradient */}
          <linearGradient id="lilyStemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          {/* Stamen Filament Gradient */}
          <linearGradient id="stamenFilament" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="50%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#fef9c3" />
          </linearGradient>

          {/* Anther / Pollen Gold Gradient */}
          <linearGradient id="antherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>

          {/* Soft Glow Filter */}
          <filter id="lilyGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Stem with graceful curve */}
        <motion.path
          d="M130 155 C128 190, 122 228, 125 270"
          stroke="url(#lilyStemGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Left Lily Leaf (slender, lanceolate) */}
        <motion.path
          d="M125 225 C95 210, 50 168, 62 138 C76 168, 106 198, 126 210"
          fill="url(#lilyStemGrad)"
          opacity="0.88"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="origin-bottom-right"
        />

        {/* Right Lily Leaf */}
        <motion.path
          d="M127 200 C155 185, 198 148, 185 125 C172 155, 145 180, 127 192"
          fill="url(#lilyStemGrad)"
          opacity="0.88"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="origin-bottom-left"
        />

        {/* Lily Blossom Group with natural sway and blooming breathing */}
        <motion.g
          animate={{
            y: [-3, 3, -3],
            rotate: [-1.8, 1.8, -1.8],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="origin-center"
        >
          {/* Back 3 Petals (Sepals) - spreading wide */}
          {/* Top Petal */}
          <path
            d="M130 150 C115 115, 110 65, 130 25 C150 65, 145 115, 130 150 Z"
            fill="url(#lilyPetalSide)"
            opacity="0.92"
            filter="url(#lilyGlow)"
          />
          {/* Petal Midrib Line */}
          <path d="M130 145 Q130 85 130 35" stroke="#ec4899" strokeWidth="1.2" opacity="0.6" strokeDasharray="2 2" />

          {/* Left-Back Petal */}
          <path
            d="M130 150 C95 135, 45 105, 30 75 C60 70, 105 105, 130 150 Z"
            fill="url(#lilyPetalSide)"
            opacity="0.9"
          />
          {/* Right-Back Petal */}
          <path
            d="M130 150 C165 135, 215 105, 230 75 C200 70, 155 105, 130 150 Z"
            fill="url(#lilyPetalSide)"
            opacity="0.9"
          />

          {/* Front 3 Main Blooming Petals with classic flared lily curves */}
          {/* Bottom Left Petal */}
          <path
            d="M130 150 C100 160, 65 175, 45 190 C65 198, 105 185, 130 150 Z"
            fill="url(#lilyPetalGrad)"
          />

          {/* Bottom Right Petal */}
          <path
            d="M130 150 C160 160, 195 175, 215 190 C195 198, 155 185, 130 150 Z"
            fill="url(#lilyPetalGrad)"
          />

          {/* Center Front Petal */}
          <path
            d="M130 150 C108 135, 95 85, 130 50 C165 85, 152 135, 130 150 Z"
            fill="url(#lilyPetalGrad)"
            filter="url(#lilyGlow)"
          />

          {/* Lily Freckles / Papillae dots near center */}
          <g fill="#9d174d" opacity="0.75">
            <circle cx="126" cy="118" r="1.2" />
            <circle cx="134" cy="115" r="1.3" />
            <circle cx="122" cy="128" r="1.4" />
            <circle cx="138" cy="125" r="1.2" />
            <circle cx="128" cy="136" r="1.5" />
            <circle cx="132" cy="133" r="1.2" />
            <circle cx="115" cy="135" r="1.1" />
            <circle cx="145" cy="132" r="1.1" />
          </g>

          {/* Green-yellow inner throat glow */}
          <ellipse cx="130" cy="148" rx="14" ry="12" fill="#bef264" opacity="0.65" filter="url(#lilyGlow)" />

          {/* 6 Visible Stamens with Curved Filaments & Golden Anthers */}
          {/* Stamen 1 (far left) */}
          <path d="M130 148 Q100 125 90 95" stroke="url(#stamenFilament)" strokeWidth="2.2" strokeLinecap="round" />
          <ellipse cx="90" cy="93" rx="6.5" ry="3.5" transform="rotate(-30 90 93)" fill="url(#antherGrad)" stroke="#451a03" strokeWidth="0.6" />

          {/* Stamen 2 (mid left) */}
          <path d="M130 148 Q112 110 110 80" stroke="url(#stamenFilament)" strokeWidth="2.2" strokeLinecap="round" />
          <ellipse cx="110" cy="78" rx="6.5" ry="3.5" transform="rotate(-15 110 78)" fill="url(#antherGrad)" stroke="#451a03" strokeWidth="0.6" />

          {/* Stamen 3 (pistil / carpel center with green stigma) */}
          <path d="M130 148 Q130 105 130 70" stroke="#86efac" strokeWidth="2.8" strokeLinecap="round" />
          {/* Stigma (3-lobed star head) */}
          <circle cx="130" cy="68" r="4.5" fill="#4ade80" stroke="#166534" strokeWidth="0.8" />

          {/* Stamen 4 (mid right) */}
          <path d="M130 148 Q148 110 150 80" stroke="url(#stamenFilament)" strokeWidth="2.2" strokeLinecap="round" />
          <ellipse cx="150" cy="78" rx="6.5" ry="3.5" transform="rotate(15 150 78)" fill="url(#antherGrad)" stroke="#451a03" strokeWidth="0.6" />

          {/* Stamen 5 (far right) */}
          <path d="M130 148 Q160 125 170 95" stroke="url(#stamenFilament)" strokeWidth="2.2" strokeLinecap="round" />
          <ellipse cx="170" cy="93" rx="6.5" ry="3.5" transform="rotate(30 170 93)" fill="url(#antherGrad)" stroke="#451a03" strokeWidth="0.6" />

          {/* Stamen 6 (lower arch) */}
          <path d="M130 148 Q132 135 138 120" stroke="url(#stamenFilament)" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="138" cy="118" rx="5" ry="2.8" transform="rotate(25 138 118)" fill="url(#antherGrad)" />

          {/* Sparkling magic micro-lights around the lily */}
          <circle cx="85" cy="65" r="2" fill="#fef08a" className="animate-ping opacity-75" />
          <circle cx="175" cy="65" r="1.8" fill="#fdf2f8" className="animate-pulse opacity-90" />
          <circle cx="130" cy="40" r="2.5" fill="#fbcfe8" className="animate-pulse" />
          <circle cx="60" cy="140" r="1.5" fill="#fde047" className="animate-ping opacity-60" />
        </motion.g>
      </svg>
    </div>
  );
};
