import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const USERNAME = "Parth482";


export function GitHubGraph() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = el.scrollWidth;
  }, []);

  return (
    <section className="py-24 border-b border-paper/10" id="github">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
            <div>
              <p className="text-[10px] font-bold text-hazard-orange uppercase tracking-[0.3em] mb-2">
                / Commit Log
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tighter">
                A year of shipping.
              </h2>
            </div>
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/60 hover:text-hazard-yellow transition-colors"
            >
              @{USERNAME} ↗
            </a>
          </div>

          <div className="relative border border-paper/10 p-4 sm:p-6 bg-paper/[0.02] overflow-x-auto" ref={scrollRef}>
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(255,87,34,0.12), transparent 60%)",
              }}
            />
            <img
              src={`https://ghchart.rshah.org/ff5722/${USERNAME}`}
              alt={`${USERNAME} GitHub contribution graph`}
              loading="lazy"
              className="relative w-full min-w-[640px] invert-[0.04]"
            />
          </div>

          <p className="mt-3 text-[10px] text-paper/30 uppercase tracking-[0.2em] text-center md:hidden">
            ← Swipe to see earlier months →
          </p>
        </motion.div>
      </div>
    </section>
  );
}

