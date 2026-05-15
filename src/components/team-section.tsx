"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const DAMPING = 0.9;
const GRAVITY = 3000;
const MASS = 1;

interface CardPhysicsState {
  angle: number;
  vel: number;
}

interface HangingIdCardProps {
  className?: string;
  name: string;
  role: string;
  badgeId: string;
  accentColor: string;
  ropeColor?: string;
  ropeLength?: number;
}

const teamMembers = [
  {
    name: "Ayesha Khan",
    role: "Market Strategist",
    badgeId: "TS-001",
    accentColor: "#e11d48",
  },
  {
    name: "Daniel Reed",
    role: "Client Advisor",
    badgeId: "TS-002",
    accentColor: "#111827",
  },
  {
    name: "Maya Torres",
    role: "Property Specialist",
    badgeId: "TS-003",
    accentColor: "#dc2626",
  },
];

function Lanyard({ length, color }: { length: number; color: string }) {
  return (
    <svg
      width="30"
      height={length}
      viewBox={`0 0 30 ${length}`}
      className="mx-auto block overflow-visible"
      aria-hidden="true"
    >
      <circle cx="15" cy="0" r="5" fill={color} />
      <path d={`M 13 0 L 10 ${length}`} stroke={color} strokeWidth="6" opacity="0.9" />
      <path d={`M 17 0 L 20 ${length}`} stroke={color} strokeWidth="6" opacity="0.9" />
      <rect x="10" y={length - 6} width="10" height="8" rx="2" fill="#94a3b8" />
      <circle cx="15" cy={length + 2} r="3" fill="#e2e8f0" />
    </svg>
  );
}

function HangingIdCard({
  className,
  name,
  role,
  badgeId,
  accentColor,
  ropeColor = "#4a5568",
  ropeLength = 112,
}: HangingIdCardProps) {
  const physRef = useRef<CardPhysicsState>({ angle: 0, vel: 0 });
  const rafRef = useRef<number | null>(null);
  const prevTimeRef = useRef<number | null>(null);
  const prevAngleRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragAngle0 = useRef(0);
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const tick = useCallback(
    (now: number) => {
      if (prevTimeRef.current === null) prevTimeRef.current = now;
      const dt = Math.min((now - prevTimeRef.current) / 1000, 0.05);
      prevTimeRef.current = now;

      const state = physRef.current;
      if (!isDraggingRef.current) {
        const length = ropeLength + 100;
        const torque =
          -(GRAVITY / length) * Math.sin(state.angle) -
          (DAMPING / MASS) * state.vel;

        state.vel += torque * dt;
        state.angle += state.vel * dt;
        setAngle(state.angle);

        if (Math.abs(state.angle) > 0.001 || Math.abs(state.vel) > 0.001) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          state.angle = 0;
          state.vel = 0;
          setAngle(0);
        }
      } else {
        if (dt > 0) state.vel = (state.angle - prevAngleRef.current) / dt;
        prevAngleRef.current = state.angle;
        rafRef.current = requestAnimationFrame(tick);
      }
    },
    [ropeLength]
  );

  const startPhysics = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    prevTimeRef.current = null;
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      event.currentTarget.setPointerCapture(event.pointerId);
      isDraggingRef.current = true;
      setIsDragging(true);
      dragStartX.current = event.clientX;
      dragAngle0.current = physRef.current.angle;
      prevAngleRef.current = physRef.current.angle;
      startPhysics();
    },
    [startPhysics]
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!isDraggingRef.current) return;
      const dx = event.clientX - dragStartX.current;
      const length = ropeLength + 100;
      const nextAngle = dragAngle0.current + dx / length;
      const clampedAngle = Math.max(-1.25, Math.min(1.25, nextAngle));
      physRef.current.angle = clampedAngle;
      setAngle(clampedAngle);
    },
    [ropeLength]
  );

  const handlePointerUp = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId);
    isDraggingRef.current = false;
    setIsDragging(false);
  }, []);

  const handleCardClick = useCallback(() => {
    if (
      Math.abs(physRef.current.vel) < 0.1 &&
      Math.abs(physRef.current.angle) < 0.05
    ) {
      physRef.current.vel = 4;
      startPhysics();
    }
  }, [startPhysics]);

  useEffect(() => {
    physRef.current.vel = 1.4;
    startPhysics();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [startPhysics]);

  return (
    <div
      className={cn("flex flex-col items-center select-none", className)}
      style={{ touchAction: "none" }}
    >
      <div
        className="relative z-10 size-3 rounded-full shadow-md"
        style={{ background: accentColor }}
      />
      <div
        className={cn(
          "flex flex-col items-center cursor-grab",
          isDragging && "cursor-grabbing"
        )}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onClick={handleCardClick}
        style={{
          transform: `rotate(${angle * (180 / Math.PI)}deg)`,
          transformOrigin: "top center",
          willChange: "transform",
          marginTop: "-6px",
        }}
      >
        <div className="pointer-events-none">
          <Lanyard length={ropeLength} color={ropeColor} />
        </div>

        <div className="pointer-events-none relative mt-[-2px] w-52 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">
          <div
            className="flex flex-col items-center gap-1 px-4 py-3"
            style={{
              background: `linear-gradient(135deg, ${accentColor} 0%, #ef4444 100%)`,
            }}
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/70">
              Techsaws
            </p>
            <div className="mt-1 flex size-14 items-center justify-center overflow-hidden rounded-xl bg-white/20 shadow-inner backdrop-blur-sm">
              <Image
                src="/techsaw-logo.jpeg"
                alt="Techsaws logo"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center gap-2 bg-white px-4 py-4">
            <p className="text-center text-sm font-bold leading-tight text-zinc-900">
              {name}
            </p>
            <p className="text-[11px] font-medium text-zinc-500">{role}</p>

            <div className="my-2 w-full border-t border-zinc-100" />

            <div className="flex h-7 items-end gap-[2px] px-1">
              {Array.from({ length: 28 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-[1px] bg-zinc-800"
                  style={{
                    width: index % 3 === 0 ? "3px" : "1.5px",
                    height: `${50 + Math.sin(index * 1.3) * 35}%`,
                  }}
                />
              ))}
            </div>

            <p
              className="mt-1 font-mono text-[10px] font-bold tracking-widest"
              style={{ color: accentColor }}
            >
              {badgeId}
            </p>

            <div
              className="mt-1 rounded-full px-3 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white"
              style={{ background: accentColor }}
            >
              Active
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section className="bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-mono text-3xl font-bold tracking-tight text-zinc-600 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-xs leading-5 text-zinc-400 sm:text-sm">
            Our dedicated team of experienced real estate professionals is at the
            heart of what we do. With a deep knowledge of the local market and a
            passion for helping clients achieve their real estate goals.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:items-start">
          {teamMembers.map((member, index) => (
            <HangingIdCard
              key={member.badgeId}
              {...member}
              className={index === 1 ? "md:pt-6" : ""}
              ropeLength={index === 1 ? 128 : 112}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
