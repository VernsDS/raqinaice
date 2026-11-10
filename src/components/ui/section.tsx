"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, y = 26 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

type SectionHeadingProps = {
  index: string
  label: string
  title: ReactNode
  description?: string
  className?: string
}

export function SectionHeading({ index, label, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] text-berry">{index}</span>
        <span className="h-px w-8 bg-ink/15" />
        <span className="label">{label}</span>
      </div>
      <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.3rem)] font-light leading-[1.06] tracking-[-0.01em]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/60">{description}</p>
      )}
    </div>
  )
}
