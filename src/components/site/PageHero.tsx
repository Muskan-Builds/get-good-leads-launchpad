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
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-blue-50/90 via-indigo-50/50 via-cyan-50/40 to-purple-50/60 animate-hero-gradient">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-[30rem] rounded-full bg-gradient-to-br from-blue-400/20 via-indigo-400/15 to-cyan-400/20 blur-3xl animate-orb-1"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 size-[24rem] rounded-full bg-gradient-to-tr from-violet-400/15 to-emerald-300/15 blur-3xl animate-orb-2"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-3.5 py-1 text-xs font-bold tracking-wider text-blue-700 uppercase shadow-2xs backdrop-blur-md">
            <span className="size-2 rounded-full bg-blue-600 animate-pulse" />
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold text-slate-900 tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {children ? (
            <div className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 font-medium">
              {children}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
