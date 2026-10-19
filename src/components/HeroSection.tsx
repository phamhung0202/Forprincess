import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { SoftPinkLily } from './SoftPinkLily';
import { greetingConfig } from '../config/greeting';
import { sfx } from '../utils/soundEffects';

interface HeroSectionProps {
  onStart: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStart }) => {
  const handleStart = () => {
    sfx.playSparkle();
    onStart();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.8 } }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* Top elegant pill badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-950/60 border border-pink-500/30 text-pink-300 text-xs sm:text-sm font-medium tracking-widest uppercase mb-8 shadow-inner shadow-pink-500/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>{greetingConfig.hero.badge}</span>
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/40" />
        </motion.div>

        {/* Central Animated Soft Pink Lily Flower Illustration */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, type: 'spring' }}
          className="my-2 sm:my-4"
        >
          <SoftPinkLily />
        </motion.div>

        {/* Small Heading: 20.10 – GỬI EM YÊU */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="space-y-3"
        >
          <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl text-rose-100 font-semibold tracking-wide glow-pink-text">
            {greetingConfig.hero.date ? `${greetingConfig.hero.date} – ${greetingConfig.hero.tagline}` : greetingConfig.hero.tagline}
            {greetingConfig.recipientName && (
              <span className="block mt-1 text-pink-300 font-romantic text-3xl sm:text-4xl md:text-5xl font-bold">
                {greetingConfig.recipientName}
              </span>
            )}
          </h2>

          {/* Vietnamese romantic introductory sentence */}
          <p className="max-w-md sm:max-w-lg mx-auto text-rose-200/85 text-sm sm:text-base font-light leading-relaxed px-4 pt-1">
            {greetingConfig.hero.description}
          </p>
        </motion.div>

        {/* Glowing rounded button: MỞ HỘP THƯ & MÓN QUÀ */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10"
        >
          <button
            onClick={handleStart}
            onMouseEnter={() => sfx.playSparkle()}
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full font-medium text-sm sm:text-base tracking-wider text-white overflow-hidden transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-400/50 active:scale-95 shadow-[0_0_30px_rgba(236,72,153,0.45)] hover:shadow-[0_0_50px_rgba(244,114,182,0.8)]"
          >
            {/* Gradient background with shimmer */}
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 group-hover:from-pink-500 group-hover:via-rose-400 group-hover:to-purple-500 transition-all duration-500"></span>
            
            {/* Shimmer sweep animation */}
            <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out"></span>

            <span className="relative z-10 flex items-center gap-2.5 font-semibold">
              <Sparkles className="w-5 h-5 text-amber-200 animate-pulse" />
              <span>{greetingConfig.hero.ctaButton}</span>
              <span className="text-lg">💌</span>
            </span>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};
