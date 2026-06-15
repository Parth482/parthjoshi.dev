import { motion } from "framer-motion";
import { ScrambleLink } from "./ScrambleLink";

export function Nav() {
  const linkClass = "hover:text-hazard-orange transition-colors";
  return (
    <motion.nav
      className="sticky top-0 z-50 bg-ink/80 backdrop-blur border-b border-paper/10"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-[minmax(0,1fr)_auto] sm:flex sm:justify-between items-center gap-3">
        <a href="#top" className="font-heading font-semibold text-lg tracking-tighter text-paper min-w-0 truncate">
          PARTH.J<span className="text-hazard-orange">.</span>
        </a>
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-paper/70">
          <ScrambleLink href="#work" className={linkClass}>WORK</ScrambleLink>
          <ScrambleLink href="#info" className={linkClass}>INFO</ScrambleLink>
          <ScrambleLink href="#experience" className={linkClass}>LOGS</ScrambleLink>
          <ScrambleLink href="#contact" className={linkClass}>CONTACT</ScrambleLink>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="/parth_resume.pdf"
            download
            className="hidden sm:inline-block border border-paper/30 text-paper px-3 py-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] hover:border-hazard-yellow hover:text-hazard-yellow transition-colors"
          >
            Resume ↓
          </a>
          <a
            href="mailto:jparth840@outlook.com"
            className="bg-hazard-orange text-paper px-3 py-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] hover:bg-hazard-yellow hover:text-ink transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
