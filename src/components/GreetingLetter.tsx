import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { greetingConfig } from '../config/greeting';
import { sfx } from '../utils/soundEffects';

interface GreetingLetterProps {
  onMagicClick: () => void;
}

export const GreetingLetter: React.FC<GreetingLetterProps> = ({ onMagicClick }) => {
  const [isReady] = useState(true);

  const handleMagic = () => {
    sfx.playSparkle();
    onMagicClick();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.7 } }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-10 sm:py-16"
    >
      {/* Decorative Outer Envelope Frame */}
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Soft Background Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 via-rose-400/20 to-purple-600/20 rounded-3xl blur-2xl pointer-events-none" />

        {/* The Vintage Cream/Pale Blush Letter Card */}
        <div className="relative glass-card-light rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-[#3b1227] shadow-[0_25px_60px_-15px_rgba(219,39,119,0.35)] border border-pink-200/80 overflow-hidden">
          {/* Subtle watermark / calligraphy background decoration */}
          <div className="absolute right-3 -bottom-10 select-none pointer-events-none text-pink-900/5 font-cursive-calligraphy text-8xl sm:text-9xl">
            October 20
          </div>
          {/* Subtle watermark lily decoration */}
          <div className="absolute left-3 top-3 select-none pointer-events-none opacity-[0.08] text-pink-900 w-24 h-24">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              <path d="M50 55 C44 40 40 22 50 8 C60 22 56 40 50 55 Z" fill="currentColor" />
              <path d="M50 55 C35 48 18 36 12 25 C24 23 41 38 50 55 Z" fill="currentColor" />
              <path d="M50 55 C65 48 82 36 88 25 C76 23 59 38 50 55 Z" fill="currentColor" />
              <path d="M50 55 C38 60 25 66 18 72 C26 75 41 68 50 55 Z" fill="currentColor" />
              <path d="M50 55 C62 60 75 66 82 72 C74 75 59 68 50 55 Z" fill="currentColor" />
              <path d="M50 55 C42 48 38 30 50 18 C62 30 58 48 50 55 Z" fill="currentColor" />
              <circle cx="50" cy="54" r="6" fill="#f472b6" />
            </svg>
          </div>

          {/* Corner Floral Ornaments */}
          <div className="absolute top-3 right-3 text-pink-400/40 select-none">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <path d="M40 0 C25 5, 5 25, 0 40 C10 25, 25 10, 40 0 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute bottom-3 left-3 text-pink-400/40 select-none rotate-180">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <path d="M40 0 C25 5, 5 25, 0 40 C10 25, 25 10, 40 0 Z" fill="currentColor" />
            </svg>
          </div>

          {/* Header Subtitle */}
          {greetingConfig.letter.subtitle && (
            <div className="text-center mb-4 sm:mb-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-pink-700 bg-pink-100/80 rounded-full border border-pink-200">
                {greetingConfig.letter.subtitle}
              </span>
            </div>
          )}

          {/* Letter Title with Soft Pink Lily */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="font-romantic text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-snug tracking-normal">
              {greetingConfig.letter.title}
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mt-3"></div>
          </div>

          {/* Letter Body Content */}
          <div className="space-y-4 sm:space-y-5 text-black font-romantic text-lg sm:text-xl md:text-[1.35rem] leading-relaxed font-semibold text-justify sm:text-left">
            {greetingConfig.letter.paragraphs.map((para, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * idx }}
                className="indent-4 sm:indent-6"
              >
                {/* Highlight recipient name if present in text */}
                {para}
              </motion.p>
            ))}
          </div>

          {/* Closing & Warm Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8 pt-6 border-t border-pink-200/60 flex flex-col items-center sm:items-end text-right space-y-1"
          >
            <p className="font-romantic text-xl sm:text-2xl md:text-[1.5rem] font-bold text-black">
              {greetingConfig.letter.closing}
            </p>
            {greetingConfig.senderName && (
              <p className="font-romantic text-lg sm:text-xl text-black">
                {greetingConfig.letter.senderSign} <span className="font-bold text-black">{greetingConfig.senderName}</span>
              </p>
            )}
          </motion.div>

          {/* Magic Button CTA */}
          <div className="mt-8 sm:mt-10 pt-4 flex flex-col items-center justify-center">
            <button
              onClick={handleMagic}
              onMouseEnter={() => sfx.playSparkle()}
              disabled={!isReady}
              className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase text-white shadow-lg shadow-pink-600/30 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 active:scale-95 overflow-hidden focus:outline-none focus:ring-4 focus:ring-pink-400/50"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 group-hover:from-pink-500 group-hover:via-rose-400 group-hover:to-purple-500 transition-all duration-300"></span>
              <span className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out"></span>

              <Sparkles className="relative z-10 w-4 h-4 text-amber-200 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="relative z-10">{greetingConfig.letter.magicButton}</span>
              <Heart className="relative z-10 w-4 h-4 text-white fill-white/80 group-hover:scale-125 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
