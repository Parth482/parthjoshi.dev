import { motion } from "framer-motion";

export function HeroMasthead() {
  return (
    <header id="top" className="py-16 md:py-24 border-b border-paper/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-paper/40 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="size-2 bg-hazard-orange animate-pulse" aria-hidden />
          Current Status: Active — Open to opportunities
        </motion.div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.h1
            className="font-heading text-6xl sm:text-7xl md:text-[12vw] leading-[0.85] font-semibold tracking-tighter"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              PARTH
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              JOSHI
            </motion.span>
          </motion.h1>
          <motion.div
            className="flex flex-col gap-2 md:text-right md:pb-4 max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-hazard-yellow">Issue 02 / 2025</span>
            <p className="text-lg font-medium">Full-Stack Developer</p>
            <p className="text-sm text-paper/60">If it has a server, a wallet, or an app store link, I can architect it.</p>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
