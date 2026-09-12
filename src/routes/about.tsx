import { createFileRoute } from "@tanstack/react-router";
import { Compass, HeartHandshake, LineChart, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — The Team Behind Get Good Leads" },
      {
        name: "description",
        content:
          "Get Good Leads is a lead generation team of strategists, media buyers and conversion specialists focused on revenue, not vanity metrics.",
      },
      { property: "og:title", content: "About Us | Get Good Leads" },
      {
        property: "og:description",
        content: "Strategists, media buyers and CRO specialists obsessed with qualified leads.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    icon: LineChart,
    t: "Revenue over vanity",
    d: "Impressions don't pay salaries. We report on leads, cost per lead and closed business.",
  },
  {
    icon: ShieldCheck,
    t: "Radical transparency",
    d: "You own every ad account, pixel and asset. Nothing is locked behind our login.",
  },
  {
    icon: Compass,
    t: "Strategy before spend",
    d: "We refuse to launch until the offer, tracking and follow-up can carry the traffic.",
  },
  {
    icon: HeartHandshake,
    t: "Partner, not vendor",
    d: "Small client roster, senior people on your account, direct access on WhatsApp.",
  },
];

const team = [
  { n: "Strategy", d: "Positioning, offers and channel mix." },
  { n: "Media Buying", d: "Daily campaign management and testing." },
  { n: "Design & Copy", d: "Ads, pages and creative that convert." },
  { n: "Analytics", d: "Tracking, attribution and reporting." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="A dedicated team that treats your growth like our own">
        Get Good Leads was built by performance marketers who got tired of dashboards that looked great while
        the phone stayed silent. We exist to generate real revenue.
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 items-center">
          <Reveal>
            <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
              Our Philosophy
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">Built on outcome, not impressions</h2>
            <div className="mt-5 space-y-4 text-slate-600 font-medium leading-relaxed">
              <p>
                We started with a simple observation: most businesses don't have a traffic problem—they
                have a conversion, funnel, and follow-up problem. Spend more, and you simply buy more of
                the same disappointment.
              </p>
              <p>
                So we work in the other direction. First the offer, then the landing page, then the
                tracking, and only then the media spend. It's disciplined in week one and dramatically cheaper
                by month three.
              </p>
              <p>
                Today we partner with a deliberately focused roster of brands across home services,
                healthcare, education, real estate, and B2B—the categories where one good lead can
                transform a quarter.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <li key={v.t} className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <v.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-bold text-slate-900">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 font-medium">{v.d}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-slate-50/70 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                Specialized Talent
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">How our team operates</h2>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <Reveal as="li" key={t.n} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{t.n}</h3>
                  <p className="mt-2 text-sm text-slate-600 font-medium">{t.d}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Let's see if we're a fit" body="A short call is usually enough to know. If we're not the right partner, we'll say so and point you somewhere better." />
    </>
  );
}
