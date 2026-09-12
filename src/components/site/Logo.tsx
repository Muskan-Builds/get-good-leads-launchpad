import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  height = 44,
  variant = "default",
}: {
  className?: string;
  height?: number;
  variant?: "default" | "on-dark";
}) {
  return (
    <Link
      to="/"
      aria-label="Get Good Leads — home"
      className={cn(
        "group relative inline-flex shrink-0 items-center justify-center transition-all duration-300 hover:opacity-95 hover:scale-[1.02]",
        variant === "on-dark" && "rounded-2xl bg-white px-4 py-2.5 shadow-md shadow-blue-950/20 border border-slate-100",
        className,
      )}
    >
      <img
        src={logoImg}
        alt="Get Good Leads — More Leads. Better Business."
        style={{ height }}
        className="w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </Link>
  );
}
