"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const experiences = [
  {
    company: "Gns-Media",
    role: "Software Developer Intern (Remote)",
    period: "Oct 2025 - Present",
    url: "https://www.linkedin.com/company/gnsmedia",
    description: [
      "Building A Prediction-Market Platform backend infrastructure from scratch, focusing on scalable API architecture and real-time data handling.",
      "Revamping Prediction-Market frontend codebase and integrating it seamlessly with backend services for a cohesive user experience.",
      "Implemented CI/CD pipelines using GitHub Actions",
      "Actively developing a facility management system from scratch, involving both mobile and web application components, under guided supervision."
    ]
  },
  {
    company: "Freelance",
    role: "Web3 Beta Tester (Remote)",
    period: "Jan 2023 - Oct 2025",
    url: "#",
    description: [
      "Participated as a freelance beta tester for decentralized blockchain platforms, including EigenLayer (testnet & mainnet),Berachain testnet, Puffer Finance, Kaito AI, and other Web3 ecosystems.",
      "Contributed to structured bug reporting, smart-contract behavior testing, and evaluation of testnet environments, gaining exposure to core Web3 concepts such as gas optimization, staking mechanisms, and incentive models.",
      " Actively tested Web3-based games such as Nyan Heroes, Off The Grid, Metalcore, and Blood Loop, providing gameplay feedback and reporting issues through community channels including Discord and official forums.",
    ]
  }
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 relative bg-secondary/20" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-primary font-mono text-sm sm:text-base">04.</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Experience</h2>
          </div>
          <div className="hidden sm:block flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 sm:gap-6"
        >
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border scrollbar-hide">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-mono text-left whitespace-nowrap transition-all duration-200 relative ${
                  activeTab === index
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {exp.company}
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 md:bottom-auto md:left-0 left-0 right-0 md:right-auto h-0.5 md:h-full md:w-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex-1 min-h-70 sm:min-h-75 p-2 sm:p-4">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1">
                {experiences[activeTab].role}{" "}
                <a
                  href={experiences[activeTab].url}
                  target="_blank"                 
                  rel="noopener noreferrer"       
                  className="text-primary hover:underline"
                >
                  @ {experiences[activeTab].company}
                </a>
              </h3>
              
              <p className="text-xs sm:text-sm font-mono text-muted-foreground mb-4 sm:mb-6">
                {experiences[activeTab].period}
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {experiences[activeTab].description.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base"
                  >
                    <span className="text-primary mt-1 sm:mt-1.5 shrink-0">▹</span>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
