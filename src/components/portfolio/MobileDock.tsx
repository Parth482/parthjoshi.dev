import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  { href: "#top", label: "Home", icon: HomeIcon },
  { href: "#work", label: "Work", icon: WorkIcon },
  { href: "#info", label: "Info", icon: InfoIcon },
  { href: "#contact", label: "Contact", icon: MailIcon },
];

export function MobileDock() {
  const [active, setActive] = useState<string>("#top");

  useEffect(() => {
    const ids = items.map((i) => i.href.slice(1));
    const onScroll = () => {
      const mid = window.innerHeight * 0.35;
      let current = "#top";
      let bestTop = -Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= mid && top > bestTop) {
          bestTop = top;
          current = `#${id}`;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      aria-label="Mobile navigation"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="md:hidden fixed left-1/2 -translate-x-1/2 z-50 pointer-events-none"
      style={{
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 14px)",
      }}
    >
      <div
        className="pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full border border-paper/15 bg-ink/70 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)]"
        style={{ backdropFilter: "blur(24px) saturate(160%)" }}
      >
        {items.map(({ href, label, icon: Icon }) => {
          const isActive = active === href;
          return (
            <a
              key={href}
              href={href}
              aria-label={label}
              aria-current={isActive ? "page" : undefined}
              className="relative grid place-items-center min-w-[56px] h-11 px-3 rounded-full text-paper/70 active:scale-[0.94] transition-transform"
            >
              {isActive && (
                <motion.span
                  layoutId="dock-pill"
                  className="absolute inset-0 rounded-full bg-hazard-orange"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className={`relative z-10 flex items-center gap-1.5 ${isActive ? "text-paper" : ""}`}>
                <Icon className="w-4 h-4" />
                {isActive && (
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                    {label}
                  </span>
                )}
              </span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" />
    </svg>
  );
}
function WorkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><circle cx="12" cy="8" r="0.5" fill="currentColor" />
    </svg>
  );
}
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" />
    </svg>
  );
}
