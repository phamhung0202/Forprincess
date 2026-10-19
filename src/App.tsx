import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ParticleBackground } from './components/ParticleBackground';
import { MusicToggle } from './components/MusicToggle';
import { WelcomeQuiz } from './components/WelcomeQuiz';
import { HeroSection } from './components/HeroSection';
import { GreetingLetter } from './components/GreetingLetter';
import { HeartFireworks } from './components/HeartFireworks';
import { FinalCelebration } from './components/FinalCelebration';
import { greetingConfig } from './config/greeting';

// Stage state machine: quiz -> hero (pink flower) -> letter -> fireworks (portrait) -> final
type Stage = 'quiz' | 'hero' | 'letter' | 'fireworks' | 'final';

export const App: React.FC = () => {
  const [currentStage, setCurrentStage] = useState<Stage>('quiz');

  return (
    <div className="relative min-h-screen w-full bg-[#180424] overflow-x-hidden selection:bg-pink-500 selection:text-white">
      {/* 1. Global Ambient Floating Petals & Particle Background */}
      <ParticleBackground />

      {/* 2. Audio & Sound Effects Controller (Off by default as required) */}
      <MusicToggle audioUrl={greetingConfig.music.bgmUrl} />

      {/* 3. Main Stage Container with Seamless AnimatePresence Transitions */}
      <main className="relative z-10 w-full min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {currentStage === 'quiz' && (
            <WelcomeQuiz key="quiz" onContinue={() => setCurrentStage('hero')} />
          )}

          {currentStage === 'hero' && (
            <HeroSection key="hero" onStart={() => setCurrentStage('letter')} />
          )}

          {currentStage === 'letter' && (
            <GreetingLetter
              key="letter"
              onMagicClick={() => setCurrentStage('fireworks')}
            />
          )}

          {currentStage === 'fireworks' && (
            <HeartFireworks
              key="fireworks"
              onComplete={() => setCurrentStage('final')}
            />
          )}

          {currentStage === 'final' && (
            <FinalCelebration
              key="final"
              onReplayFireworks={() => setCurrentStage('fireworks')}
              onReadAgain={() => setCurrentStage('letter')}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
