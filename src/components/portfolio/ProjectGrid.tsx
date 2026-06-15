import { motion, AnimatePresence, LayoutGroup, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useState, useRef } from "react";
import onDemandImg from "@/assets/on-demand.webp";
import whiteboardImg from "@/assets/whiteboard.webp";
import trustforgeImg from "@/assets/trustforge.webp";

type Project = {
  title: string;
  image: string;
  alt: string;
  body: string;
  tag: string;
  stack: string[];
  live?: string;
  repo?: string;
};

const PROJECTS: Project[] = [
  {
    title: "On-Demand Services Platform",
    image: onDemandImg,
    alt: "Mobile app dashboard with live map and job dispatch card",
    body: "Real-time job dispatch with cross-platform mobile and web clients. Live location updates streamed from dispatch through completion, with role-based access for service providers and customers.",
    tag: "In Production",
    stack: ["React Native", "Next.js", "Node.js", "WebSockets", "Geo APIs"],
  },
  {
    title: "Collaborative Whiteboard",
    image: whiteboardImg,
    alt: "Collaborative drawing canvas with multi-cursor activity",
    body: "Real-time multiplayer drawing tool. Draw, erase, undo/redo and collaborate within rooms over Socket.IO with sub-50ms sync.",
    tag: "Open Source",
    stack: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
    live: "https://collaborative-whiteboard-tau-bay.vercel.app/",
    repo: "https://github.com/Parth482/Collaborative-Whiteboard",
  },
  {
    title: "TrustForge",
    image: trustforgeImg,
    alt: "TrustForge blockchain certification interface",
    body: "Blockchain-based document certification with NFT minting for verified records. IPFS storage with BNB Testnet smart contracts via Web3.js.",
    tag: "Web3 / IPFS",
    stack: ["React", "Node.js", "Solidity", "IPFS", "BNB Testnet"],
    live: "https://trustforge.vercel.app/",
    repo: "https://github.com/Parth482/TrustForge-Frontend",
  },
];

const FILTERS = ["All", "In Production", "Open Source", "Web3 / IPFS"] as const;
type Filter = (typeof FILTERS)[number];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000, transformStyle: "preserve-3d" }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.article>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <>
      <div className="overflow-hidden mb-6 border border-paper/10">
        <motion.img
          src={p.image}
          alt={p.alt}
          loading="lazy"
          width={1024}
          height={768}
          className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <h3 className="font-heading text-xl font-semibold mb-3 tracking-tight">{p.title}</h3>
      <p className="text-sm text-paper/60 mb-6 flex-grow leading-relaxed">{p.body}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {p.stack.map((s) => (
          <span
            key={s}
            className="px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest border border-paper/15 text-paper/70"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-paper/10">
        <span className="text-[10px] font-bold text-hazard-orange uppercase tracking-widest">{p.tag}</span>
        <div className="flex gap-3 text-[10px] font-semibold uppercase tracking-widest">
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className="hover:text-hazard-yellow">
              Live
            </a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer" className="hover:text-hazard-yellow">
              Code
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [isMobile, setIsMobile] = useState(false);
  const visible = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter)),
    [filter]
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const cardClass =
    "group relative border border-paper/10 p-6 flex flex-col hover:border-hazard-orange transition-colors bg-ink before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-paper/25 before:to-transparent before:pointer-events-none";

  return (
    <section className="py-24 border-b border-paper/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex justify-center md:justify-start">
          <LayoutGroup id="project-filter">
            <div
              role="tablist"
              aria-label="Filter projects"
              className="inline-flex items-center gap-1 p-1 rounded-full border border-paper/15 bg-paper/[0.04]"
              style={{ backdropFilter: "blur(20px) saturate(160%)" }}
            >
              {FILTERS.map((f) => {
                const active = filter === f;
                return (
                  <button
                    key={f}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(f)}
                    className="relative px-3.5 sm:px-4 h-9 min-h-[36px] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] rounded-full transition-colors active:scale-[0.96]"
                  >
                    {active && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 rounded-full bg-hazard-orange shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className={`relative ${active ? "text-paper" : "text-paper/60"}`}>{f}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </div>

        {isMobile ? (
          <div className="-mx-6">
            <div
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4 scrollbar-hide"
              style={{ scrollbarWidth: "none" }}
            >
              <AnimatePresence mode="popLayout">
                {visible.map((p) => (
                  <motion.article
                    key={p.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`${cardClass} snap-center shrink-0 w-[85%]`}
                  >
                    <ProjectCard p={p} />
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
            <p className="mt-3 px-6 text-[10px] uppercase tracking-[0.2em] text-paper/40">
              ← Swipe to explore →
            </p>
          </div>
        ) : (
          <LayoutGroup>
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {visible.map((p) => (
                  <TiltCard key={p.title} className={cardClass}>
                    <ProjectCard p={p} />
                  </TiltCard>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        )}
      </div>
    </section>
  );
}
