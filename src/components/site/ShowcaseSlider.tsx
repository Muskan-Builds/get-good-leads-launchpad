import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Target, Filter, Sparkles, MessageCircle, Zap, Headphones, Video, PhoneCall, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

interface ShowcaseCard {
  id: string;
  icon: any;
  category: string;
  title: string;
  description: string;
  image?: string | null;
  gradient?: string;
  badge: string;
  isElectricBlue?: boolean;
  isGlassyVisual?: boolean;
  isWhatsAppVisual?: boolean;
  floatingText?: string;
}

const showcaseCards: ShowcaseCard[] = [
  {
    id: "sales-team",
    icon: Headphones,
    category: "Sales Desk SLA",
    title: "Dedicated Growth Strategists",
    description: "Human sales experts following up with incoming leads within 5 minutes of form submission.",
    image: "/showcase/human_sales_headset.png",
    gradient: "from-blue-600 to-indigo-600",
    badge: "5-Min Response SLA",
  },
  {
    id: "ai-copilot",
    icon: Sparkles,
    category: "AI Performance Copilot",
    title: "Meet Growth Copilot: Your Real-Time Lead Engine",
    description: "Capture insights from your campaign traffic, optimize bids, and score lead quality live as calls come in.",
    image: "/showcase/human_glassy_laptop.png",
    badge: "AI Powered",
    isElectricBlue: true,
    floatingText: "[Growth AI] Qualified Lead Detected • Score: 98/100",
  },
  {
    id: "search",
    icon: Target,
    category: "Paid Search",
    title: "High-Intent Google Engine",
    description: "Capture buyers actively searching for your services with keyword bidding and negative list management.",
    image: "/showcase/card_paid_search.png",
    gradient: "from-cyan-500 to-blue-600",
    badge: "+340% Intent Leads",
  },
  {
    id: "award-leader",
    icon: Zap,
    category: "Industry Recognition",
    title: "Recognized as #1 Qualified Lead Engine",
    description: "Voted top performance marketing partner for predictable CPL and transparent ROI tracking.",
    image: "/showcase/card_glassy_ui.png",
    badge: "Gartner® Top Rated",
    isElectricBlue: true,
    isGlassyVisual: true,
  },
  {
    id: "video-meeting",
    icon: Video,
    category: "Strategy War Room",
    title: "Bi-Weekly Strategy Syncs",
    description: "Direct face-to-face video calls with your dedicated strategist to review CAC, CPL, and lead quality.",
    image: "/showcase/human_video_meeting.png",
    gradient: "from-violet-600 to-purple-600",
    badge: "Dedicated Strategist",
  },
  {
    id: "social",
    icon: Sparkles,
    category: "Ad Creative Studio",
    title: "High-CTR Meta & Social Ads",
    description: "Scroll-stopping video and image ads designed to generate qualified responses at optimal CPL.",
    image: "/showcase/card_meta_ads.png",
    gradient: "from-indigo-600 to-violet-600",
    badge: "2.8x Higher CTR",
  },
  {
    id: "consultant-call",
    icon: PhoneCall,
    category: "Direct Support",
    title: "1-on-1 Pipeline Consultation",
    description: "Direct phone access to your performance team so you can scale ad spend with total confidence.",
    image: "/showcase/human_phone_consultant.png",
    gradient: "from-emerald-600 to-teal-600",
    badge: "Direct Phone Line",
  },
  {
    id: "funnels",
    icon: Filter,
    category: "Funnel & CRO",
    title: "Conversion-Engineered Pages",
    description: "Sub-second load times, mobile-first forms, and dynamic copy built to turn traffic into qualified calls.",
    image: "/showcase/card_funnel_builder.png",
    gradient: "from-blue-700 to-indigo-600",
    badge: "38% Form Conversion",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    category: "Instant Conversion",
    title: "WhatsApp Automation Suite",
    description: "Pre-qualify prospects automatically on WhatsApp within seconds of form submission.",
    image: null,
    isWhatsAppVisual: true,
    gradient: "from-emerald-600 to-teal-600",
    badge: "89% Open Rate",
  },
];

