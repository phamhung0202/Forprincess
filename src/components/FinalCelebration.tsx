import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, RotateCcw, MailOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { greetingConfig } from '../config/greeting';
import { sfx } from '../utils/soundEffects';

interface FinalCelebrationProps {
  onReplayFireworks: () => void;
  onReadAgain: () => void;
}

export const FinalCelebration: React.FC<FinalCelebrationProps> = ({
  onReplayFireworks,
  onReadAgain,
}) => {
  useEffect(() => {
    // Elegant celebratory burst
    sfx.playSparkle();
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f472b6', '#fb7185', '#fde047', '#fbcfe8'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f472b6', '#fb7185', '#fde047', '#fbcfe8'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      transition={{ duration: 0.8 }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 text-center"
    >
      {/* Dedicated ambient background glow lifted 10-15% for the final celebration screen */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[46rem] h-[46rem] bg-pink-500/22 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-purple-600/25 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        {/* Floating Real Portrait of Thiên Phúc (thienphuc3) - Enlarged by 15% with rich decorative sparkles */}
        <motion.div
          animate={{
            y: [-5, 5, -5],
            scale: [1, 1.025, 1],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative my-4 sm:my-5"
        >
          {/* --- DECORATIVE SPARKLES & STARS LAYER (Leaving face unobstructed) --- */}
          {/* 1. Large 4-point glowing stars */}
          {/* Top-Right Star */}
          <div className="absolute -top-4 -right-4 text-amber-200 z-20 pointer-events-none animate-pulse">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">
              <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
            </svg>
          </div>
          {/* Top-Left Star */}
          <div className="absolute -top-3 -left-4 text-pink-300 z-20 pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]">
              <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" />
            </svg>
          </div>
          {/* Mid-Left Star */}
          <div className="absolute top-1/2 -left-6 -translate-y-1/2 text-rose-300 z-20 pointer-events-none animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-[0_0_6px_rgba(251,113,133,0.7)]">
              <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" />
            </svg>
          </div>
          {/* Lower-Right Star */}
          <div className="absolute bottom-1 -right-5 text-amber-100 z-20 pointer-events-none animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1.2s' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-[0_0_8px_rgba(254,240,138,0.7)]">
              <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
            </svg>
          </div>

          {/* 2. Medium stars & Lucide Sparkles */}
          {/* Top Center-Right Sparkle */}
          <Sparkles className="absolute -top-6 right-8 w-5 h-5 text-pink-200 z-20 pointer-events-none animate-bounce" style={{ animationDuration: '3.5s' }} />
          {/* Lower-Left Sparkle */}
          <Sparkles className="absolute -bottom-3 -left-2 w-5 h-5 text-purple-300 z-20 pointer-events-none animate-pulse" style={{ animationDuration: '2.8s', animationDelay: '0.7s' }} />
          {/* Mid-Right Star */}
          <div className="absolute top-1/3 -right-5 text-pink-200 z-20 pointer-events-none animate-ping" style={{ animationDuration: '4s' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
            </svg>
          </div>
          {/* Bottom Center Sparkle */}
          <div className="absolute -bottom-4 left-1/3 text-amber-200 z-20 pointer-events-none animate-pulse" style={{ animationDuration: '2s' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" />
            </svg>
          </div>

          {/* 3. Small twinkling micro-dots & glowing particles */}
          <div className="absolute -top-2 left-6 w-2 h-2 rounded-full bg-pink-300/80 blur-[0.5px] animate-ping" style={{ animationDuration: '2.2s' }} />
          <div className="absolute top-8 -left-3 w-1.5 h-1.5 rounded-full bg-amber-200/90 blur-[0.5px] animate-pulse" style={{ animationDuration: '1.8s' }} />
          <div className="absolute bottom-6 -right-2 w-2 h-2 rounded-full bg-purple-200/80 blur-[0.5px] animate-ping" style={{ animationDuration: '3.2s', animationDelay: '1s' }} />
          <div className="absolute -bottom-2 right-8 w-1.5 h-1.5 rounded-full bg-rose-300/85 blur-[0.5px] animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.4s' }} />
          <div className="absolute top-2 -right-1 w-1.5 h-1.5 rounded-full bg-pink-200/90 blur-[0.5px] animate-pulse" style={{ animationDuration: '2.6s' }} />
          <div className="absolute -top-5 left-1/3 w-1 h-1 rounded-full bg-white/90 animate-ping" style={{ animationDuration: '1.5s' }} />

          {/* Soft outer glow */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-pink-500/40 via-rose-400/35 to-purple-600/45 rounded-full blur-2xl pointer-events-none animate-pulse-halo" />

          {/* Portrait circular frame with delicate pink border (enlarged by 15%: w-36 sm:w-48 md:w-52) */}
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full p-1 sm:p-1.5 bg-gradient-to-tr from-pink-300/85 via-rose-400/65 to-purple-400/85 shadow-[0_15px_40px_rgba(219,39,119,0.5)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#24062c] ring-2 ring-pink-300/60">
              <img
                src="/images/thienphuc3.jpg"
                alt="Thiên Phúc"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/image/thienphuc3.jpg';
                  }
                }}
                className="w-full h-full object-cover object-center select-none pointer-events-none"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Headline: THIÊN PHÚC with soft, elegant, romantic cursive font */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-3 my-2"
        >
          <h1 className="font-romantic text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-pink-200 to-rose-200 leading-tight tracking-wide drop-shadow-[0_4px_18px_rgba(244,114,182,0.45)]">
            {greetingConfig.final.headline}
          </h1>

          {/* Glowing divider ornament */}
          <div className="flex items-center justify-center gap-3 py-1">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-pink-400" />
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-pink-400" />
          </div>

          {/* Supporting Message */}
          <p className="max-w-xl mx-auto text-rose-100/90 text-sm sm:text-base md:text-lg leading-relaxed font-sans-clean font-light px-4">
            {greetingConfig.final.supportingMessage}
          </p>
        </motion.div>

        {/* Two Action Buttons: THỬ KHOẢNH KHẮC DIỆU KỲ & ĐỌC LẠI HỘP THƯ */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6"
        >
          {/* Button 1: Replay Fireworks */}
          <button
            onClick={() => {
              sfx.playSparkle();
              onReplayFireworks();
            }}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase text-white shadow-lg shadow-pink-600/30 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 active:scale-95 overflow-hidden focus:outline-none focus:ring-4 focus:ring-pink-400/40 cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 group-hover:from-pink-500 group-hover:via-rose-400 group-hover:to-purple-500 transition-all duration-300"></span>
            <RotateCcw className="relative z-10 w-4 h-4 text-amber-200 group-hover:-rotate-90 transition-transform duration-300" />
            <span className="relative z-10">{greetingConfig.final.replayButton}</span>
          </button>

          {/* Button 2: Read Again Letter */}
          <button
            onClick={() => {
              sfx.playSparkle();
              onReadAgain();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-xs sm:text-sm tracking-wider uppercase text-rose-100 bg-pink-950/60 hover:bg-pink-900/60 border border-pink-400/40 hover:border-pink-300 transition-all duration-300 shadow-md hover:shadow-pink-500/20 active:scale-95 focus:outline-none focus:ring-4 focus:ring-pink-400/30 cursor-pointer"
          >
            <MailOpen className="w-4 h-4 text-pink-300" />
            <span>{greetingConfig.final.readAgainButton}</span>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};
