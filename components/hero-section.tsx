"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { useEffect } from "react"

const socialLinks = [
  { icon: Github, href: "https://github.com/Parth482", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jparth842", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Kris1z0", label: "Twitter" },
  { icon: Mail, href: "mailto:jparth840@outlook.com", label: "Email" },
]

export default function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const tagline = "I build things for the web."

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
      onMouseMove={handleMouseMove} 
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -left-16 sm:-left-32 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/20 rounded-full blur-3xl opacity-50"
          style={{ x: useTransform(mouseX, [0, 1000], [0, 20]), y: useTransform(mouseY, [0, 1000], [0, 20]) }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-16 sm:-right-32 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50"
          style={{ x: useTransform(mouseX, [0, 1000], [0, -20]), y: useTransform(mouseY, [0, 1000], [0, -20]) }}
        />
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,200,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,200,0.03)_1px,transparent_1px)] bg-size-[32px_32px] sm:bg-size-[48px_48px] md:bg-size-[64px_64px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-xs sm:text-sm mb-2 sm:mb-4 inline-block"
              whileHover={{ x: 5 }} 
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-2 sm:mb-4 text-balance cursor-default bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70 hover:from-primary hover:to-blue-600 transition-all duration-500"
              whileHover={{ scale: 1.02, x: 10 }}
              whileTap={{ scale: 0.98 }}
            >
              Parth Joshi
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-muted-foreground mb-4 sm:mb-6 text-balance cursor-default"
              initial={{ opacity: 1 }}
            >
              {tagline.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }} 
              className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed"
            >
              I'm a full-stack developer specializing in building exceptional digital 
              experiences. Currently focused on creating accessible, human-centered 
              products that make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-5 sm:px-6 py-2.5 sm:py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors duration-200 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
              className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"                 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                >
                  <social.icon size={20} className="sm:w-5.5 sm:h-5.5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="order-1 lg:order-2 w-full max-w-md sm:max-w-lg mx-auto lg:max-w-none"
          >
            <motion.div 
               className="relative cursor-pointer"
               whileHover={{ scale: 1.03, rotate: -1 }} 
               whileTap={{ scale: 0.98, rotate: 0 }}    
               transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="absolute -inset-2 sm:-inset-4 bg-primary/20 rounded-xl sm:rounded-2xl blur-xl"
                whileHover={{ opacity: 1, scale: 1.1 }}
                animate={{ opacity: 0.6 }}
              />
              
              <div className="relative rounded-lg sm:rounded-xl border border-border bg-card overflow-hidden shadow-2xl">
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-secondary/50 border-b border-border">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                  <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs text-muted-foreground font-mono">
                    about-me.ts
                  </span>
                </div>

                <div className="p-3 sm:p-4 md:p-6 font-mono text-[10px] sm:text-xs md:text-sm leading-relaxed overflow-x-auto">
                  <div className="text-muted-foreground">
                    <span className="text-pink-400">interface</span>{" "}
                    <span className="text-cyan-400">Developer</span> {"{"}
                  </div>
                  <div className="pl-2 sm:pl-4">
                    <span className="text-muted-foreground">name:</span>{" "}
                    <span className="text-emerald-400">"Parth Joshi"</span>;
                  </div>
                  <div className="pl-2 sm:pl-4">
                    <span className="text-muted-foreground">title:</span>{" "}
                    <span className="text-emerald-400">"Full Stack Developer"</span>;
                  </div>
                  <div className="pl-2 sm:pl-4">
                    <span className="text-muted-foreground">location:</span>{" "}
                    <span className="text-emerald-400">"Gujarat, IN"</span>;
                  </div>
                  <div className="pl-2 sm:pl-4">
                    <span className="text-muted-foreground">available:</span>{" "}
                    <span className="text-pink-400">true</span>;
                  </div>
                  <div className="text-muted-foreground">{"}"}</div>
                  <div className="mt-2 sm:mt-4">
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-cyan-400">skills</span> = [
                  </div>
                  <div className="pl-2 sm:pl-4">
                    <span className="text-emerald-400">"TypeScript"</span>,{" "}
                    <span className="text-emerald-400">"React"</span>,{" "}
                    <span className="text-emerald-400">"Node.js"</span>,
                  </div>
                  <div className="pl-2 sm:pl-4">
                    <span className="text-emerald-400">"PostgreSQL"</span>,{" "}
                    <span className="text-emerald-400">"MongoDB"</span>,{" "}
                    <span className="text-emerald-400">"Docker"</span>
                  </div>
                  <div className="text-muted-foreground">];</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="text-xs font-mono">Scroll Down</span>
            <ArrowDown size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}