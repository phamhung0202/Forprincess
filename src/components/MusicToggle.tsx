import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { sfx } from '../utils/soundEffects';

interface MusicToggleProps {
  audioUrl?: string;
}

export const MusicToggle: React.FC<MusicToggleProps> = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.loop = true;
      audio.volume = 0.5;

      audio.addEventListener('error', () => {
        setAudioError(true);
      });

      audioRef.current = audio;

      return () => {
        audio.pause();
        audio.src = '';
      };
    }
  }, [audioUrl]);

  const toggleSound = () => {
    sfx.playSparkle();

    if (isPlaying) {
      if (audioRef.current && !audioError) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      sfx.setMuted(true);
    } else {
      sfx.setMuted(false);
      if (audioRef.current && !audioError) {
        audioRef.current.play().catch(() => {
          setAudioError(true);
        });
      }
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
      <button
        onClick={toggleSound}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-purple-950/70 border border-pink-500/30 text-rose-200 text-xs font-medium backdrop-blur-md hover:bg-pink-900/40 hover:border-pink-400/60 hover:text-white transition-all duration-300 shadow-lg hover:shadow-pink-500/20 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-pink-400"
        title={isPlaying ? "Tắt âm thanh" : "Bật âm thanh & nhạc nền"}
      >
        <span className="relative flex h-2 w-2">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-pink-400' : 'bg-zinc-500'}`}></span>
        </span>

        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-pink-300 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Âm thanh: Bật</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-zinc-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Âm thanh: Tắt</span>
          </>
        )}
        <Music className="w-3.5 h-3.5 text-pink-400/60" />
      </button>
    </div>
  );
};
