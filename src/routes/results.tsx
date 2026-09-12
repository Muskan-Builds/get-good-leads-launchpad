import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results & Case Studies — Get Good Leads" },
      {
        name: "description",
        content:
          "Sample case studies and illustrative performance snapshots showing how Get Good Leads structures lead generation campaigns.",
      },
      { property: "og:title", content: "Results | Get Good Leads" },
      {
        property: "og:description",
        content: "Illustrative sample case studies from our lead generation playbook.",
      },
      { property: "og:url", content: "/results" },
    ],
    links: [{ rel: "canonical", href: "/results" }],
  }),
  component: Results,
});

const cases = [
  {
    sector: "Home Services",
    title: "From scattered spend to a booked calendar",
    problem: "Ad budget spread across five campaigns with no call tracking.",
    action: "Consolidated into one intent-led search campaign plus a speed-optimised landing page.",
    metrics: [
      ["+142%", "Qualified enquiries"],
      ["-41%", "Cost per lead"],
      ["3.1x", "Return on ad spend"],
    ],
  },
  {
    sector: "B2B SaaS",
    title: "Demo requests that sales actually wanted",
    problem: "High form volume, low qualification, long sales cycles.",
    action: "Added qualification fields, lead scoring and an ICP-matched LinkedIn programme.",
    metrics: [
      ["+68%", "SQL rate"],
      ["-27%", "Cost per demo"],
      ["2.4x", "Pipeline value"],
    ],
  },
  {
    sector: "Healthcare",
    title: "Owning the local map pack",
    problem: "Invisible in local search across three clinic locations.",
    action: "Location page architecture, review engine and Google Business Profile overhaul.",
    metrics: [
      ["+215%", "Map views"],
      ["+96%", "Call clicks"],
      ["#1–3", "Local rankings"],
    ],
  },
];

function Results() {
  return (
    <>
      <PageHero eyebrow="Results" title="What a high-performing lead engine looks like">
        Explore case study frameworks and reporting methodologies engineered to scale qualified lead pipeline.
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl border border-blue-200 bg-blue-50/80 px-6 py-4 text-sm text-blue-900 font-medium shadow-2xs">
            <span className="font-bold text-blue-700">Demonstration Overview:</span> Data benchmarks shown represent standardized growth models across client accounts.
          </div>
        </Reveal>

        <ul className="mt-12 space-y-8">
          {cases.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 90}>
              <article className="group rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
                  <div>
                    <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                      {c.sector}
                    </span>
                    <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">{c.title}</h2>
                    <dl className="mt-6 space-y-4 text-sm">
                      <div>
                        <dt className="font-bold text-slate-900">The Problem</dt>
                        <dd className="mt-1 text-slate-600 font-medium">{c.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-slate-900">Our Strategy & Execution</dt>
                        <dd className="mt-1 text-slate-600 font-medium">{c.action}</dd>
                      </div>
                    </dl>
                  </div>
                  <ul className="grid grid-cols-3 gap-4 self-start lg:grid-cols-1">
                    {c.metrics.map(([k, v]) => (
                      <li key={v} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-200 hover:bg-blue-50/50 hover:border-blue-200">
                        <p className="font-display text-2xl font-extrabold text-blue-600">
                          <CountUp value={String(k)} />
                        </p>
                        <p className="mt-1 text-xs font-semibold text-slate-600">{v}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-y border-slate-200/80 bg-slate-50/70 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <div className="inline-flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs">
                <TrendingUp className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Typical 90-Day Trajectory</h2>
                <p className="mt-1 text-sm text-slate-500 font-medium">Standard launch and optimization timeline.</p>
              </div>
            </div>
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              ["Days 1–30", "Audit, rebuild tracking, launch first campaign and landing page."],
              ["Days 31–60", "Creative and offer testing; cost per lead begins to fall."],
              ["Days 61–90", "Scale winners, add a second channel, formalise follow-up."],
            ].map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
                  <h3 className="font-bold text-blue-600 text-lg">{t}</h3>
                  <p className="mt-2 text-sm text-slate-600 font-medium">{d}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Want results like these for your business?" body="We'll audit your funnel and show you, line by line, where the next set of qualified leads comes from." />
    </>
  );
}
