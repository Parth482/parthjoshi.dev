"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react"
import { useEffect, useState, useRef } from "react"

function MagneticSocial({ children, href, label }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  function handleMouseMove({ clientX, clientY }) {
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    x.set(clientX - centerX)
    y.set(clientY - centerY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      className="relative flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300 group"
    >
      {children}
    </motion.a>
  )
}

const socialLinks = [
  { icon: Github, href: "https://github.com/Parth482", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jparth842", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Kris1z0", label: "Twitter" },
  { icon: Mail, href: "mailto:jparth840@outlook.com", label: "Email" },
]

export default function Footer() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata" 
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 sm:py-16 overflow-hidden border-t border-border bg-secondary/10">
      
      <div className="absolute left-0 bottom-0 w-full overflow-hidden pointer-events-none select-none">
        <h1 className="text-[15vw] leading-none font-bold text-foreground/5 text-center whitespace-nowrap opacity-20">
          PARTH JOSHI
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <motion.a
              href="#"
              className="text-2xl font-bold text-foreground inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-primary">{"<"}</span>
              PJ
              <span className="text-primary">{"/>"}</span>
            </motion.a>
            
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border w-fit mx-auto md:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                Gujarat, IN • {time}
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <MagneticSocial key={social.label} href={social.href} label={social.label}>
                <social.icon size={20} />
              </MagneticSocial>
            ))}
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <a 
              href="https://github.com/Parth482" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors font-medium"
            >
              Parth Joshi
            </a>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-default">
               <span>Built with Next.js</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-default">
               <span>Tailwind</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-default">
               <span>Motion</span>
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}