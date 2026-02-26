import { useState, useEffect } from 'react';

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'exit'>('loading');

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerating progress
        const increment = prev < 30 ? 2 : prev < 60 ? 3 : prev < 85 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setPhase('reveal'), 400);
      setTimeout(() => setPhase('exit'), 1400);
      setTimeout(() => onFinish(), 2200);
    }
  }, [progress, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700 ${
        phase === 'exit' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy-deep">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 splash-grid opacity-[0.04]" />

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="splash-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 8 + 6}s`,
            }}
          />
        ))}

        {/* Radial glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[120px] splash-breathe" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-navy-mid/30 blur-[80px] splash-breathe-delayed" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-accent/[0.03] blur-[100px] splash-breathe" />

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#3eaf71" strokeWidth="0.5" className="splash-line-h" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#3eaf71" strokeWidth="0.5" className="splash-line-v" />
          <circle cx="50%" cy="50%" r="150" stroke="#3eaf71" strokeWidth="0.5" fill="none" className="splash-circle-expand" />
          <circle cx="50%" cy="50%" r="250" stroke="#23294b" strokeWidth="0.5" fill="none" className="splash-circle-expand-delayed" />
          <circle cx="50%" cy="50%" r="350" stroke="#3eaf71" strokeWidth="0.3" fill="none" className="splash-circle-expand-more-delayed" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center">
        {/* Logo container with animated ring */}
        <div className="relative mb-8">
          {/* Outer spinning ring */}
          <div className="absolute -inset-6 rounded-full splash-ring-outer">
            <svg className="w-full h-full" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r="76"
                fill="none"
                stroke="url(#ringGradient)"
                strokeWidth="1"
                strokeDasharray="8 12"
                className="splash-spin-slow"
              />
              <defs>
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3eaf71" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#23294b" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3eaf71" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Inner spinning ring (reverse) */}
          <div className="absolute -inset-3 rounded-full">
            <svg className="w-full h-full" viewBox="0 0 140 140">
              <circle
                cx="70"
                cy="70"
                r="66"
                fill="none"
                stroke="url(#ringGradient2)"
                strokeWidth="1.5"
                strokeDasharray="4 8"
                className="splash-spin-reverse"
              />
              <defs>
                <linearGradient id="ringGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3eaf71" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#5cc98d" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Logo with glow */}
          <div
            className={`relative w-28 h-28 rounded-full bg-gradient-to-br from-navy to-navy-deep flex items-center justify-center shadow-2xl transition-all duration-700 ${
              phase === 'reveal' ? 'splash-logo-pulse' : ''
            }`}
          >
            {/* Logo glow behind */}
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl splash-breathe" />

            {/* Hexagonal border accent */}
            <div className="absolute inset-[3px] rounded-full border border-accent/30" />
            <div className="absolute inset-[6px] rounded-full border border-navy-mid/50" />

            {/* Logo image */}
            <img
              src="assets/img/logo/logo.png"
              alt="APS Logo"
              className="w-16 h-16 object-contain relative z-10 splash-logo-entrance"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div
              className="w-16 h-16 hidden items-center justify-center relative z-10"
            >
              <span className="text-3xl font-bold text-accent">APS</span>
            </div>
          </div>
        </div>

        {/* Company name with staggered letter animation */}
        <div className="mb-2 overflow-hidden">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider splash-title">
            {'PT ABADI PRIMAJAYA'.split('').map((char, i) => (
              <span
                key={i}
                className="inline-block splash-letter"
                style={{
                  animationDelay: `${0.6 + i * 0.04}s`,
                  color: char === ' ' ? 'transparent' : undefined,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>

        <div className="overflow-hidden mb-8">
          <h2 className="text-lg md:text-xl font-light tracking-[0.3em] splash-subtitle">
            {'SEJAHTERA'.split('').map((char, i) => (
              <span
                key={i}
                className="inline-block splash-letter-green"
                style={{ animationDelay: `${1.2 + i * 0.05}s` }}
              >
                {char}
              </span>
            ))}
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-white/40 text-xs md:text-sm tracking-[0.2em] uppercase mb-10 splash-tagline">
          General Contractor & Supplier
        </p>

        {/* Progress bar */}
        <div className="w-64 md:w-80 relative">
          {/* Progress track */}
          <div className="h-[2px] bg-white/[0.08] rounded-full overflow-hidden relative">
            {/* Progress fill */}
            <div
              className="h-full rounded-full transition-all duration-100 ease-out relative"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #23294b, #3eaf71, #5cc98d)',
              }}
            >
              {/* Glow tip */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full blur-md" />
              {/* Shimmer effect */}
              <div className="absolute inset-0 splash-shimmer" />
            </div>
          </div>

          {/* Progress details */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase splash-fade-in" style={{ animationDelay: '0.8s' }}>
              Loading
            </span>
            <span
              className="text-accent/80 text-xs font-mono tabular-nums splash-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              {progress}%
            </span>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  progress > (i + 1) * 25
                    ? 'bg-accent scale-100'
                    : progress > i * 25
                    ? 'bg-accent/50 scale-110 splash-dot-pulse'
                    : 'bg-white/10 scale-100'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Ready state message */}
        {phase === 'reveal' && (
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 splash-reveal-text">
            <span className="text-accent/60 text-xs tracking-[0.3em] uppercase">Welcome</span>
          </div>
        )}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l-[1px] border-t-[1px] border-accent/20 splash-corner-tl" />
      <div className="absolute top-6 right-6 w-12 h-12 border-r-[1px] border-t-[1px] border-accent/20 splash-corner-tr" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-l-[1px] border-b-[1px] border-accent/20 splash-corner-bl" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r-[1px] border-b-[1px] border-accent/20 splash-corner-br" />

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px]">
        <div
          className="h-full bg-gradient-to-r from-transparent via-accent/40 to-transparent transition-all duration-300"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>
    </div>
  );
}
