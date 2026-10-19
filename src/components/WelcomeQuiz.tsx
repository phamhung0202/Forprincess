import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import { sfx } from '../utils/soundEffects';

interface WelcomeQuizProps {
  onContinue: () => void;
}

const quizOptions = [
  { id: 1, text: "Thiên Phúc xinh đẹp 🌸" },
  { id: 2, text: "Thiên Phúc dễ thương 🎀" },
  { id: 3, text: "Thiên Phúc dịu dàng 🌸" },
  { id: 4, text: "Thiên Phúc là cô gái đặc biệt nhất ✨" },
];

export const WelcomeQuiz: React.FC<WelcomeQuizProps> = ({ onContinue }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSelect = (id: number) => {
    if (isConfirmed) return;
    sfx.playSparkle();
    setSelectedId(id);
  };

  const handleConfirm = () => {
    if (selectedId === null) return;
    sfx.playGiftOpen();
    setIsConfirmed(true);
  };

  const handleProceed = () => {
    sfx.playSparkle();
    onContinue();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.7 } }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12 text-center"
    >
      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        {/* Top Decorative Label */}
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-950/60 border border-pink-400/35 text-pink-300 text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-md"
        >
          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/40" />
          <span>♡ MỘT CÂU HỎI NHỎ DÀNH RIÊNG CHO EM ♡</span>
          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/40" />
        </motion.div>

        {/* Prominent Dual Image Showcase: Chibi illustration & Portrait */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full flex flex-row items-center justify-center gap-3 sm:gap-6 mb-6"
        >
          {/* Image 1: Chibi cute illustration */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/30 to-purple-600/30 rounded-2xl blur-md group-hover:blur-lg transition-all" />
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl p-1 bg-gradient-to-b from-pink-300/50 via-rose-400/30 to-purple-500/40 shadow-xl overflow-hidden bg-[#200527]">
              <img
                src="/images/thienphuc1.jpg"
                alt="Thiên Phúc Chibi"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.tried) {
                    target.dataset.tried = 'true';
                    target.src = '/image/thienphuc1.jpg';
                  }
                }}
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>
          </div>

          {/* Image 2: Actual portrait of Thiên Phúc */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/30 to-pink-500/30 rounded-2xl blur-md group-hover:blur-lg transition-all" />
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl p-1 bg-gradient-to-b from-rose-300/50 via-pink-400/30 to-purple-500/40 shadow-xl overflow-hidden bg-[#200527]">
              <img
                src="/images/thienphuc2.jpg"
                alt="Thiên Phúc"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.tried) {
                    target.dataset.tried = 'true';
                    target.src = '/image/thienphuc2.jpg';
                  }
                }}
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>
          </div>
        </motion.div>

        {/* Headings */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-1.5 mb-6"
        >
          <h2 className="font-serif-display text-2xl sm:text-3xl text-rose-100 font-bold tracking-wide glow-pink-text">
            Hãy chọn đáp án để xác nhận...
          </h2>
          <p className="text-pink-200/90 text-sm sm:text-base font-sans-clean font-medium">
            Bạn là Thiên Phúc như thế nào nhỉ? 🌸
          </p>
        </motion.div>

        {/* Interactive Single-Selection Quiz Cards & Result */}
        <AnimatePresence mode="wait">
          {!isConfirmed ? (
            <motion.div
              key="quiz-options"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full space-y-3"
            >
              {/* Radio-Style Selectable Cards */}
              <div className="grid grid-cols-1 gap-2.5 sm:gap-3 text-left">
                {quizOptions.map((opt) => {
                  const isSelected = selectedId === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleSelect(opt.id)}
                      className={`relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl cursor-pointer transition-all duration-300 select-none border ${
                        isSelected
                          ? 'bg-gradient-to-r from-pink-900/60 to-purple-900/60 border-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.35)] scale-[1.01]'
                          : 'bg-purple-950/40 hover:bg-purple-900/40 border-pink-500/25 hover:border-pink-400/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Custom Radio Button Indicator */}
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                            isSelected
                              ? 'border-pink-300 bg-pink-500 shadow-sm'
                              : 'border-pink-400/50 bg-black/20'
                          }`}
                        >
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>

                        <span
                          className={`text-sm sm:text-base font-medium transition-colors ${
                            isSelected ? 'text-white font-semibold' : 'text-rose-100/90'
                          }`}
                        >
                          {opt.text}
                        </span>
                      </div>

                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-pink-300 animate-pulse" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Confirmation Button (Disabled until an answer is selected) */}
              <div className="pt-4">
                <button
                  onClick={handleConfirm}
                  disabled={selectedId === null}
                  className={`relative inline-flex items-center justify-center gap-2.5 px-9 py-3.5 rounded-full font-semibold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-lg ${
                    selectedId !== null
                      ? 'bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 hover:from-pink-500 hover:via-rose-400 hover:to-purple-500 text-white shadow-pink-600/35 hover:shadow-pink-500/50 active:scale-95 cursor-pointer'
                      : 'bg-zinc-800/60 border border-zinc-700/50 text-zinc-400 cursor-not-allowed opacity-60'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>XÁC NHẬN ✨</span>
                </button>
              </div>
            </motion.div>
          ) : (
            /* Romantic Result Reveal */
            <motion.div
              key="quiz-result"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full relative glass-card-light rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-[#3b1227] shadow-[0_20px_50px_rgba(219,39,119,0.35)] border border-pink-300 space-y-4"
            >
              {/* Heading: Chính xác rồi! 💖 */}
              <div className="space-y-1">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#4a0e2e]">
                  Chính xác rồi! 💖
                </h3>
                <p className="font-romantic text-lg sm:text-xl text-pink-700 font-semibold">
                  Nhưng mà… đáp án này chưa đủ đâu nhé!
                </p>
              </div>

              {/* Main Result Revelation */}
              <p className="text-zinc-800 text-sm sm:text-base leading-relaxed font-sans-clean font-normal px-2">
                Thật ra, em chẳng cần phải chọn đâu, vì em vừa xinh đẹp, vừa dễ thương, vừa dịu dàng, lại còn đặc biệt theo cách riêng của mình nữa.
              </p>

              {/* Continuation Button */}
              <div className="pt-2">
                <button
                  onClick={handleProceed}
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase text-white shadow-lg shadow-pink-600/35 hover:shadow-pink-500/50 transition-all duration-300 active:scale-95 overflow-hidden cursor-pointer bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 hover:from-pink-500 hover:via-rose-400 hover:to-purple-500"
                >
                  <Sparkles className="w-4 h-4 text-amber-200 animate-spin" style={{ animationDuration: '5s' }} />
                  <span>TIẾP TỤC ĐẾN MÓN QUÀ 💝</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
