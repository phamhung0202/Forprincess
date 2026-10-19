import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { sfx } from '../utils/soundEffects';

interface HeartFireworksProps {
  onComplete: () => void;
}

interface FireworkRocket {
  x: number;
  y: number;
  targetY: number;
  speed: number;
  color: string;
  exploded: boolean;
}

interface SwarmParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
  angle: number;
  speed: number;
}

export const HeartFireworks: React.FC<HeartFireworksProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [stageText, setStageText] = useState("Điều kỳ diệu đang nở rộ...");
  const [revealProgress, setRevealProgress] = useState(0); // 0 (hidden/blurred) to 1 (sharp & clear)
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let isCancelled = false;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    // Initial celebratory launch sounds
    sfx.playFirework();
    setTimeout(() => sfx.playFirework(), 400);
    setTimeout(() => sfx.playFirework(), 800);

    // Rocket trails firing from bottom upwards
    const rockets: FireworkRocket[] = [
      { x: width * 0.32, y: height, targetY: height * 0.42, speed: 12, color: '#f472b6', exploded: false },
      { x: width * 0.5, y: height, targetY: height * 0.35, speed: 14, color: '#fde047', exploded: false },
      { x: width * 0.68, y: height, targetY: height * 0.44, speed: 12, color: '#fb7185', exploded: false },
    ];

    const particles: SwarmParticle[] = [];
    const centerX = width / 2;
    const centerY = height * 0.44;

    const colors = ['#f472b6', '#fb7185', '#fbcfe8', '#fde047', '#ffffff', '#e879f9', '#f43f5e'];

    // Generate orbiting / assembling magical particles surrounding the portrait
    const particleCount = Math.min(160, Math.floor(width / 5));
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 260 + 60;
      particles.push({
        x: centerX + Math.cos(angle) * dist,
        y: centerY + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 3.5 + 1.5,
        alpha: 0,
        angle,
        speed: (Math.random() * 0.02 + 0.01) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    let frameCount = 0;
    let fireworksExploded = false;
    let revealStartFrame = 0;

    const render = () => {
      frameCount++;

      // Velvet dark fade
      ctx.fillStyle = 'rgba(14, 2, 21, 0.22)';
      ctx.fillRect(0, 0, width, height);

      // 1. Ascending firework rockets
      if (!fireworksExploded) {
        let allDone = true;
        rockets.forEach((r) => {
          if (!r.exploded) {
            allDone = false;
            r.y -= r.speed;

            // Rocket spark
            ctx.beginPath();
            ctx.fillStyle = r.color;
            ctx.arc(r.x, r.y, 3.5, 0, Math.PI * 2);
            ctx.fill();

            // Trail
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(255, 230, 150, 0.5)';
            ctx.lineWidth = 1.5;
            ctx.moveTo(r.x, r.y);
            ctx.lineTo(r.x, r.y + 16);
            ctx.stroke();

            if (r.y <= r.targetY) {
              r.exploded = true;
              sfx.playSparkle();
            }
          }
        });

        if (allDone || frameCount > 50) {
          fireworksExploded = true;
          revealStartFrame = frameCount;
          setStageText("Em 100 điểm 💗✨🌷");
          sfx.playSparkle();
        }
      }

      // 2. Progressive portrait reveal (sync with particles)
      if (fireworksExploded && !isCancelled) {
        const elapsed = frameCount - revealStartFrame;
        // 0 to 1 over approx 120-140 frames (~2.2 seconds)
        const progress = Math.min(1, Math.max(0, elapsed / 130));
        setRevealProgress(progress);

        // Animate magical particles assembling and circling around the portrait
        particles.forEach((p, idx) => {
          if (p.alpha < 1) p.alpha += 0.035;

          p.angle += p.speed;
          // Radius contracts slightly as portrait sharpens, creating an assembling/encircling halo
          const baseRadius = 140 + (idx % 5) * 35;
          const currentRadius = baseRadius + (1 - progress) * 60;

          const targetX = centerX + Math.cos(p.angle) * currentRadius;
          const targetY = centerY + Math.sin(p.angle) * (currentRadius * 1.15);

          p.x += (targetX - p.x) * 0.08;
          p.y += (targetY - p.y) * 0.08;

          ctx.save();
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.fillStyle = p.color;
          // As portrait becomes sharp, particles softly reduce to a gentle glittering halo
          ctx.globalAlpha = p.alpha * (progress >= 1 ? 0.65 : 0.9);

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          // Diamond sparkle twinkle
          if (Math.random() > 0.97) {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
          }
          ctx.restore();
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();

    // Portrait reveal sequence:
    // ~0-1s rockets launch & burst
    // ~1-3.2s portrait smoothly sharpens & particles assemble
    // ~3.2-6.5s portrait stays beautifully sharp & clear to admire
    // at 6.5s transition smoothly to FinalCelebration
    const timer = setTimeout(() => {
      onComplete();
    }, 6500);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animId);
      clearTimeout(timer);
    };
  }, [onComplete]);

  // Compute CSS filter and opacity values based on revealProgress (0 to 1)
  const blurAmount = Math.max(0, (1 - revealProgress) * 22); // From 22px down to 0px (sharp)
  const imageOpacity = Math.min(1, Math.max(0.08, revealProgress * 1.1));
  const imageScale = 0.94 + revealProgress * 0.06; // From 0.94 to 1.0

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.9 } }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center select-none overflow-hidden bg-[#150420]/75 backdrop-blur-sm"
    >
      {/* Background canvas with fireworks and magical orbiting particles */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full pointer-events-none" />

      {/* Central Portrait Container */}
      <div className="relative z-50 flex flex-col items-center justify-center px-4 max-h-[85vh]">
        {/* Soft pink-purple halo glow behind her portrait */}
        <div
          className="absolute w-72 h-80 sm:w-88 sm:h-96 rounded-full bg-gradient-to-tr from-pink-500/25 via-rose-500/20 to-purple-600/30 blur-3xl pointer-events-none transition-opacity duration-1000"
          style={{
            opacity: 0.4 + revealProgress * 0.6,
            transform: `scale(${1 + revealProgress * 0.15})`,
          }}
        />

        {/* Real Portrait Frame */}
        <div
          className="relative max-w-[280px] sm:max-w-[340px] md:max-w-[370px] rounded-3xl p-1.5 sm:p-2 bg-gradient-to-b from-pink-300/40 via-rose-400/20 to-purple-500/30 shadow-[0_15px_45px_rgba(219,39,119,0.35)] transition-transform duration-700 ease-out"
          style={{
            transform: `scale(${imageScale})`,
            boxShadow: `0 20px 60px rgba(244, 114, 182, ${0.2 + revealProgress * 0.3})`,
          }}
        >
          {/* Inner frame wrapper with delicate border */}
          <div className="relative overflow-hidden rounded-[22px] sm:rounded-[26px] bg-[#1a0524] border border-pink-200/50">
            {/* The Actual Uploaded Photograph */}
            <img
              src="/images/ThienPhuc.jpg"
              alt="Thiên Phúc"
              onError={(e) => {
                // Fallback to /image/ThienPhuc.jpg if needed
                const target = e.currentTarget;
                if (!target.dataset.triedFallback) {
                  target.dataset.triedFallback = 'true';
                  target.src = '/image/ThienPhuc.jpg';
                } else {
                  setImageError(true);
                }
              }}
              className="w-full h-auto max-h-[52vh] sm:max-h-[58vh] object-cover sm:object-contain rounded-[20px] sm:rounded-[24px] transition-all duration-300 ease-out select-none pointer-events-none"
              style={{
                filter: `blur(${blurAmount}px)`,
                opacity: imageOpacity,
              }}
            />

            {/* Delicate inner vignette highlight */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[20px] sm:rounded-[24px] ring-1 ring-inset ring-white/20"
              style={{
                background: `radial-gradient(circle at 50% 50%, transparent 65%, rgba(16, 2, 23, ${0.4 * (1 - revealProgress)}) 100%)`,
              }}
            />

            {/* Error fallback message if image is somehow missing */}
            {imageError && (
              <div className="p-8 text-center text-rose-200 text-sm">
                <Heart className="w-8 h-8 mx-auto text-pink-400 mb-2" />
                <p>Thiên Phúc – Bông hoa đẹp nhất trong lòng anh ❤️</p>
              </div>
            )}
          </div>
        </div>

        {/* Romantic Caption underneath the portrait */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-5 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-pink-950/75 border border-pink-400/40 text-rose-100 font-romantic text-xl sm:text-2xl shadow-xl shadow-pink-500/25 glow-pink-text backdrop-blur-md">
            <span>{stageText}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
