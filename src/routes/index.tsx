import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  Filter,
  Megaphone,
  MousePointerClick,
  Phone,
  Search,
  Sparkles,
  Star,
  Target,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { CTASection } from "@/components/site/CTASection";
import { ShowcaseSlider } from "@/components/site/ShowcaseSlider";
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/site/contact-info";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Get Good Leads — Lead Generation Agency | More Leads. Better Business." },
      {
        name: "description",
        content:
          "We build predictable lead engines with paid ads, SEO, landing pages and CRO — so your sales team talks to buyers, not browsers.",
      },
      { property: "og:title", content: "Get Good Leads — More Leads. Better Business." },
      {
        property: "og:description",
        content: "Performance marketing that delivers qualified, sales-ready leads.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  {
    icon: Target,
    title: "Paid Ads That Pay",
    body: "Google, Meta and LinkedIn campaigns engineered around cost-per-qualified-lead, not vanity clicks.",
  },
  {
    icon: Search,
    title: "SEO & Local Search",
    body: "Rank for the searches that carry buying intent, and own the map pack in your service areas.",
  },
  {
    icon: Filter,
    title: "Funnels & Landing Pages",
    body: "Fast, focused pages built to convert cold traffic into booked calls and filled forms.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion Optimisation",
    body: "Continuous testing on offers, forms and follow-up so every rupee of spend works harder.",
  },
  {
    icon: Megaphone,
    title: "Creative & Copy",
    body: "Scroll-stopping ad creative and messaging built on real customer language.",
  },
  {
    icon: BarChart3,
    title: "Tracking & Reporting",
    body: "Clean attribution and one dashboard that shows leads, cost per lead and pipeline value.",
  },
];

const steps = [
  { n: "01", t: "Audit", d: "We map your funnel, traffic, offers and tracking to find the leaks." },
  { n: "02", t: "Build", d: "Campaigns, landing pages and follow-up assembled around one offer." },
  { n: "03", t: "Launch", d: "Controlled spend, tight feedback loops, weekly optimisation." },
  { n: "04", t: "Scale", d: "Double down on what converts and expand into new channels." },
];

const testimonials = [
  {
    quote:
      "Within a quarter our cost per qualified enquiry dropped sharply and the sales team stopped chasing tyre-kickers.",
    name: "Rajesh Sharma",
    role: "Founder, SmartHome Solutions",
  },
  {
    quote:
      "The reporting finally made sense. We could see exactly which campaign produced which booked call.",
    name: "Ananya Iyer",
    role: "Head of Marketing, SaaSify India",
  },
  {
    quote:
      "They rebuilt our landing page and the same ad spend started producing noticeably more form fills.",
    name: "Vikram Sengupta",
    role: "Managing Director, EduPulse Academy",
  },
];

