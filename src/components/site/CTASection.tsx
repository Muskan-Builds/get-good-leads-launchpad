import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "./contact-info";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function CTASection({
  title = "Ready for a pipeline you can predict?",
  body = "Book a free 30-minute growth audit. We map your funnel, spot the leaks, and show you where the next 100 qualified leads come from.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 px-6 py-16 text-center text-white shadow-2xl shadow-blue-600/20 sm:px-12">
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-20 size-72 rounded-full bg-cyan-400/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-20 size-80 rounded-full bg-sky-400/30 blur-3xl"
        />
        <div className="relative z-10">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-200 backdrop-blur-md">
            Accelerate Growth
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-balance text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 leading-relaxed font-medium sm:text-lg">
            {body}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-blue-700 shadow-lg shadow-black/10 transition-all duration-300 hover:scale-[1.04] hover:bg-slate-50 hover:shadow-xl active:scale-[0.98]"
            >
              Get Free Audit
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/50"
            >
              <Phone className="size-4 shrink-0 text-cyan-200" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/50"
            >
              <WhatsAppIcon colored className="size-4 shrink-0" />
              WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
