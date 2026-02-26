import Logo from "../assets/img/logo/logo2.png";
import { useState, useEffect } from "react";

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "complete" | "exit">(
    "loading",
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = prev < 40 ? 3 : prev < 70 ? 2 : prev < 90 ? 3 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 35);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setPhase("complete"), 300);
      setTimeout(() => setPhase("exit"), 1000);
      setTimeout(() => onFinish(), 1600);
    }
  }, [progress, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-navy-deep transition-opacity duration-600 ${
        phase === "exit" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep to-navy opacity-100" />

      {/* Single subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[100px]" />

      {/* Content */}
      <div className="relative flex flex-col items-center px-6">
        {/* Logo */}
        <div className="mb-8 splash-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-navy border border-white/[0.08] flex items-center justify-center shadow-2xl">
            <img
              src={Logo}
              alt="APS Logo"
              className="w-28 md:w-32 h-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div className="hidden items-center justify-center">
              <span className="text-3xl font-bold text-accent">APS</span>
            </div>
          </div>
        </div>
        {/* Company Name */}
        <h1
          className="text-white text-xl md:text-2xl font-semibold tracking-wide mb-1 splash-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          PT Abadi Primajaya Sejahtera
        </h1>

        {/* Tagline */}
        <p
          className="text-white/40 text-xs md:text-sm tracking-[0.15em] uppercase mb-10 splash-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          General Contractor & Supplier
        </p>

        {/* Progress bar */}
        <div
          className="w-48 md:w-56 splash-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="h-[2px] bg-white/[0.08] rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/25 text-[10px] tracking-widest uppercase text-center mt-3">
            {phase === "complete" ? "Welcome" : "Loading"}
          </p>
        </div>
      </div>
    </div>
  );
}
