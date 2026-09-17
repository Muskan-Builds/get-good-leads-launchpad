import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-blue-200/40 bg-gradient-to-b from-[#4863e6] via-[#5974f7] via-75% to-[#edf3ff] animate-hero-gradient">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-[30rem] rounded-full bg-gradient-to-br from-blue-400/25 via-sky-300/20 to-white/10 blur-3xl animate-orb-1"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 size-[24rem] rounded-full bg-gradient-to-tr from-cyan-300/20 to-white/10 blur-3xl animate-orb-2"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3.5 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-2xs backdrop-blur-md">
            <span className="size-2 rounded-full bg-cyan-200 animate-pulse" />
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold text-white tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {children ? (
            <div className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-50/95 font-medium">
              {children}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