function Home() {
  return (
    <>
      {/* Animated Hero Section with Zoom Periwinkle Gradient & Showcase Overlay */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#4863e6] via-[#5974f7] via-65% to-white pt-12 pb-16">
        {/* Animated Dynamic Ambient Mesh Orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/4 size-[34rem] rounded-full bg-gradient-to-br from-blue-400/25 via-sky-300/20 to-white/10 blur-3xl animate-orb-1"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-32 right-5 size-[30rem] rounded-full bg-gradient-to-tr from-cyan-300/20 via-blue-400/20 to-white/10 blur-3xl animate-orb-2"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-10 size-[26rem] rounded-full bg-gradient-to-r from-sky-400/20 to-blue-300/15 blur-3xl animate-orb-3"
        />

        {/* Hero Grid Container */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-2xs backdrop-blur-md">
                  <Sparkles className="size-3.5 text-cyan-200 animate-pulse" aria-hidden="true" />
                  PERFORMANCE MARKETING STUDIO
                </span>
              </Reveal>

              <Reveal delay={90}>
                <h1 className="mt-6 text-4xl font-extrabold text-white tracking-tight sm:text-6xl lg:text-7xl">
                  More leads.{" "}
                  <span className="bg-gradient-to-r from-cyan-200 via-white to-sky-200 bg-clip-text text-transparent animate-gradient-text">
                    Better business.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue-50/95 font-medium">
                  We build lead engines for ambitious brands — paid ads, search, funnels and
                  conversion work that fill your calendar with qualified buyers.
                </p>
              </Reveal>

              <Reveal delay={230}>
                <div className="mt-9 flex flex-wrap items-center gap-3.5">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-extrabold text-[#3b52e2] shadow-xl shadow-black/10 transition-all duration-300 hover:scale-[1.03] hover:bg-slate-50 hover:shadow-2xl active:scale-[0.98]"
                  >
                    Get Free Growth Audit
                  </Link>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/15 px-7 py-3.5 text-sm font-bold text-white shadow-2xs backdrop-blur-md transition-all duration-300 hover:border-white/70 hover:bg-white/25"
                  >
                    <Phone className="size-4 text-white" aria-hidden="true" />
                    Call Now
                  </a>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 pt-6 border-t border-white/20">
                  {[
                    ["3.4x", "Avg. ROI Target"],
                    ["-38%", "Cost Per Lead"],
                    ["14 Days", "To Launch"],
                  ].map(([k, v]) => (
                    <div key={v} className="group transition-transform duration-300 hover:-translate-y-1">
                      <dt className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                        <CountUp value={String(k)} />
                      </dt>
                      <dd className="mt-1 text-xs font-semibold text-blue-100/90 transition-colors">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* Visual Interactive Live Campaign Engine Dashboard Widget */}
            <Reveal delay={200} className="lg:justify-self-end w-full">
              <div className="relative rounded-3xl border border-white/40 bg-white/95 p-6 shadow-2xl shadow-blue-950/20 backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="size-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Live Campaign Engine
                    </span>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-600">
                    +142% MoM
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    ["Google Paid Search", 88, "from-blue-500 to-sky-600"],
                    ["Meta Ads Engine", 74, "from-sky-500 to-blue-600"],
                    ["Local SEO & Maps", 59, "from-cyan-500 to-blue-600"],
                    ["High-Intent Funnels", 42, "from-emerald-500 to-teal-600"],
                  ].map(([label, val, grad]) => (
                    <div key={label as string} className="group">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                        <span className="group-hover:text-blue-600 transition-colors">{label}</span>
                        <span className="text-blue-600">{val} Qualified Leads</span>
                      </div>
                      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${grad} transition-all duration-1000 group-hover:brightness-110`}
                          style={{ width: `${val as number}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-500">Target Cost Per Lead</p>
                    <p className="text-lg font-extrabold text-slate-900">₹450 <span className="text-xs font-bold text-emerald-600">(-32% lower)</span></p>
                  </div>
                  <div className="rounded-xl bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs">
                    Optimized
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Floating Showcase Cards Slider Overlay */}
        <div className="mt-16">
          <ShowcaseSlider />
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
              Core Capabilities
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Everything you need to turn attention into revenue
            </h2>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <s.icon className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 font-medium">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-bold text-slate-700 shadow-2xs transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-600 hover:scale-[1.03]"
          >
            Explore All Services & Packages →
          </Link>
        </Reveal>
      </section>

      {/* How We Work Process Section */}
      <section className="border-y border-slate-200/80 bg-slate-50/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                Systematic Execution
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">How we deliver leads</h2>
            </div>
          </Reveal>

          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
                  <span className="font-display text-4xl font-extrabold text-blue-600/30 transition-colors duration-300 group-hover:text-blue-600">{s.n}</span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 font-medium">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
              Client Feedback
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">What growth leaders say</h2>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 80}>
              <figure className="group h-full rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
                <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, k) => (
                    <Star
                      key={k}
                      className="size-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-slate-700 font-medium">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 pt-4 border-t border-slate-100 text-sm">
                  <span className="font-bold text-slate-900">{t.name}</span>
                  <span className="block text-xs font-medium text-slate-500">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </section>

      <CTASection />
    </>
  );
}
