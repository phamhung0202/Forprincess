// Web Audio API synthesizer for romantic chimes and fireworks sound effects
// Guaranteed to work client-side without any broken audio files!

class SoundEffectsService {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  // Soft sparkle / magical chime (reduced by ~33% for gentle click & interactive audio)
  public playSparkle() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51]; // C5, E5, G5, C6, E6
      
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.6);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.65);
      });
    } catch {
      // Audio fallback silent
    }
  }

  // Gift box / confirm button open sound: swoosh + happy chime (reduced by ~33%)
  public playGiftOpen() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Soft swoosh/pop
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(450, now + 0.15);

      gain.gain.setValueAtTime(0.10, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);

      // Chimes
      setTimeout(() => this.playSparkle(), 100);
    } catch {
      // Audio fallback silent
    }
  }

  // Firework launch & gentle burst
  public playFirework() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Whistle up
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.35);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);

      // Burst noise
      setTimeout(() => {
        if (!this.ctx || this.isMuted) return;
        const bNow = this.ctx.currentTime;
        const burstOsc = this.ctx.createOscillator();
        const burstGain = this.ctx.createGain();

        burstOsc.type = 'triangle';
        burstOsc.frequency.setValueAtTime(120, bNow);
        burstOsc.frequency.exponentialRampToValueAtTime(40, bNow + 0.4);

        burstGain.gain.setValueAtTime(0.18, bNow);
        burstGain.gain.exponentialRampToValueAtTime(0.005, bNow + 0.45);

        burstOsc.connect(burstGain);
        burstGain.connect(this.ctx.destination);
        burstOsc.start(bNow);
        burstOsc.stop(bNow + 0.45);
      }, 350);
    } catch {
      // Audio fallback silent
    }
  }
}

export const sfx = new SoundEffectsService();
