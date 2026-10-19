import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { greetingConfig } from '../config/greeting';
import { sfx } from '../utils/soundEffects';

interface GiftBoxProps {
  onOpened: () => void;
}

export const GiftBox: React.FC<GiftBoxProps> = ({ onOpened }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const handleOpen = () => {
    if (isOpening || hasOpened) return;
    setIsOpening(true);
    sfx.playGiftOpen();

    // Fire cute confetti burst from the gift box position
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.55 },
      colors: ['#f472b6', '#fb7185', '#fbcfe8', '#fef08a', '#e879f9'],
      shapes: ['circle'],
      scalar: 0.9,
    });

    // Small delay before completing transition
    setTimeout(() => {
      setHasOpened(true);
      onOpened();
    }, 1400);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.6 } }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 text-center"
    >
      {/* Title & Instructions */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8 space-y-2"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-950/60 border border-pink-500/30 text-pink-300 text-xs sm:text-sm font-medium">
          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/50" />
          <span>{greetingConfig.giftBox.instruction}</span>
        </div>
        <p className="text-rose-200/70 text-xs sm:text-sm animate-pulse">
          {greetingConfig.giftBox.hint}
        </p>
      </motion.div>

      {/* Interactive 3D/SVG Gift Box Container */}
      <div
        onClick={handleOpen}
        className="relative cursor-pointer group select-none py-6 px-8"
        title="Bấm để mở món quà"
      >
        {/* Glowing backdrop aura */}
        <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-3xl group-hover:bg-pink-500/35 transition-all duration-500 animate-pulse-halo" />

        {/* Floating container */}
        <motion.div
          animate={
            isOpening
              ? { scale: [1, 1.08, 0.95], y: [0, -10, 0] }
              : { y: [-6, 6, -6] }
          }
          transition={
            isOpening
              ? { duration: 0.6 }
              : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
          }
          className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center"
        >
          {/* Floating magical particles emerging on open */}
          <AnimatePresence>
            {isOpening && (
              <>
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
                    animate={{
                      x: (Math.random() - 0.5) * 220,
                      y: -Math.random() * 200 - 40,
                      opacity: 0,
                      scale: Math.random() * 1.5 + 0.8,
                    }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="absolute z-30 pointer-events-none"
                  >
                    {i % 2 === 0 ? (
                      <Heart className="w-6 h-6 text-pink-400 fill-pink-300" />
                    ) : (
                      <Sparkles className="w-5 h-5 text-amber-200 fill-amber-200" />
                    )}
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>

          {/* SVG Gift Box with Ribbon, Bow, and Animated Lid */}
          <svg
            viewBox="0 0 240 240"
            className="w-full h-full filter drop-shadow-[0_15px_30px_rgba(219,39,119,0.4)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Box Body Gradient */}
              <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="60%" stopColor="#db2777" />
                <stop offset="100%" stopColor="#9d174d" />
              </linearGradient>

              {/* Box Lid Gradient */}
              <linearGradient id="lidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbcfe8" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#be185d" />
              </linearGradient>

              {/* Gold Ribbon Gradient */}
              <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="40%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#ca8a04" />
              </linearGradient>
            </defs>

            {/* Box Body */}
            <g id="box-base">
              {/* Main Cube */}
              <rect
                x="50"
                y="105"
                width="140"
                height="105"
                rx="12"
                fill="url(#boxGrad)"
              />
              
              {/* Front Shadow & Highlights */}
              <rect
                x="50"
                y="105"
                width="140"
                height="105"
                rx="12"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.5"
              />

              {/* Gold Ribbon - Vertical Stripe */}
              <rect
                x="108"
                y="105"
                width="24"
                height="105"
                fill="url(#goldRibbon)"
              />
              <rect
                x="116"
                y="105"
                width="8"
                height="105"
                fill="#fef08a"
                opacity="0.6"
              />

              {/* Gold Ribbon - Horizontal Stripe */}
              <rect
                x="50"
                y="145"
                width="140"
                height="22"
                fill="url(#goldRibbon)"
              />
              <rect
                x="50"
                y="151"
                width="140"
                height="8"
                fill="#fef08a"
                opacity="0.6"
              />
            </g>

            {/* Emerging Greeting Envelope Card inside the box */}
            <motion.g
              initial={{ y: 20, opacity: 0, scale: 0.8 }}
              animate={
                isOpening
                  ? { y: -50, opacity: 1, scale: 1.1 }
                  : { y: 20, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <rect
                x="65"
                y="75"
                width="110"
                height="65"
                rx="6"
                fill="#fffdfa"
                stroke="#f472b6"
                strokeWidth="2"
              />
              <path
                d="M65 77 L120 112 L175 77"
                stroke="#f472b6"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="120" cy="112" r="5" fill="#f43f5e" />
            </motion.g>

            {/* Box Lid & Bow Group (Flies off when opening) */}
            <motion.g
              id="box-lid-group"
              animate={
                isOpening
                  ? { y: -80, rotate: -18, opacity: 0.1 }
                  : { y: 0, rotate: 0 }
              }
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ transformOrigin: '120px 95px' }}
            >
              {/* Lid Rim */}
              <rect
                x="42"
                y="85"
                width="156"
                height="26"
                rx="8"
                fill="url(#lidGrad)"
              />
              <rect
                x="42"
                y="85"
                width="156"
                height="26"
                rx="8"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1.5"
              />

              {/* Lid Ribbon Vertical */}
              <rect
                x="108"
                y="85"
                width="24"
                height="26"
                fill="url(#goldRibbon)"
              />

              {/* Bow Left Loop */}
              <path
                d="M120 86 C95 50, 60 70, 95 86 Z"
                fill="url(#goldRibbon)"
              />
              {/* Bow Right Loop */}
              <path
                d="M120 86 C145 50, 180 70, 145 86 Z"
                fill="url(#goldRibbon)"
              />

              {/* Bow Center Knot */}
              <ellipse
                cx="120"
                cy="86"
                rx="10"
                ry="8"
                fill="#fde047"
              />
              <ellipse
                cx="120"
                cy="86"
                rx="6"
                ry="5"
                fill="#ca8a04"
                opacity="0.4"
              />

              {/* Ribbon Tails */}
              <path
                d="M115 89 C100 100, 95 118, 92 125 C98 120, 105 110, 116 93 Z"
                fill="url(#goldRibbon)"
              />
              <path
                d="M125 89 C140 100, 145 118, 148 125 C142 120, 135 110, 124 93 Z"
                fill="url(#goldRibbon)"
              />
            </motion.g>
          </svg>
        </motion.div>

        {/* Click hint button */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-4"
        >
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-pink-600/30 hover:bg-pink-600/50 border border-pink-400/40 text-rose-100 text-sm font-medium transition-all shadow-md group-hover:border-pink-300">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Chạm để mở quà 🎁</span>
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
};
