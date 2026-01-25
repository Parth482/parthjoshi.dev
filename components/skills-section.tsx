"use client"

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", href: "https://www.typescriptlang.org/" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", href: "https://www.python.org/" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", href: "https://react.dev" },
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", href: "https://reactnative.dev" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", href: "https://nextjs.org" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", href: "https://nodejs.org/en" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", href: "https://expressjs.com" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", href: "https://tailwindcss.com" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", href: "https://www.postgresql.org/" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", href: "https://www.mongodb.com/" },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", href: "https://redis.io/" },
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", href: "https://supabase.com/" },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", href: "https://www.docker.com/" },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", href: "https://aws.amazon.com/" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", href: "https://github.com/" },
      { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg", href: "https://github.com/features/actions" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", href: "https://code.visualstudio.com/" },
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", href: "https://www.postman.com/" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", href: "https://vercel.com/" },
      { name: "PM2", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pm2/pm2-original.svg", href: "https://pm2.keymetrics.io/" },
    ]
  }
]

function SkillCard({ skill, index }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const xPct = (clientX - left) / width - 0.5
    const yPct = (clientY - top) / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={skill.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]),
        rotateY: useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]),
        transformStyle: "preserve-3d",
      }}
      className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300"
    >
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.15), transparent 80%)"
        }}
      />
      
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="w-12 h-12 relative mb-3 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110 drop-shadow-md"
      >
        <Image
          src={skill.logo || "/placeholder.svg"}
          alt={`${skill.name} logo`}
          fill
          className="object-contain"
          unoptimized
        />
      </div>
      
      <span 
        style={{ transform: "translateZ(10px)" }}
        className="text-xs font-medium text-muted-foreground group-hover:text-foreground text-center transition-colors duration-300"
      >
        {skill.name}
      </span>
    </motion.a>
  )
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative bg-secondary/20 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="text-primary font-mono text-lg">02.</span>
            <h2 className="text-3xl font-bold text-foreground">Skills & Technologies</h2>
          </div>
          <div className="hidden sm:block flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard key={skill.name} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-6 rounded-2xl border border-border bg-card/30 backdrop-blur-sm text-center max-w-3xl mx-auto"
        >
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            <span className="text-primary font-mono mr-2">{">"}</span>
            Always learning and exploring new technologies. These are the tools I use most frequently, 
            but I'm always excited to pick up new ones for the right project.
            <span className="text-primary font-mono ml-2">{"<"}</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}