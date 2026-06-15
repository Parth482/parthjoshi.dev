import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const BARS = 48;

const TARGET = "PARTH.J";
const DURATION_MS = 3500;

const BUILD_STEPS = [
  "Initializing",
  "Loading modules",
  "Composing layout",
  "Mounting components",
  "Ready",
];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const tick = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;
      const linear = Math.min(1, elapsed / DURATION_MS);
      const eased = 1 - Math.pow(1 - linear, 3);
      setProgress(eased);

      if (linear < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setShow(false), 400);
        setTimeout(onDone, 900);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const pct = Math.floor(progress * 100);
  const fillY = 100 - progress * 100;

  const stepIndex = Math.min(
    BUILD_STEPS.length - 1,
    Math.floor(progress * BUILD_STEPS.length)
  );
  const statusText = BUILD_STEPS[stepIndex];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink text-paper overflow-hidden"
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        >
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />

          <svg
            className="absolute -bottom-[40vw] -left-[40vw] w-[140vw] h-[140vw] opacity-[0.06] pointer-events-none"
            viewBox="0 0 800 800"
          >
            {[120, 220, 320, 420, 520, 620, 720].map((r, i) => (
              <circle
                key={r}
                cx="400"
                cy="400"
                r={r}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray={i % 2 === 0 ? "0" : "2 6"}
              />
            ))}
          </svg>
          <svg
            className="absolute -top-[40vw] -right-[40vw] w-[140vw] h-[140vw] opacity-[0.04] pointer-events-none"
            viewBox="0 0 800 800"
          >
            {[180, 300, 420, 540, 660].map((r, i) => (
              <circle
                key={r}
                cx="400"
                cy="400"
                r={r}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray={i % 2 === 0 ? "2 8" : "0"}
              />
            ))}
          </svg>


          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, transparent 55%, rgba(0,0,0,0.4) 100%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-6 left-6 sm:top-8 sm:left-10 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40"
          >
            <span>idx</span> <span className="text-paper/70">— 00</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-6 right-6 sm:top-8 sm:right-10 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40 flex items-center gap-2"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-hazard-orange animate-pulse" />
            <span className="tabular-nums text-paper/80">
              {String(pct).padStart(3, "0")}
            </span>
            <span>/ 100</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative px-6"
          >
            {(() => {
              const offset = (1 - progress) * 60; // px outward at 0, 0 at 100%
              const bracket = "h-6 w-6 sm:h-8 sm:w-8 border-hazard-orange absolute";
              const glow = { filter: "drop-shadow(0 0 6px hsl(var(--hazard-orange) / 0.6))" };
              return (
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className={`${bracket} border-l-2 border-t-2`}
                    style={{ top: -offset, left: -offset, ...glow }}
                  />
                  <div
                    className={`${bracket} border-r-2 border-t-2`}
                    style={{ top: -offset, right: -offset, ...glow }}
                  />
                  <div
                    className={`${bracket} border-l-2 border-b-2`}
                    style={{ bottom: -offset, left: -offset, ...glow }}
                  />
                  <div
                    className={`${bracket} border-r-2 border-b-2`}
                    style={{ bottom: -offset, right: -offset, ...glow }}
                  />
                </div>
              );
            })()}


            <svg
              viewBox="0 0 800 200"
              className="relative w-[88vw] max-w-[1100px] h-auto select-none"
              aria-label="Parth Joshi"
            >
              <defs>
                <clipPath id="text-clip">
                  <text
                    x="50%"
                    y="55%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="var(--font-display, 'Sora', sans-serif)"
                    fontWeight={900}
                    fontSize={200}
                    letterSpacing="-8"
                  >
                    {TARGET}
                  </text>
                </clipPath>
              </defs>

              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="var(--font-display, 'Sora', sans-serif)"
                fontWeight={900}
                fontSize={200}
                letterSpacing="-8"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.18}
                strokeWidth={1.2}
              >
                {TARGET}
              </text>

              <g clipPath="url(#text-clip)">
                <rect
                  x="0"
                  y={`${fillY}%`}
                  width="100%"
                  height={`${progress * 100}%`}
                  fill="hsl(var(--hazard-orange, 22 100% 50%))"
                  style={{ fill: "var(--hazard-orange, #FF6B00)" }}
                />
                <rect
                  x="0"
                  y={`calc(${fillY}% - 1px)`}
                  width="100%"
                  height="2"
                  fill="var(--paper, #F5F2EA)"
                  opacity={progress > 0 && progress < 1 ? 0.9 : 0}
                />
              </g>

              <g clipPath="url(#text-clip)">
                <rect
                  x="0"
                  y={`${fillY}%`}
                  width="100%"
                  height={`${progress * 100}%`}
                  fill="transparent"
                />
              </g>
            </svg>

            <div className="mt-4 flex items-end justify-center gap-[3px] h-8 sm:h-10">
              {Array.from({ length: BARS }).map((_, i) => {
                const t = i / (BARS - 1);
                const h =
                  0.35 +
                  0.65 *
                    Math.abs(
                      Math.sin(i * 1.7) * 0.5 + Math.cos(i * 0.6) * 0.5
                    );
                const active = progress > t;
                return (
                  <span
                    key={i}
                    className="w-[2px] sm:w-[3px] rounded-sm transition-colors duration-150"
                    style={{
                      height: `${h * 100}%`,
                      background: active
                        ? "hsl(var(--hazard-orange))"
                        : "rgba(245,242,234,0.12)",
                      boxShadow: active
                        ? "0 0 6px hsl(var(--hazard-orange) / 0.6)"
                        : "none",
                    }}
                  />
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-3 flex items-center justify-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-paper/45"
            >
              <span className="h-px w-8 bg-paper/25" />
              <span>Full-Stack Engineer</span>
              <span className="h-px w-8 bg-paper/25" />
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40 flex items-center gap-2"
          >
            <span>{statusText}</span>
            <span className="inline-block w-[2px] h-[10px] bg-hazard-orange animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40"
          >
            portfolio / v3
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
