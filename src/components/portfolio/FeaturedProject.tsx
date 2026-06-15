import { motion } from "framer-motion";
import medeeImg from "@/assets/medee.webp";
import { Reveal } from "./Reveal";

export function FeaturedProject() {
  return (
    <section id="work" className="py-24 border-b border-paper/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="font-heading text-5xl font-semibold text-hazard-orange">03</span>
            <h2 className="text-xs font-medium uppercase tracking-widest mt-4 text-paper/70">_Selected_Works</h2>
          </div>
        </div>

        <div className="group relative">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <a href="https://www.medee.com.au/" target="_blank" rel="noreferrer" className="block overflow-hidden border border-paper/10">
                <motion.img
                  src={medeeImg}
                  alt="Medee prediction market platform interface"
                  width={1280}
                  height={768}
                  className="w-full aspect-[16/9] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6 }}
                />
              </a>
            </motion.div>
            <Reveal className="lg:w-1/3 flex flex-col justify-center" delay={0.15}>
              <span className="text-hazard-yellow text-[10px] font-bold mb-4 tracking-[0.3em] uppercase">
                Featured_01
              </span>
              <h3 className="font-heading text-4xl md:text-5xl font-semibold mb-6 leading-none tracking-tighter">
                Medee
              </h3>
              <p className="text-paper/70 leading-relaxed mb-6 max-w-[40ch]">
                A prediction-market platform for trading event contracts. Built a high-throughput
                backend with real-time price feeds, Redis-backed order state, and Coinbase Commerce
                payment rails.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js", "Node.js", "MongoDB", "Redis", "Coinbase Commerce"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-[10px] font-semibold uppercase tracking-widest border border-paper/20 text-paper/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-xs font-semibold uppercase tracking-widest">
                <a href="https://www.medee.com.au/" target="_blank" rel="noreferrer" className="text-hazard-orange hover:text-hazard-yellow transition-colors">
                  Live →
                </a>
                <a href="https://github.com/Parth482" target="_blank" rel="noreferrer" className="text-paper/60 hover:text-hazard-yellow transition-colors">
                  GitHub →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