export function ShowcaseSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll smoothly to a specific card index
  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const targetCard = container.children[index] as HTMLElement;
      if (targetCard) {
        const targetScrollLeft = targetCard.offsetLeft - container.offsetLeft - 16;
        container.scrollTo({ left: Math.max(0, targetScrollLeft), behavior: "smooth" });
        setActiveIndex(index);
      }
    }
  };

  // Sync scroll position with activeIndex on user manual swipe/scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const children = Array.from(container.children) as HTMLElement[];

      let closestIndex = 0;
      let minDistance = Infinity;

      children.forEach((child, idx) => {
        const childLeft = child.offsetLeft - container.offsetLeft - 16;
        const distance = Math.abs(scrollLeft - childLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveIndex(closestIndex);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % showcaseCards.length;
        if (scrollRef.current) {
          const container = scrollRef.current;
          const targetCard = container.children[nextIndex] as HTMLElement;
          if (targetCard) {
            const targetScrollLeft = targetCard.offsetLeft - container.offsetLeft - 16;
            container.scrollTo({ left: Math.max(0, targetScrollLeft), behavior: "smooth" });
          }
        }
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeft = () => {
    const next = activeIndex > 0 ? activeIndex - 1 : showcaseCards.length - 1;
    scrollToCard(next);
  };

  const scrollRight = () => {
    const next = (activeIndex + 1) % showcaseCards.length;
    scrollToCard(next);
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[40rem] rounded-full bg-blue-600/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-10 size-[32rem] rounded-full bg-violet-600/15 blur-3xl"
      />

      {/* Header Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
            <Zap className="size-3.5 text-cyan-300" />
            Complete Growth Launchpad
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-balance text-white sm:text-4xl lg:text-5xl">
            People + technology powering your pipeline
          </h2>
          <p className="mt-3 text-base text-slate-300 font-medium sm:text-lg">
            Explore the hybrid lead engine combining dedicated human strategists with automated campaign technology.
          </p>
        </Reveal>
      </div>

      {/* FULL WIDTH Automatic Horizontal Slider Track */}
      <div
        className="mt-12 w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="no-scrollbar flex items-stretch gap-6 overflow-x-auto px-4 sm:px-8 lg:px-12 pb-6 pt-2 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {showcaseCards.map((card) => {
            const Icon = card.icon;

            /* Zoom-Style Electric Blue Featured Card */
            if (card.isElectricBlue) {
              return (
                <div
                  key={card.id}
                  className="group relative flex w-[320px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-3xl bg-blue-600 p-7 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-blue-500 hover:shadow-blue-500/25 sm:w-[360px]"
                >
                  {/* Card Content Header */}
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                        <Icon className="size-3.5 text-cyan-200" />
                        {card.category}
                      </span>
                      <span className="rounded-full bg-blue-900/40 px-2.5 py-0.5 text-xs font-bold text-white">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-black text-white leading-tight tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-blue-100 leading-relaxed font-medium">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Visual & Arrow Button */}
                  <div className="relative mt-8 min-h-[200px] w-full flex items-end justify-between">
                    {/* Visual Graphic */}
                    {card.isGlassyVisual ? (
                      <div className="relative w-full overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 backdrop-blur-md">
                        <img
                          src={card.image!}
                          alt={card.title}
                          className="h-44 w-full rounded-xl object-cover"
                        />
                      </div>
                    ) : (
                      <div className="relative w-full">
                        <img
                          src={card.image!}
                          alt={card.title}
                          className="h-48 w-3/4 rounded-2xl object-cover border border-white/20 shadow-lg"
                        />
                        {/* Floating Frosted Glass Overlay Pill */}
                        <div className="absolute bottom-2 left-2 right-12 rounded-xl border border-white/40 bg-white/30 p-2.5 text-[11px] font-bold text-white shadow-xl backdrop-blur-lg">
                          {card.floatingText}
                        </div>
                      </div>
                    )}

                    {/* Circular White Arrow Button (Zoom style) */}
                    <div className="absolute bottom-0 right-0 flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-cyan-300 group-hover:text-blue-900">
                      <ArrowUpRight className="size-6 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              );
            }

            /* Standard Dark Theme Slate Cards */
            return (
              <div
                key={card.id}
                className="group relative flex w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 sm:w-[360px]"
              >
                {/* Top Banner Gradient */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${card.gradient}`} />

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/90 px-3 py-1 text-xs font-semibold text-cyan-300 border border-slate-700/60">
                      <Icon className="size-3.5" />
                      {card.category}
                    </span>
                    <span className="rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-bold text-blue-300 border border-blue-500/30">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed font-medium">
                    {card.description}
                  </p>

                  {/* Card Visual / Media Frame */}
                  <div className="mt-6 relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-inner group-hover:border-slate-700 transition-colors">
                    {card.image ? (
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-56 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : card.isWhatsAppVisual ? (
                      /* Custom WhatsApp visual mock */
                      <div className="flex h-56 w-full flex-col justify-between bg-gradient-to-br from-emerald-950/90 via-slate-900 to-slate-950 p-4 text-xs">
                        <div className="flex items-center justify-between border-b border-emerald-800/40 pb-2 text-emerald-400">
                          <span className="font-bold flex items-center gap-1">
                            <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                            Live WhatsApp Automation
                          </span>
                          <span className="text-[10px] text-slate-400">Just Now</span>
                        </div>
                        <div className="space-y-2.5 my-auto">
                          <div className="max-w-[85%] rounded-2xl rounded-tl-xs bg-slate-800/90 p-2.5 text-slate-200 shadow-sm border border-slate-700/60">
                            👋 Hi! Thanks for inquiring with Get Good Leads. Ready for a quick 5-min budget review?
                          </div>
                          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-xs bg-emerald-600 p-2.5 font-medium text-white shadow-sm">
                            Yes, send over available time slots for today! 🚀
                          </div>
                        </div>
                        <div className="rounded-xl bg-emerald-500/10 p-2 text-center text-[11px] font-semibold text-emerald-300 border border-emerald-500/20">
                          ⚡ Instant Lead Qualified & Booked
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM NAVIGATION CONTROL BAR: [< Left Button] [Dot Dot Dot] [Right Button >] */}
        <div className="mt-8 flex items-center justify-center gap-6 px-4">
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="flex size-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800/90 text-slate-200 transition-all hover:border-blue-400 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Middle Pagination Dots */}
          <div className="flex items-center gap-2.5 rounded-full border border-slate-800 bg-slate-950/80 px-4 py-2.5 backdrop-blur-md">
            {showcaseCards.map((card, idx) => (
              <button
                key={card.id}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-7 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-sm shadow-blue-500/50"
                    : "w-2.5 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={scrollRight}
            aria-label="Scroll right"
            className="flex size-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800/90 text-slate-200 transition-all hover:border-blue-400 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
