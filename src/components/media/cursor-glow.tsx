"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const layerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const dot = dotRef.current;
    if (!layer || !dot) {
      return;
    }

    let frame = 0;
    let targetX = layer.clientWidth * 0.5;
    let targetY = layer.clientHeight * 0.5;
    let currentX = targetX;
    let currentY = targetY;

    const render = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      if (
        Math.abs(targetX - currentX) > 0.1 ||
        Math.abs(targetY - currentY) > 0.1
      ) {
        frame = window.requestAnimationFrame(render);
        return;
      }

      frame = 0;
    };

    const startRender = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const moveDot = (event: PointerEvent) => {
      const bounds = layer.getBoundingClientRect();
      const isInside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      if (!isInside) {
        hideDot();
        return;
      }

      targetX = Math.min(Math.max(event.clientX - bounds.left, 0), bounds.width);
      targetY = Math.min(Math.max(event.clientY - bounds.top, 0), bounds.height);
      layer.style.setProperty("--cursor-opacity", "1");
      startRender();
    };

    const hideDot = () => {
      layer.style.setProperty("--cursor-opacity", "0");
    };

    dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    window.addEventListener("pointermove", moveDot, { passive: true });
    window.addEventListener("pointerleave", hideDot);

    return () => {
      window.removeEventListener("pointermove", moveDot);
      window.removeEventListener("pointerleave", hideDot);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="hero-cursor-layer pointer-events-none absolute inset-0 z-0"
    >
      <span ref={dotRef} className="hero-cursor-dot" />
    </div>
  );
}
