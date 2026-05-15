"use client";

import { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  age: number;
  force: number;
}

const blobs = [
  { rgb: "238, 54, 34", alpha: 0.88, r: 0.34, sx: 0.35, sy: 0.43, ox: 0.17 },
  { rgb: "132, 8, 18", alpha: 0.72, r: 0.42, sx: 0.58, sy: 0.27, ox: 1.6 },
  { rgb: "255, 89, 44", alpha: 0.55, r: 0.28, sx: 0.71, sy: 0.64, ox: 3.2 },
  { rgb: "12, 20, 54", alpha: 0.95, r: 0.46, sx: 0.2, sy: 0.76, ox: 4.5 },
  { rgb: "219, 27, 37", alpha: 0.58, r: 0.3, sx: 0.82, sy: 0.18, ox: 5.1 },
];

export function LiquidHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationId = 0;
    const start = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const addRipple = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const last = lastPointRef.current;
      const distance = last ? Math.hypot(x - last.x, y - last.y) : 0;

      if (last && distance < 3) return;

      lastPointRef.current = { x, y };
      ripplesRef.current.push({
        x,
        y,
        age: 0,
        force: Math.min(1, 0.18 + distance / 180),
      });

      if (ripplesRef.current.length > 18) {
        ripplesRef.current.splice(0, ripplesRef.current.length - 18);
      }
    };

    const drawGrain = (time: number) => {
      ctx.globalCompositeOperation = "overlay";
      ctx.globalAlpha = 0.08;

      for (let i = 0; i < 1200; i++) {
        const x = (Math.sin(i * 92.37 + time * 0.7) * 43758.54) % 1;
        const y = (Math.sin(i * 37.21 + time * 0.45) * 24634.63) % 1;
        const alpha = 0.18 + ((i * 17) % 30) / 100;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fillRect(Math.abs(x) * width, Math.abs(y) * height, 1, 1);
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const draw = () => {
      const time = (performance.now() - start) / 1000;

      const base = ctx.createLinearGradient(0, 0, width, height);
      base.addColorStop(0, "#050711");
      base.addColorStop(0.46, "#090d25");
      base.addColorStop(1, "#02040a");
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "screen";
      blobs.forEach((blob, index) => {
        const ripplePull = ripplesRef.current.reduce(
          (acc, ripple) => {
            const life = Math.max(0, 1 - ripple.age / 80);
            const dx = ripple.x / width - blob.sx;
            const dy = ripple.y / height - blob.sy;
            acc.x += dx * life * ripple.force * 0.08;
            acc.y += dy * life * ripple.force * 0.08;
            return acc;
          },
          { x: 0, y: 0 }
        );

        const x =
          width *
          (blob.sx +
            Math.sin(time * (0.16 + index * 0.025) + blob.ox) * 0.16 +
            ripplePull.x);
        const y =
          height *
          (blob.sy +
            Math.cos(time * (0.19 + index * 0.02) + blob.ox) * 0.18 +
            ripplePull.y);
        const radius = Math.max(width, height) * blob.r;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(${blob.rgb}, ${blob.alpha})`);
        gradient.addColorStop(0.42, `rgba(${blob.rgb}, ${blob.alpha * 0.45})`);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "lighter";
      ripplesRef.current.forEach((ripple) => {
        const life = Math.max(0, 1 - ripple.age / 80);
        const radius = (1 - life) * 180 + 28;
        const gradient = ctx.createRadialGradient(
          ripple.x,
          ripple.y,
          0,
          ripple.x,
          ripple.y,
          radius
        );
        gradient.addColorStop(0, `rgba(255,255,255,${0.16 * life})`);
        gradient.addColorStop(0.35, `rgba(255,68,34,${0.24 * life})`);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ripple.age += 1.25;
      });

      ripplesRef.current = ripplesRef.current.filter((ripple) => ripple.age < 80);

      ctx.globalCompositeOperation = "multiply";
      const vignette = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        Math.min(width, height) * 0.2,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.74
      );
      vignette.addColorStop(0, "rgba(255,255,255,1)");
      vignette.addColorStop(1, "rgba(0,0,0,0.54)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      drawGrain(time);
      animationId = window.requestAnimationFrame(draw);
    };

    resize();
    animationId = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    const handlePointerMove = (event: PointerEvent) => {
      addRipple(event.clientX, event.clientY);
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-30 h-full w-full"
    />
  );
}
