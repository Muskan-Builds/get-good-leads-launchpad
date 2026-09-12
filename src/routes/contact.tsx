import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/components/site/contact-info";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Get Good Leads — Book Your Free Growth Audit" },
      {
        name: "description",
        content:
          "Talk to Get Good Leads about lead generation. Call +91 79855 91914, message us on WhatsApp, or request a free growth audit.",
      },
      { property: "og:title", content: "Contact | Get Good Leads" },
      {
        property: "og:description",
        content: "Call, WhatsApp or request your free growth audit.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about your next 100 leads">
        Tell us where you are today and what growth would look like. We reply within one business
        day — usually much sooner.
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <form
              className="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-lg shadow-blue-500/5 sm:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <h2 className="text-2xl font-extrabold text-slate-900">Request your free growth audit</h2>
              <p className="mt-2 text-sm text-slate-500 font-medium">
                Fill out your details below or call/WhatsApp us directly for an instant conversation.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full Name" autoComplete="name" required />
                <Field id="company" label="Company" autoComplete="organization" />
                <Field id="email" label="Email Address" type="email" autoComplete="email" required />
                <Field id="phone" label="Phone Number" type="tel" autoComplete="tel" required />
                <div className="sm:col-span-2">
                  <label htmlFor="budget" className="block text-sm font-bold text-slate-900">
                    Monthly Marketing Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 focus:border-blue-500 focus:bg-white focus:outline-hidden transition-all"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option>Under ₹50,000</option>
                    <option>₹50,000 – ₹2,00,000</option>
                    <option>₹2,00,000 – ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-bold text-slate-900">
                    What are your growth goals?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-hidden transition-all"
                    placeholder="A little about your business, current lead funnel, and target cost-per-lead..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 min-h-12 w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-600/30 sm:w-auto"
              >
                Send Audit Request
              </button>

              <p aria-live="polite" className="mt-4 text-sm font-medium text-blue-600">
                {sent
                  ? "Thank you! We've received your audit request and will reach out shortly."
                  : ""}
              </p>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-slate-900">Call Us</span>
                  <span className="block text-sm font-semibold text-blue-600">{PHONE_DISPLAY}</span>
                </span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <MessageCircle className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-slate-900">WhatsApp</span>
                  <span className="block text-sm font-semibold text-emerald-600">
                    Fastest response — chat now
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-slate-900">Email Direct</span>
                  <span className="block truncate text-sm font-semibold text-blue-600">{EMAIL}</span>
                </span>
              </a>

              <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6">
                <p className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <Clock className="size-4 shrink-0 text-blue-600" aria-hidden="true" />
                  Mon–Sat, 10:00 – 19:00 IST
                </p>
                <p className="mt-3 flex items-center gap-3 text-sm font-medium text-slate-700">
                  <MapPin className="size-4 shrink-0 text-blue-600" aria-hidden="true" />
                  Serving clients across India & globally
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-slate-900">
        {label}
        {required ? <span className="text-blue-600"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 focus:border-blue-500 focus:bg-white focus:outline-hidden transition-all"
      />
    </div>
  );
}
