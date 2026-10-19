import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: 'petal' | 'star' | 'circle';
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle color palettes: soft rose, pale blush, gold, white sparkle
    const petalColors = [
      'rgba(244, 114, 182, ',  // Pink-400
      'rgba(251, 113, 133, ',  // Rose-400
      'rgba(249, 168, 212, ',  // Pink-300
      'rgba(253, 164, 175, ',  // Rose-300
      'rgba(254, 205, 211, ',  // Rose-200
    ];

    const particleCount = Math.min(50, Math.floor(width / 25));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const isPetal = Math.random() > 0.35;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isPetal ? Math.random() * 9 + 6 : Math.random() * 3 + 1.5,
        speedY: isPetal ? Math.random() * 0.8 + 0.4 : Math.random() * 0.4 + 0.2,
        speedX: Math.sin(Math.random() * Math.PI * 2) * 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.6 + 0.2,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        type: isPetal ? 'petal' : Math.random() > 0.5 ? 'star' : 'circle',
      });
    }

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p) => {
          p.y += p.speedY;
          p.x += p.speedX + Math.sin(p.y * 0.005) * 0.3;
          p.rotation += p.rotationSpeed;

          // Wrap around edges
          if (p.y > height + 20) {
            p.y = -20;
            p.x = Math.random() * width;
          }
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);

          if (p.type === 'petal') {
            // Draw delicate flower petal
            ctx.beginPath();
            ctx.fillStyle = `${p.color}${p.opacity})`;
            ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
            ctx.fill();
            // Tiny petal highlight
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 0.4})`;
            ctx.lineWidth = 0.6;
            ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 0.5);
            ctx.stroke();
          } else if (p.type === 'star') {
            // Little sparkling diamond
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 235, 180, ${p.opacity})`;
            const r = p.size;
            ctx.moveTo(0, -r);
            ctx.quadraticCurveTo(0, 0, r, 0);
            ctx.quadraticCurveTo(0, 0, 0, r);
            ctx.quadraticCurveTo(0, 0, -r, 0);
            ctx.quadraticCurveTo(0, 0, 0, -r);
            ctx.fill();
          } else {
            // Soft floating glowing dot
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 215, 230, ${p.opacity * 0.8})`;
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep purple & plum gradient backdrops (visibly lightened 8-12% for rich romantic luminance) */}
      <div className="absolute inset-0 bg-radial-[circle_at_50%_15%] from-[#5c196b]/70 via-[#320a44]/85 to-[#160322]" />
      
      {/* Subtle, diffused central ambient purple-pink glow behind the central content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-pink-500/18 rounded-full blur-[140px] pointer-events-none" />

      {/* Soft glowing ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-pink-600/18 rounded-full blur-[120px] pointer-events-none animate-pulse-halo" />
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-purple-600/22 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-500/16 rounded-full blur-[110px] pointer-events-none" />

      {/* Floating Canvas Petals & Sparkles */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
};
