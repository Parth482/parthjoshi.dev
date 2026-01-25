"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const codeLines = [
  { text: "const developer = {", delay: 0 },
  { text: '  name: "Parth Joshi",', delay: 0.15 },
  { text: '  role: "Full Stack Developer",', delay: 0.3 },
  { text: "  skills: [", delay: 0.45 },
  { text: '    "React", "Node.js", "TypeScript",', delay: 0.6 },
  { text: '    "PostgreSQL", "MongoDB", "Docker"', delay: 0.75 },
  { text: "  ],", delay: 0.9 },
  { text: "  passion: true,", delay: 1.05 },
  { text: "  coffeeLevel: Infinity", delay: 1.2 },
  { text: "};", delay: 1.35 },
  { text: "", delay: 1.5 },
  { text: "await developer.init();", delay: 1.65 },
]

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          clearInterval(cursorInterval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => {
      clearInterval(cursorInterval)
      clearInterval(progressInterval)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background px-4 sm:px-6"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="w-full max-w-sm sm:max-w-lg md:max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-border bg-card overflow-hidden shadow-2xl"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-secondary/50 border-b border-border">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
            <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs text-muted-foreground font-mono">
              portfolio.tsx — Loading...
            </span>
          </div>

          <div className="p-3 sm:p-4 md:p-6 font-mono text-[10px] sm:text-xs md:text-sm lg:text-base space-y-0.5 sm:space-y-1 min-h-50 sm:min-h-70 md:min-h-80 overflow-x-auto">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: line.delay, duration: 0.3 }}
                className="flex"
              >
                <span className="text-muted-foreground w-4 sm:w-5 md:w-6 select-none shrink-0">
                  {index + 1}
                </span>
                <span className="ml-2 sm:ml-3 md:ml-4 whitespace-nowrap">
                  <CodeHighlight text={line.text} />
                </span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex"
            >
              <span className="text-muted-foreground w-4 sm:w-5 md:w-6 select-none shrink-0">
                13
              </span>
              <span className="ml-2 sm:ml-3 md:ml-4">
                {showCursor && (
                  <span className="inline-block w-1.5 sm:w-2 h-3 sm:h-4 bg-primary animate-pulse" />
                )}
              </span>
            </motion.div>
          </div>

          <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span className="text-[10px] sm:text-xs text-muted-foreground font-mono">
                Initializing portfolio...
              </span>
              <span className="text-[10px] sm:text-xs text-primary font-mono">
                {progress}%
              </span>
            </div>
            <div className="h-0.5 sm:h-1 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 sm:mt-6 flex items-center justify-center gap-2"
        >
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-muted-foreground">
            Building something amazing...
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}

function CodeHighlight({ text }: { text: string }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <span className="text-muted-foreground">{text}</span>
  }

  const highlightedText = text
    .replace(/(".*?")/g, '<span class="text-emerald-400">$1</span>')
    .replace(/\b(const|await|true|Infinity)\b/g, '<span class="text-pink-400">$1</span>')
    .replace(/\b(developer|init)\b/g, '<span class="text-cyan-400">$1</span>')
    .replace(/(\{|\}|\[|\]|;|,|:)/g, '<span class="text-muted-foreground">$1</span>')

  return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />
}