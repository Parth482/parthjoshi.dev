import { motion } from "framer-motion";

export function ContactFooter() {
  return (
    <footer id="contact" className="py-24 border-t border-paper/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col gap-4">
            <span className="font-heading text-5xl font-semibold text-hazard-yellow">06</span>
            <h2 className="text-xs font-medium uppercase tracking-widest text-paper/40">
              _Comms_Channel
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <a
              href="mailto:jparth840@outlook.com"
              className="text-3xl sm:text-5xl md:text-6xl font-heading font-semibold hover:text-hazard-orange transition-colors tracking-tighter break-all"
            >
              jparth840@outlook.com
            </a>
            <div className="flex flex-col justify-end">
              <div className="grid grid-cols-2 gap-4 border-t border-paper/10 pt-8">
                <div>
                  <p className="text-[10px] font-bold uppercase text-paper/40 mb-3 tracking-widest">Socials</p>
                  <ul className="text-sm font-medium space-y-2">
                    <li><a href="https://github.com/Parth482" target="_blank" rel="noreferrer" className="hover:text-hazard-yellow">GitHub / Parth482</a></li>
                    <li><a href="https://www.linkedin.com/in/jparth842" target="_blank" rel="noreferrer" className="hover:text-hazard-yellow">LinkedIn / jparth842</a></li>
                    <li><a href="https://x.com/Kris1z0" target="_blank" rel="noreferrer" className="hover:text-hazard-yellow">Twitter / Kris1z0</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-paper/40 mb-3 tracking-widest">Location</p>
                  <p className="text-sm font-medium">Gujarat, IN<br />UTC+5:30</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-24 relative h-px bg-paper/10">
          <motion.div
            aria-hidden
            className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-hazard-orange via-hazard-yellow to-hazard-orange origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-paper/30">© 2025 PARTH JOSHI / SYSTEM-V.02</p>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-paper/30">
            Built with <span className="text-hazard-orange">React</span> · <span className="text-hazard-yellow">TanStack Start</span> · <span className="text-hazard-orange">Tailwind</span> · <span className="text-hazard-yellow">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
