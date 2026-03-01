"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import Image from "next/image"

const featuredProjects = [
  {
    title: "Medee",
    description: "Medee is a Prediction market platform where you can trade event contracts. We're building the Australia first event trading platform.",
    tech: ["Next.js", "Node.js", "MongoDB", "Redis", "Coinbase Commerce",],
    github: "https://github.com/Parth482",
    live: "https://www.medee.com.au",
    image: "/medee.png"
  },
  {
    title: "Collaborative Whiteboard App",
    description: "A real-time collaborative whiteboard built using React, Socket.IO, and Node.js. Users can draw, erase, undo/redo strokes, and collaborate in real-time within rooms using socket-based communication.",
    tech: ["React", "Node.js", "Express.js", "Socket.io", "HTML5 Canvas", "MongoDB"],
    github: "https://github.com/Parth482/Collaborative-Whiteboard",
    live: "https://collaborative-whiteboard-tau-bay.vercel.app",
    image: "/collabboard.png"
  },
  {
    title: "Trust Forge",
    description: "Built a blockchain-based platform for secure digital document creation, certification, and verification, including NFT minting for verified documents. Integrated IPFS storage and BNB Testnet smart contracts using Web3.js, MERN Stack, BNB Testnet, IPFS, Solidity",
    tech: ["React", "Node.js", "MongoDB", "IPFS", "BNB Testnet", "Web3.js"],
    github: "https://github.com/Parth482/TrustForge-Frontend",
    live: "https://trustforge.vercel.app",
    image: "/trustforge.png"
  }
]

const otherProjects = [
  {
    title: "Dexora",
    description: "Created a mobile-first crypto token screener replicating and enhancing web-based token analytics with live price tracking, market cap, and volume insights powered by CoinGecko API.",
    tech: ["React Native", "TypeScript", "Coingecko API"],
    github: "https://github.com/Parth482/Dexora",
    live: "https://github.com/Parth482/Dexora"
  },
  {
    title: "Stakezen",
    description: "StakeZen is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application that allows users to deposit funds, place bets, and withdraw winnings. It features role-based authentication, wallet management, and PayPal Sandbox payment integration.",
    tech: ["Node.js", "Express.js", "MongoDB", "React"],
    github: "https://github.com/Parth482/stakezen",
    live: "https://github.com/Parth482/stakezen"
  },
  {
    title: "SecureAuth+",
    description: "SecureAuth+ is a robust two-factor authentication (2FA) system that enhances the security of user accounts by implementing email OTP verification. Users will receive a one-time passcode via email during login, providing an additional layer of protection. SecureAuth+ offers an optional anti-phishing code feature.",
    tech: ["React", "Express.js", "Node.js", "MongoDB"],
    github: "https://github.com/Parth482/secureauth",
    live: "https://github.com/Parth482/secureauth"
  }
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-primary font-mono text-sm sm:text-base">03.</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Featured Projects</h2>
          </div>
          <div className="hidden sm:block flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative grid lg:grid-cols-12 gap-4 sm:gap-6 items-center ${
                index % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:col-start-6" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-lg overflow-hidden bg-secondary aspect-video group border border-border/50"
                >
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
                  
                  {project.image ? (
                     <Image
                       src={project.image}
                       alt={project.title}
                       fill
                       className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                     />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-card to-secondary">
                      <div className="text-center p-4 sm:p-8">
                        <Folder className="w-10 h-10 sm:w-16 sm:h-16 mx-auto text-primary/50 mb-2 sm:mb-4" />
                        <p className="text-muted-foreground font-mono text-xs sm:text-sm">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  )}
                  
                </motion.div>
              </div>

              <div className={`lg:col-span-6 lg:row-start-1 ${
                index % 2 === 1 ? "lg:col-start-1" : "lg:col-start-6"
              }`}>
                <p className="text-primary font-mono text-xs sm:text-sm mb-1 sm:mb-2">Featured Project</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  {project.title}
                </h3>
                
                <div className="relative z-10 p-4 sm:p-6 rounded-lg bg-card border border-border shadow-xl mb-3 sm:mb-4">
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <ul className={`flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4 text-xs sm:text-sm font-mono text-muted-foreground ${
                  index % 2 === 1 ? "lg:justify-end" : ""
                }`}>
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  <motion.a
                    href={project.github}
                    target="_blank"                 
                    rel="noopener noreferrer"       
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github size={18} className="sm:w-5 sm:h-5" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"                 
                    rel="noopener noreferrer"       
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center mb-8 sm:mb-12"
        >
          Other Noteworthy Projects
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <Folder className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href={project.github}
                    target="_blank"                 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github size={16} className="sm:w-4.5 sm:h-4.5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"                 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink size={16} className="sm:w-4.5 sm:h-4.5" />
                  </a>
                </div>
              </div>

              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono text-muted-foreground">
                {project.tech.map((tech) => (
                  <li key={tech} className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-secondary">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
