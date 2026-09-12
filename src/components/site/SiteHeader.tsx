import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { PHONE_DISPLAY, PHONE_TEL } from "./contact-info";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/results", label: "Results" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-[0_4px_25px_-5px_rgba(37,99,235,0.07)] backdrop-blur-xl"
          : "border-b border-transparent bg-slate-50/60 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo height={42} />
        </div>

        <div className="flex items-center gap-3">
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-blue-50 text-blue-600 shadow-2xs" }}
                inactiveProps={{ className: "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900" }}
                className="rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 pl-2 md:flex">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-2xs transition-all hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-600"
            >
              <Phone className="size-4 shrink-0 text-blue-600" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98]"
            >
              Get Free Audit
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-2xs transition-colors hover:bg-slate-50 lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="animate-in fade-in slide-in-from-top-2 border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col gap-1.5">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "bg-blue-50 text-blue-600" }}
                  inactiveProps={{ className: "text-slate-700 hover:bg-slate-50" }}
                  className="block rounded-xl px-4 py-3 text-base font-semibold transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 flex flex-col gap-2 pt-2 border-t border-slate-100">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-center text-sm font-semibold text-slate-700 shadow-xs"
              >
                <Phone className="size-4 text-blue-600" />
                Call {PHONE_DISPLAY}
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 text-center text-sm font-bold text-white shadow-md shadow-blue-500/20"
              >
                Get Free Audit
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
