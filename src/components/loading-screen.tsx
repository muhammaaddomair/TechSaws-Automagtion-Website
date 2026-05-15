"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const progressTimer = window.setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          window.clearInterval(progressTimer);
          window.setTimeout(() => setIsVisible(false), 350);
          return 100;
        }

        return Math.min(value + 4, 100);
      });
    }, 35);

    return () => window.clearInterval(progressTimer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-500">
      <div className="mb-8 flex flex-col items-center gap-4">
        <span className="relative flex size-20 overflow-hidden rounded-2xl bg-black ring-1 ring-white/15">
          <Image
            src="/techsaw-logo.jpeg"
            alt="Techsaws logo"
            width={80}
            height={80}
            priority
            className="object-cover"
          />
        </span>
        <span className="text-sm font-extrabold tracking-[0.32em] text-white/80">
          TECHSAWS
        </span>
      </div>

      <div className="mb-4 text-2xl font-bold uppercase tracking-widest">
        Loading Assets
      </div>
      <div className="h-2 w-64 overflow-hidden rounded-full bg-white/20">
        <div
          className="h-full rounded-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-3 font-mono text-sm text-white/60">{progress}%</div>
    </div>
  );
}
