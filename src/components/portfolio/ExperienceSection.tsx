import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-paper text-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-5xl font-semibold text-hazard-orange">05</span>
            <h2 className="text-xs font-medium uppercase tracking-widest mt-4 text-ink/50">
              _Deployment_Logs
            </h2>
          </motion.div>
          <div className="md:col-span-8">
            <div className="space-y-12">
              <motion.article
                className="border-b border-ink/10 pb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold font-heading tracking-tight">GNS Media FZ LLC</h3>
                    <p className="font-medium text-ink/60">Software Developer Intern — Remote</p>
                  </div>
                  <span className="text-[10px] font-bold font-heading bg-hazard-yellow px-2 py-1 uppercase tracking-widest">
                    Oct 2025 — Present
                  </span>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-ink/80">
                  <li className="flex gap-3">
                    <span className="text-hazard-orange font-bold">▹</span>
                    Working as a Software Developer Intern with primary exposure to full-stack development
                    using the MENN stack and React Native, adapting technologies based on project requirements.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-hazard-orange font-bold">▹</span>
                    Contributing to backend development and system integration for a prediction-market style
                    platform, focusing on API development, data handling and application logic.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-hazard-orange font-bold">▹</span>
                                        Building a full-stack tradie marketplace platform (Fixes) connecting customers with
                    skilled tradespeople — featuring AI-powered job quoting, real-time job matching, and
                    role-based mobile/web apps for both hirers and service providers.

                  </li>
                </ul>
              </motion.article>

              <motion.article
                className="pb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold font-heading tracking-tight">Freelance Web3 Beta Tester</h3>
                    <p className="font-medium text-ink/60">Independent / Community-based — Remote</p>
                  </div>
                  <span className="text-[10px] font-bold font-heading bg-ink text-paper px-2 py-1 uppercase tracking-widest">
                    Jan 2023 — Oct 2025
                  </span>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-ink/80">
                  <li className="flex gap-3">
                    <span className="text-hazard-orange font-bold">▹</span>
                    Beta-tested decentralized platforms including EigenLayer (testnet & mainnet), Berachain
                    testnet, Puffer Finance, Kaito AI and other Web3 ecosystems.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-hazard-orange font-bold">▹</span>
                    Structured bug reporting, smart-contract behavior testing, and evaluation of testnet
                    environments — gas optimization, staking mechanisms, incentive models.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-hazard-orange font-bold">▹</span>
                    Tested Web3 games (Nyan Heroes, Off The Grid, Metalcore, Blood Loop) with gameplay
                    feedback through Discord and official forums.
                  </li>
                </ul>
              </motion.article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
