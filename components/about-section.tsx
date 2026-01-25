"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Code2, Globe, Cpu } from "lucide-react"

const Highlight = ({ children, color = "text-primary" }) => (
  <span className={`${color} font-semibold hover:underline decoration-wavy underline-offset-4 decoration-primary/50 transition-all cursor-default`}>
    {children}
  </span>
)

const StatCard = ({ number, label, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }} 
    className="flex flex-col items-center justify-center p-4 rounded-xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 group"
  >
    <div className="mb-2 p-2 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
      <Icon size={20} />
    </div>
    <div className="text-2xl sm:text-3xl font-bold text-foreground">{number}</div>
    <div className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">{label}</div>
  </motion.div>
)

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-20 right-0 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
        <span className="text-[10rem] md:text-[15rem] font-bold text-primary">01</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-primary font-mono text-sm sm:text-base">01.</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">About Me</h2>
          </div>
          <div className="hidden sm:block flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground leading-relaxed text-sm sm:text-base"
            >
              Hello! I'm Parth, a passionate <Highlight>full-stack developer</Highlight> with over 2 years of 
              experience building web applications. My journey in tech started when I 
              built my first html page in high school, and I've been hooked ever since.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed text-sm sm:text-base"
            >
              I specialize in creating digital experiences that are not only visually 
              appealing but also <Highlight>performant</Highlight> and <Highlight>accessible</Highlight>. 
              I believe in writing clean, maintainable code and always staying curious about new technologies.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed text-sm sm:text-base"
            >
              When I'm not coding, you can find me exploring <Highlight color="text-sky-500">Twitter (X)</Highlight>, 
              reading tech blogs, or developing open-source projects. I'm always 
              excited to take on new challenges and collaborate on interesting projects.
            </motion.p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <StatCard number="2+" label="Years Exp." icon={Code2} delay={0.4} />
              <StatCard number="10+" label="Projects" icon={Globe} delay={0.5} />
              <StatCard number="100%" label="Committed" icon={Cpu} delay={0.6} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mx-auto md:ml-auto"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 group">
              

              <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:border-primary transition-all duration-300" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-secondary shadow-2xl">
                <div className="absolute inset-0 bg-primary/20 z-10 transition-opacity duration-300 group-hover:opacity-0 mix-blend-multiply" />
                <Image 
                  src="/profile.jpg" 
                  alt="Parth Joshi"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  priority 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}