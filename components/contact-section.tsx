"use client"

import { motion, useInView, useMotionTemplate, useMotionValue } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Mail, MapPin, Send, Copy, Check } from "lucide-react"

function SpotlightCard({ children, className = "" }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className={`relative border border-border bg-card overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(var(--primary-rgb), 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}

function TypingTerminal() {
  const [text, setText] = useState("")
  const fullText = "Let's build something amazing together!"
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      let i = 0
      const timer = setInterval(() => {
        setText(fullText.slice(0, i))
        i++
        if (i > fullText.length) clearInterval(timer)
      }, 50)
      return () => clearInterval(timer)
    }
  }, [isInView])

  return (
    <div ref={ref} className="mt-12 p-4 rounded-lg bg-black/80 border border-gray-800 font-mono text-sm shadow-2xl backdrop-blur-md w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-2 mb-3 border-b border-gray-800 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-gray-500">bash — 80x24</span>
      </div>
      <div className="space-y-1">
        <p className="text-gray-400">
          <span className="text-primary mr-2">➜</span>
          <span className="text-cyan-400">~</span> echo "Hello World"
        </p>
        <p className="text-emerald-400 pl-6 animate-pulse">
          {text}<span className="inline-block w-2 h-4 bg-primary ml-1 align-middle animate-ping" />
        </p>
      </div>
    </div>
  )
}

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("jparth840@outlook.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm mb-4 block">05. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm always ready for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to 
            get back to you!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <SpotlightCard className="p-8 rounded-2xl text-center">
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <div className="flex items-center justify-center gap-2 group cursor-pointer" onClick={copyEmail}>
              <span className="text-muted-foreground group-hover:text-primary transition-colors">
                jparth840@outlook.com
              </span>
              {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-8 rounded-2xl text-center">
            <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Location</h3>
            <p className="text-muted-foreground">Gujarat, India</p>
          </SpotlightCard>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <a
            href="mailto:jparth840@outlook.com"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-background text-primary font-bold rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            <span>Say Hello</span>
            <div className="absolute inset-0 rounded-full ring-4 ring-primary/20 group-hover:ring-8 group-hover:ring-primary/10 transition-all duration-500 opacity-0 group-hover:opacity-100" />
          </a>
        </motion.div>

        <TypingTerminal />
      </div>
    </section>
  )
}