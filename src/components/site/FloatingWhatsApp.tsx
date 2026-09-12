import { MessageCircle } from "lucide-react";
import { PHONE_DISPLAY, WHATSAPP_URL } from "./contact-info";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Get Good Leads on WhatsApp at ${PHONE_DISPLAY}`}
      className="group glow-pulse fixed right-5 bottom-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-[0_12px_35px_-8px_rgba(16,185,129,0.7)] transition-all duration-300 hover:scale-105 hover:bg-emerald-600 focus-visible:scale-105"
    >
      <span
        aria-hidden="true"
        className="ping-ring absolute inset-0 rounded-full border border-emerald-400/60"
      />
      <MessageCircle className="relative size-6 shrink-0 fill-current" aria-hidden="true" />
      <span className="hidden font-semibold text-xs tracking-wide sm:inline-block">
        WhatsApp ({PHONE_DISPLAY})
      </span>
    </a>
  );
}
