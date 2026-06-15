import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section id="info" className="py-24 border-b border-paper/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <span className="font-heading text-5xl font-semibold text-hazard-yellow">01</span>
            <h2 className="text-xs font-medium uppercase tracking-widest mt-4 text-paper/70">
              _Origin_Story
            </h2>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.15}>
            <p className="text-xl md:text-2xl leading-tight font-medium max-w-[44ch] text-pretty">
              Two years engineering full-stack systems across the MERN/MENN ecosystem, React Native, and Web3.
              I build scalable, real-time architectures — APIs, mobile clients, and the messy plumbing in between.
            </p>
            <p className="mt-6 text-base text-paper/60 max-w-[60ch] leading-relaxed">
              Currently shipping production code at GNS Media FZ LLC. Comfortable with TypeScript, Next.js,
              Node, React Native, Python and distributed databases. Always poking at smart contracts and
              testnets on the side.
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href="#work"
                className="bg-hazard-orange text-paper font-semibold text-xs uppercase tracking-widest py-3 px-5 ring-1 ring-hazard-orange hover:bg-hazard-yellow hover:text-ink hover:ring-hazard-yellow transition-colors"
              >
                View Work →
              </a>
              <a
                href="/parth_resume.pdf"
                download
                className="bg-hazard-yellow text-ink font-semibold text-xs uppercase tracking-widest py-3 px-5 ring-1 ring-hazard-yellow hover:bg-paper hover:ring-paper transition-colors"
              >
                Download Resume ↓
              </a>
              <a
                href="#contact"
                className="bg-transparent text-paper border border-paper/30 font-semibold text-xs uppercase tracking-widest py-3 px-5 hover:border-hazard-orange hover:text-hazard-orange transition-colors"
              >
                Contact
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
