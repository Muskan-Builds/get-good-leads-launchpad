import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Paid Ads, SEO, Funnels & CRO | Get Good Leads" },
      {
        name: "description",
        content:
          "Lead generation services from Get Good Leads: Google & Meta ads, SEO, landing page funnels, conversion optimisation, creative and reporting.",
      },
      { property: "og:title", content: "Services | Get Good Leads" },
      {
        property: "og:description",
        content: "Paid ads, SEO, funnels, CRO and reporting built around qualified leads.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const detail = [
  {
    title: "Paid Advertising",
    lead: "Google Search, Performance Max, Meta and LinkedIn campaigns run against a cost-per-qualified-lead target.",
    points: [
      "Intent-first keyword and audience architecture",
      "Offer testing and creative refresh cycles",
      "Negative keyword and placement hygiene",
      "Budget pacing tied to pipeline, not impressions",
    ],
  },
  {
    title: "SEO & Local Search",
    lead: "Compounding organic demand from the searches your buyers actually make.",
    points: [
      "Technical fixes, speed and crawl health",
      "Service and location page architecture",
      "Content built for buying-stage queries",
      "Google Business Profile and review engine",
    ],
  },
  {
    title: "Funnels & Landing Pages",
    lead: "Fast pages with one job: convert the click into a conversation.",
    points: [
      "Message-match to each ad group",
      "Short, smart forms and instant callbacks",
      "WhatsApp and call tracking built in",
      "A/B tested layouts and offers",
    ],
  },
  {
    title: "Conversion & Lifecycle",
    lead: "Most growth hides between the lead and the sale. We close that gap.",
    points: [
      "Lead scoring and routing",
      "Email and WhatsApp nurture sequences",
      "Sales follow-up scripts and SLAs",
      "Win/loss feedback into campaigns",
    ],
  },
];

const plans = [
  {
    name: "Launch",
    price: "Starter",
    for: "First serious lead engine",
    items: ["1 paid channel", "1 landing page", "Tracking setup", "Monthly reporting"],
  },
  {
    name: "Growth",
    price: "Most popular",
    for: "Scaling teams",
    items: ["2–3 channels", "Funnel + CRO tests", "Creative refresh", "Bi-weekly reviews"],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    for: "Multi-location & national",
    items: ["Full-funnel programme", "Dedicated strategist", "Advanced attribution", "Weekly war room"],
  },
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Lead generation, engineered end to end">
        Every engagement is built backwards from one number: the cost of a lead your sales team is
        excited to call.
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {detail.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <article className="group h-full rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{d.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 font-medium">{d.lead}</p>
                <ul className="mt-6 space-y-3">
                  {d.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-slate-700 font-medium">
                      <Check className="mt-0.5 size-4 shrink-0 text-blue-600" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-slate-50/70 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                Engagement Models
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">Ways to work together</h2>
              <p className="mt-2 text-sm text-slate-500 font-medium">
                Indicative packages — final scope and pricing are tailored after your growth audit.
              </p>
            </div>
          </Reveal>

          <ul className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 80}>
                <div
                  className={`relative h-full rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                    p.featured
                      ? "border-blue-500 bg-gradient-to-b from-blue-50/90 via-white to-white shadow-xl shadow-blue-500/10 ring-2 ring-blue-500/20"
                      : "border-slate-200/90 bg-white shadow-sm hover:shadow-lg"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-xs font-bold text-white shadow-md">
                      MOST POPULAR
                    </span>
                  )}
                  <p className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                    {p.price}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-slate-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-500 font-medium">{p.for}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-700 font-medium">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-3">
                        <Check className="mt-0.5 size-4 shrink-0 text-blue-600" aria-hidden="true" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Not sure which service fits best?" body="Tell us your goal and we'll map out the shortest path to hit your targets — free, no obligation." />
    </>
  );
}
